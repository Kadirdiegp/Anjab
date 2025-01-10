/**
 * Security Middleware
 * @author Kadir Diego Padin Rodriguez
 * @website rodriguez-digital.de
 */

import { Request, Response, NextFunction, Application } from 'express';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

// Rate Limiter Konfiguration
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 Minuten
  max: 100 // Limit jede IP auf 100 Requests pro windowMs
});

// Allowed Origins
const ALLOWED_ORIGINS = {
  production: 'https://haarambiente.netlify.app',
  development: 'http://localhost:3000'
};

// Security Headers
const securityHeaders = {
  'Content-Security-Policy': 
    "default-src 'self'; " +
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/; " +
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
    "img-src 'self' data: https:; " +
    "font-src 'self' https://fonts.gstatic.com; " +
    "frame-src 'self' https://www.google.com/recaptcha/; " +
    "connect-src 'self' https://haarambiente.netlify.app",
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'SAMEORIGIN',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
};

// Input Validation Middleware
export const validateInput = (req: Request, _res: Response, next: NextFunction) => {
  try {
    // Sanitize body
    if (req.body) {
      const sanitizedBody = Object.entries(req.body).reduce((acc: any, [key, value]) => {
        if (typeof value === 'string') {
          acc[key] = value.trim().replace(/[<>]/g, '');
        } else {
          acc[key] = value;
        }
        return acc;
      }, {});
      req.body = sanitizedBody;
    }
    
    // Sanitize query parameters
    if (req.query) {
      const sanitizedQuery = Object.entries(req.query).reduce((acc: any, [key, value]) => {
        if (typeof value === 'string') {
          acc[key] = value.trim().replace(/[<>]/g, '');
        } else {
          acc[key] = value;
        }
        return acc;
      }, {});
      req.query = sanitizedQuery;
    }
    
    // Sanitize URL parameters
    if (req.params) {
      const sanitizedParams = Object.entries(req.params).reduce((acc: any, [key, value]) => {
        if (typeof value === 'string') {
          acc[key] = value.trim().replace(/[<>]/g, '');
        } else {
          acc[key] = value;
        }
        return acc;
      }, {});
      req.params = sanitizedParams;
    }
    
    next();
  } catch (error) {
    next(error);
  }
};

// Security Middleware Setup
export const setupSecurity = (app: Application): void => {
  // Basic Security
  app.use(helmet());
  
  // CORS setup
  app.use((req: Request, res: Response, next: NextFunction) => {
    const origin = process.env.NODE_ENV === 'production' 
      ? ALLOWED_ORIGINS.production
      : ALLOWED_ORIGINS.development;

    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Max-Age', '86400'); // 24 Stunden

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
      res.status(204).end();
      return;
    }

    next();
  });
  
  app.use(limiter);
  
  // Custom Security Headers
  app.use((_req: Request, res: Response, next: NextFunction) => {
    Object.entries(securityHeaders).forEach(([key, value]) => {
      res.setHeader(key, value);
    });
    next();
  });
  
  // Input Validation
  app.use(validateInput);
  
  // Error Handler
  app.use((error: Error, _req: Request, res: Response, _next: NextFunction) => {
    console.error('Security Error:', error);
    res.status(400).json({
      error: 'Invalid Input',
      message: process.env.NODE_ENV === 'development' ? error.message : 'Ein Fehler ist aufgetreten'
    });
  });
};
