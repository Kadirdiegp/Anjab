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

// Sanitize einzelne Eingabe
const sanitizeString = (input: string): string => {
  return input
    .trim()
    .replace(/[<>]/g, '') // Basic XSS prevention
    .replace(/javascript:/gi, '') // Prevent JavaScript injection
    .replace(/data:/gi, '') // Prevent data URI injection
    .replace(/\\/g, '\\\\') // Escape backslashes
    .replace(/"/g, '\\"'); // Escape quotes
};

// Sanitize ein Objekt oder Array rekursiv
export const sanitizeInput = (input: any): any => {
  if (typeof input === 'string') {
    return sanitizeString(input);
  }
  
  if (Array.isArray(input)) {
    return input.map(item => sanitizeInput(item));
  }
  
  if (typeof input === 'object' && input !== null) {
    const sanitized: { [key: string]: any } = {};
    for (const [key, value] of Object.entries(input)) {
      sanitized[sanitizeString(key)] = sanitizeInput(value);
    }
    return sanitized;
  }
  
  return input;
};

// Rate Limiter Klasse
export class RateLimiter {
  private attempts: Map<string, number[]>;
  private maxAttempts: number;
  private timeWindow: number;

  constructor(maxAttempts: number, timeWindow: number) {
    this.attempts = new Map();
    this.maxAttempts = maxAttempts;
    this.timeWindow = timeWindow;
  }

  canMakeRequest(key: string): boolean {
    const now = Date.now();
    const userAttempts = this.attempts.get(key) || [];
    
    // Entferne alte Versuche
    const validAttempts = userAttempts.filter(
      timestamp => now - timestamp < this.timeWindow
    );
    
    if (validAttempts.length >= this.maxAttempts) {
      return false;
    }
    
    validAttempts.push(now);
    this.attempts.set(key, validAttempts);
    return true;
  }

  reset(key: string): void {
    this.attempts.delete(key);
  }
}

// CSRF Token Generator
export const generateCSRFToken = (): string => {
  return Math.random().toString(36).substring(2) +
         Math.random().toString(36).substring(2);
};

// Secure Headers für API Requests
export const secureHeaders = {
  'Content-Type': 'application/json',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
  'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
  'Pragma': 'no-cache',
  'Expires': '0'
};

// Form Data Protection
export const protectFormData = (data: { [key: string]: any }): { [key: string]: any } => {
  const safeData: { [key: string]: any } = {};
  
  for (const [key, value] of Object.entries(data)) {
    if (typeof value === 'string') {
      safeData[key] = sanitizeInput(value);
    } else {
      safeData[key] = value;
    }
  }
  
  return safeData;
};

// Form Data Protection
export const protectFormDataSecure = (data: { [key: string]: any }): { [key: string]: any } => {
  const protectedData: { [key: string]: any } = {};
  
  for (const [key, value] of Object.entries(data)) {
    if (typeof value === 'string') {
      protectedData[key] = sanitizeInput(value);
    } else {
      protectedData[key] = value;
    }
  }
  
  return protectedData;
};

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
