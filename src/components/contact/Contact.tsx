import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import LoadingSpinner from '../common/LoadingSpinner';
import { validateForm, ValidationResult } from '../../utils/validators';
import { protectFormData, RateLimiter, secureHeaders } from '../../utils/security';

// Rate limiter instance
const formLimiter = new RateLimiter(5, 60000); // 5 attempts per minute

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  message: ''
};

const ContactSection = styled.section`
  padding: 6rem 0;
  background: #fff;
`;

const ContactContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    padding: 0 1.5rem;
  }
`;

const ContactInfo = styled.div`
  h2 {
    font-family: ${props => props.theme.fonts.heading};
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  
  svg {
    font-size: 1.5rem;
    color: ${props => props.theme.colors.accent};
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${props => props.theme.colors.accent};
    }
  }
`;

const MapContainer = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 600px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 500;
  color: ${props => props.theme.colors.text};
`;

const Input = styled.input<{ $hasError?: boolean }>`
  padding: 0.8rem;
  border: 1px solid ${props => props.$hasError ? props.theme.colors.error : props.theme.colors.border};
  border-radius: 4px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 2px ${props => props.theme.colors.primary}33;
  }
`;

const TextArea = styled.textarea<{ $hasError?: boolean }>`
  padding: 0.8rem;
  border: 1px solid ${props => props.$hasError ? props.theme.colors.error : props.theme.colors.border};
  border-radius: 4px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 2px ${props => props.theme.colors.primary}33;
  }
`;

const ErrorMessage = styled.span`
  color: ${props => props.theme.colors.error};
  font-size: 0.875rem;
`;

const SubmitButton = styled.button`
  padding: 1rem 2rem;
  background: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.colors.primaryDark};
    transform: translateY(-2px);
  }

  &:disabled {
    background: ${props => props.theme.colors.border};
    cursor: not-allowed;
    transform: none;
  }
`;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // Sanitize input as user types
    const sanitizedValue = value.trim();
    
    setFormData(prev => ({
      ...prev,
      [name]: sanitizedValue
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check rate limiting
    if (!formLimiter.canMakeRequest('contact-form')) {
      alert('Zu viele Versuche. Bitte warten Sie eine Minute.');
      return;
    }

    // Validate form
    const validation: ValidationResult = validateForm(formData);
    
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Protect form data
      const protectedData = protectFormData(formData);

      // Simulate API call (replace with your actual API endpoint)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          ...secureHeaders,
          'X-Requested-With': 'XMLHttpRequest' // CSRF protection
        },
        credentials: 'include', // Include cookies
        body: JSON.stringify(protectedData)
      });

      if (!response.ok) {
        throw new Error('Fehler beim Senden der Nachricht');
      }

      // Clear form on success
      setFormData(initialFormData);
      formLimiter.reset('contact-form'); // Reset rate limiting on success
      alert('Ihre Nachricht wurde erfolgreich gesendet!');
    } catch (error) {
      console.error('Error:', error);
      alert('Es gab einen Fehler beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ContactSection id="kontakt">
      <ContactContainer>
        <ContactInfo>
          <h2>Kontaktieren Sie uns</h2>
          <InfoItem>
            <FaPhone />
            <a href="tel:+4947216814680">04721 681468</a>
          </InfoItem>
          <InfoItem>
            <FaEnvelope />
            <a href="mailto:info@haararmbiente.de">info@haararmbiente.de</a>
          </InfoItem>
          <InfoItem>
            <FaMapMarkerAlt />
            <address>
              Neustraße 19<br />
              27472 Cuxhaven
            </address>
          </InfoItem>
          <MapContainer>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.7!2d8.69444!3d53.86778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b403b8a5b8b8a7%3A0x0!2sNeustra%C3%9Fe%2019%2C%2027472%20Cuxhaven!5e0!3m2!1sde!2sde!4v1641466317693!5m2!1sde!2sde"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Haararmbiente Standort"
            />
          </MapContainer>
        </ContactInfo>

        <ContactForm onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              $hasError={!!errors.name}
              required
            />
            {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">E-Mail *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              $hasError={!!errors.email}
              required
            />
            {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="phone">Telefon</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              $hasError={!!errors.phone}
            />
            {errors.phone && <ErrorMessage>{errors.phone}</ErrorMessage>}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="message">Nachricht *</Label>
            <TextArea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              $hasError={!!errors.message}
              required
            />
            {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
          </FormGroup>

          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
          </SubmitButton>
        </ContactForm>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
