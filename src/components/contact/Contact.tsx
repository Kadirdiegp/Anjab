import React, { useState } from 'react';
import styled from 'styled-components';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import LoadingSpinner from '../common/LoadingSpinner';

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

const Form = styled.form`
  display: grid;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 0.9rem;
  color: #666;
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.accent};
    box-shadow: 0 0 0 2px rgba(212, 196, 197, 0.2);
  }
`;

const TextArea = styled.textarea`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.accent};
    box-shadow: 0 0 0 2px rgba(212, 196, 197, 0.2);
  }
`;

const SubmitButton = styled.button`
  padding: 1rem 2rem;
  background: #000;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const Contact: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simuliere API-Aufruf
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Hier würde normalerweise der API-Aufruf stattfinden
    console.log('Form submitted:', formData);
    
    setIsLoading(false);
    setFormData({ name: '', email: '', message: '' });
    alert('Vielen Dank für Ihre Nachricht! Wir werden uns schnellstmöglich bei Ihnen melden.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <ContactSection id="kontakt">
      {isLoading && <LoadingSpinner text="Nachricht wird gesendet..." />}
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

        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">E-Mail</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">Nachricht</Label>
            <TextArea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <SubmitButton type="submit">Nachricht senden</SubmitButton>
        </Form>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
