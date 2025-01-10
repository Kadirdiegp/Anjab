/**
 * Form Validation Utilities
 * @author Kadir Diego Padin Rodriguez
 * @website rodriguez-digital.de
 */

// Email validation
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Phone number validation (German format)
export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^(\+49|0)[1-9][0-9]{9,14}$/;
  return phoneRegex.test(phone);
};

// Text input validation
export const isValidText = (text: string, minLength = 2, maxLength = 100): boolean => {
  const sanitizedText = text.trim();
  return sanitizedText.length >= minLength && sanitizedText.length <= maxLength;
};

// URL validation
export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

// XSS prevention
export const sanitizeInput = (input: string): string => {
  return input
    .replace(/[<>]/g, '') // Remove < and >
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .trim();
};

// Form validation
export interface ValidationResult {
  isValid: boolean;
  errors: { [key: string]: string };
}

export const validateForm = (data: { [key: string]: string }): ValidationResult => {
  const errors: { [key: string]: string } = {};

  Object.entries(data).forEach(([key, value]) => {
    // Sanitize all inputs first
    const sanitizedValue = sanitizeInput(value);

    switch (key) {
      case 'email':
        if (!isValidEmail(sanitizedValue)) {
          errors[key] = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
        }
        break;

      case 'phone':
        if (!isValidPhone(sanitizedValue)) {
          errors[key] = 'Bitte geben Sie eine gültige Telefonnummer ein.';
        }
        break;

      case 'name':
        if (!isValidText(sanitizedValue, 2, 50)) {
          errors[key] = 'Der Name muss zwischen 2 und 50 Zeichen lang sein.';
        }
        break;

      case 'message':
        if (!isValidText(sanitizedValue, 10, 1000)) {
          errors[key] = 'Die Nachricht muss zwischen 10 und 1000 Zeichen lang sein.';
        }
        break;

      default:
        if (!isValidText(sanitizedValue)) {
          errors[key] = 'Ungültige Eingabe.';
        }
    }
  });

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

// Security token generation
export const generateToken = (length: number = 32): string => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let token = '';
  for (let i = 0; i < length; i++) {
    token += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return token;
};
