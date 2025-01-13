import React, { useState } from 'react';
import styled from 'styled-components';
import { validateForm, ValidationResult } from '../../utils/validators';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

interface FormData {
  [key: string]: string;
}

const ContactSection = styled.section`
  padding: 6rem 2rem;
  background: ${props => props.theme.colors.background};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, ${props => props.theme.colors.border}, transparent);
  }
`;

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: stretch;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ContactInfo = styled.div`
  padding: 2rem;
  background: ${props => props.theme.colors.backgroundAlt};
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: ${props => props.theme.colors.background};
  border-radius: 8px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(10px);
  }

  svg {
    font-size: 1.5rem;
    color: ${props => props.theme.colors.primary};
    margin-right: 1rem;
  }
`;

const InfoText = styled.div`
  h3 {
    font-size: 1rem;
    font-weight: 600;
    margin: 0 0 0.25rem 0;
    color: ${props => props.theme.colors.primary};
  }

  p {
    margin: 0;
    color: ${props => props.theme.colors.text};
    font-size: 0.9rem;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  background: ${props => props.theme.colors.backgroundAlt};
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  height: 100%;
`;

const FormTitle = styled.h2`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 3rem;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.primary};
  text-align: center;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 0.9rem;
  color: ${props => props.theme.colors.text};
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Input = styled.input`
  padding: 1rem;
  border: 2px solid transparent;
  background: ${props => props.theme.colors.background};
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 4px rgba(var(--primary-rgb), 0.1);
  }

  &:hover {
    background: ${props => props.theme.colors.backgroundHover};
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border: 2px solid transparent;
  background: ${props => props.theme.colors.background};
  border-radius: 8px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 4px rgba(var(--primary-rgb), 0.1);
  }

  &:hover {
    background: ${props => props.theme.colors.backgroundHover};
  }
`;

const SubmitButton = styled.button`
  padding: 1rem 2rem;
  background: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.theme.colors.primaryDark};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(var(--primary-rgb), 0.2);
  }
  
  &:disabled {
    background: ${props => props.theme.colors.disabled};
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const ErrorMessage = styled.span`
  color: ${props => props.theme.colors.error};
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '⚠️';
  }
`;

const SuccessMessage = styled.div`
  color: ${props => props.theme.colors.success};
  text-align: center;
  padding: 1rem;
  background: ${props => props.theme.colors.successLight};
  border-radius: 8px;
  margin-top: 1rem;
  animation: slideIn 0.3s ease;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormData>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const validation: ValidationResult = validateForm({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message
    });

    if (!validation.isValid) {
      setErrors(validation.errors || {});
      setIsSubmitting(false);
      return;
    }

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      setErrors({
        submit: 'Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ContactSection id="contact">
      <ContactContainer>
        <ContactInfo>
          <FormTitle>Kontaktieren Sie uns</FormTitle>
          <InfoItem>
            <FaPhone />
            <InfoText>
              <h3>Telefon</h3>
              <p>+49 (0) 4721 123456</p>
            </InfoText>
          </InfoItem>
          <InfoItem>
            <FaEnvelope />
            <InfoText>
              <h3>E-Mail</h3>
              <p>info@haarambiente.de</p>
            </InfoText>
          </InfoItem>
          <InfoItem>
            <FaMapMarkerAlt />
            <InfoText>
              <h3>Adresse</h3>
              <p>Musterstraße 123<br />27472 Cuxhaven</p>
            </InfoText>
          </InfoItem>
          <InfoItem>
            <FaClock />
            <InfoText>
              <h3>Öffnungszeiten</h3>
              <p>Mo-Fr: 9:00 - 18:00 Uhr<br />Sa: 9:00 - 14:00 Uhr</p>
            </InfoText>
          </InfoItem>
        </ContactInfo>

        <ContactForm onSubmit={handleSubmit}>
          <FormTitle>Schreiben Sie uns</FormTitle>
          <FormGroup>
            <Label htmlFor="name">Name *</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              disabled={isSubmitting}
              placeholder="Ihr Name"
            />
            {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">E-Mail *</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={isSubmitting}
              placeholder="ihre@email.de"
            />
            {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="phone">Telefon</Label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              disabled={isSubmitting}
              placeholder="+49 123 45678900"
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
              disabled={isSubmitting}
              placeholder="Ihre Nachricht an uns..."
            />
            {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
          </FormGroup>

          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
          </SubmitButton>

          {submitSuccess && (
            <SuccessMessage>
              Ihre Nachricht wurde erfolgreich gesendet. Wir werden uns schnellstmöglich bei Ihnen melden!
            </SuccessMessage>
          )}
          {errors.submit && <ErrorMessage>{errors.submit}</ErrorMessage>}
        </ContactForm>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
