/**
 * Frontend Security Utilities
 * @author Kadir Diego Padin Rodriguez
 * @website rodriguez-digital.de
 */

// Content Security Policy
export const setupCSP = () => {
  const meta = document.createElement('meta');
  meta.httpEquiv = 'Content-Security-Policy';
  meta.content = `
    default-src 'self';
    script-src 'self' 'unsafe-inline' https://www.google.com;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    img-src 'self' data: https: blob:;
    font-src 'self' https://fonts.gstatic.com;
    connect-src 'self' https://api.example.com;
    frame-src 'self' https://www.google.com https://*.google.com;
    worker-src 'self' blob:;
    media-src 'self';
    object-src 'none';
  `.replace(/\s+/g, ' ').trim();
  document.head.appendChild(meta);
};

// XSS Protection
export const sanitizeHTML = (str: string): string => {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
};

// Form Data Protection
export const protectFormData = (formData: Record<string, any>): Record<string, any> => {
  const sanitizedData: Record<string, any> = {};
  
  Object.entries(formData).forEach(([key, value]) => {
    if (typeof value === 'string') {
      sanitizedData[key] = sanitizeHTML(value.trim());
    } else {
      sanitizedData[key] = value;
    }
  });
  
  return sanitizedData;
};

// Security Headers for Fetch
export const secureHeaders = {
  'Content-Type': 'application/json',
  'X-Content-Type-Options': 'nosniff',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin'
};

// Rate Limiting (Frontend)
export class RateLimiter {
  private attempts: Map<string, number[]>;
  private maxAttempts: number;
  private timeWindow: number;

  constructor(maxAttempts = 5, timeWindow = 60000) {
    this.attempts = new Map();
    this.maxAttempts = maxAttempts;
    this.timeWindow = timeWindow;
  }

  canMakeRequest(action: string): boolean {
    const now = Date.now();
    const attempts = this.attempts.get(action) || [];
    
    // Remove old attempts
    const recentAttempts = attempts.filter(time => now - time < this.timeWindow);
    
    if (recentAttempts.length >= this.maxAttempts) {
      return false;
    }
    
    recentAttempts.push(now);
    this.attempts.set(action, recentAttempts);
    return true;
  }

  reset(action: string): void {
    this.attempts.delete(action);
  }
}

// Initialize security features
export const initSecurity = () => {
  setupCSP();
  
  // Add security meta tags
  const securityMeta = {
    'X-Content-Type-Options': 'nosniff',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin'
  };

  Object.entries(securityMeta).forEach(([key, value]) => {
    const meta = document.createElement('meta');
    meta.httpEquiv = key;
    meta.content = value;
    document.head.appendChild(meta);
  });
};
