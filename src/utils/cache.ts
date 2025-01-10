/**
 * Cache Service
 * @author Kadir Diego Padin Rodriguez
 * @website rodriguez-digital.de
 */

interface CacheItem<T> {
  value: T;
  timestamp: number;
  expiry: number;
}

class CacheService {
  private storage: Storage;
  private prefix: string;

  constructor(storage: Storage = localStorage, prefix: string = 'app_cache_') {
    this.storage = storage;
    this.prefix = prefix;
  }

  private getKey(key: string): string {
    return `${this.prefix}${key}`;
  }

  set<T>(key: string, value: T, expiryInMinutes: number = 60): void {
    const item: CacheItem<T> = {
      value,
      timestamp: Date.now(),
      expiry: expiryInMinutes * 60 * 1000
    };

    try {
      this.storage.setItem(this.getKey(key), JSON.stringify(item));
    } catch (error) {
      console.warn('Cache storage failed:', error);
      this.cleanup(); // Try to free up space
    }
  }

  get<T>(key: string): T | null {
    const data = this.storage.getItem(this.getKey(key));
    
    if (!data) return null;

    try {
      const item: CacheItem<T> = JSON.parse(data);
      const now = Date.now();

      if (now - item.timestamp > item.expiry) {
        this.remove(key);
        return null;
      }

      return item.value;
    } catch {
      this.remove(key);
      return null;
    }
  }

  remove(key: string): void {
    this.storage.removeItem(this.getKey(key));
  }

  cleanup(): void {
    const now = Date.now();

    for (let i = 0; i < this.storage.length; i++) {
      const key = this.storage.key(i);
      if (key?.startsWith(this.prefix)) {
        try {
          const data = this.storage.getItem(key);
          if (data) {
            const item: CacheItem<unknown> = JSON.parse(data);
            if (now - item.timestamp > item.expiry) {
              this.storage.removeItem(key);
            }
          }
        } catch {
          // Remove invalid items
          this.storage.removeItem(key);
        }
      }
    }
  }

  clear(): void {
    const keysToRemove: string[] = [];

    for (let i = 0; i < this.storage.length; i++) {
      const key = this.storage.key(i);
      if (key?.startsWith(this.prefix)) {
        keysToRemove.push(key);
      }
    }

    keysToRemove.forEach(key => this.storage.removeItem(key));
  }
}

export const cache = new CacheService();

// Custom hook for data fetching with cache
import { useState, useEffect } from 'react';

interface CacheFetchOptions {
  expiryMinutes?: number;
  forceRefresh?: boolean;
}

export function useCachedFetch<T>(
  url: string, 
  options: CacheFetchOptions = {}
): { data: T | null; loading: boolean; error: Error | null } {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check cache first
        if (!options.forceRefresh) {
          const cachedData = cache.get<T>(url);
          if (cachedData) {
            setData(cachedData);
            setLoading(false);
            return;
          }
        }

        // Fetch fresh data
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const json = await response.json();
        setData(json);
        
        // Cache the fresh data
        cache.set(url, json, options.expiryMinutes);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An error occurred'));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, options.forceRefresh, options.expiryMinutes]);

  return { data, loading, error };
}

export default cache;
