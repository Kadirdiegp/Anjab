import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { BookingData, bookingServices } from '../../types/booking';
import { useAuth } from '../../context/AuthContext';

const Section = styled.section`
  padding: 5rem 1rem;
  background: ${props => props.theme.colors.background};
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.primary};
`;

const Form = styled.form`
  display: grid;
  gap: 1.5rem;
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  display: grid;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 500;
  color: ${props => props.theme.colors.text};
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid ${props => props.theme.colors.accent};
  border-radius: 4px;
  font-size: 1rem;
  width: 100%;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`;

const Select = styled.select`
  padding: 0.75rem;
  border: 1px solid ${props => props.theme.colors.accent};
  border-radius: 4px;
  font-size: 1rem;
  width: 100%;
  background: white;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`;

const Button = styled.button`
  background: ${props => props.theme.colors.primary};
  color: white;
  padding: 1rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  &:disabled {
    background: ${props => props.theme.colors.accent};
    cursor: not-allowed;
    transform: none;
  }
`;

const SuccessMessage = styled.div`
  background: #4CAF50;
  color: white;
  padding: 1rem;
  border-radius: 4px;
  text-align: center;
  margin-top: 1rem;
`;

const ErrorMessage = styled.div`
  background: #f44336;
  color: white;
  padding: 1rem;
  border-radius: 4px;
  text-align: center;
  margin-top: 1rem;
`;

const BookingForm: React.FC = () => {
  const { currentUser } = useAuth();
  const [formData, setFormData] = useState<BookingData>({
    name: '',
    email: currentUser?.email || '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (currentUser?.email) {
      setFormData(prev => ({ ...prev, email: currentUser.email! }));
    }
  }, [currentUser]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError(null); // Clear any previous errors
  };

  const validateDateTime = (date: string, time: string): boolean => {
    const [year, month, day] = date.split('-').map(Number);
    const [hours, minutes] = time.split(':').map(Number);
    const bookingDate = new Date(year, month - 1, day, hours, minutes);
    const now = new Date();

    // Check if date is in the past
    if (bookingDate < now) {
      setError('Bitte wählen Sie ein Datum in der Zukunft');
      return false;
    }

    // Check if date is within business hours (9:00 - 18:00)
    if (hours < 9 || hours >= 18) {
      setError('Bitte wählen Sie eine Uhrzeit zwischen 9:00 und 18:00 Uhr');
      return false;
    }

    // Check if date is not on Sunday (0) or Monday (1)
    const dayOfWeek = bookingDate.getDay();
    if (dayOfWeek === 0 || dayOfWeek === 1) {
      setError('Wir haben Sonntags und Montags geschlossen');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setError(null);

    try {
      // Validate date and time
      if (!validateDateTime(formData.date, formData.time)) {
        setStatus('idle');
        return;
      }

      // Create a date object from the date and time inputs
      const [year, month, day] = formData.date.split('-').map(Number);
      const [hours, minutes] = formData.time.split(':').map(Number);
      
      // Create date in local timezone
      const bookingDate = new Date(year, month - 1, day, hours, minutes);
      console.log('Created booking date:', bookingDate);

      // Ensure the date is valid
      if (isNaN(bookingDate.getTime())) {
        setError('Ungültiges Datum oder Uhrzeit');
        setStatus('error');
        return;
      }

      // Create Timestamp from date
      const timestamp = Timestamp.fromDate(bookingDate);
      console.log('Created timestamp:', timestamp);

      const bookingData = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        customerEmail: currentUser?.email || formData.email.trim(),
        phone: formData.phone.trim(),
        service: formData.service,
        date: timestamp,
        message: formData.message?.trim() || '',
        createdAt: Timestamp.now(),
        status: 'pending' as const
      };

      // Log the final booking data
      console.log('Saving booking data:', bookingData);

      await addDoc(collection(db, 'bookings'), bookingData);
      console.log('Booking saved successfully');
      
      setStatus('success');
      setFormData({
        name: '',
        email: currentUser?.email || '',
        phone: '',
        service: '',
        date: '',
        time: '',
        message: ''
      });
    } catch (err) {
      console.error('Error adding booking:', err);
      setError('Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.');
      setStatus('error');
    }
  };

  return (
    <Section id="booking">
      <Container>
        <Title>Termin Buchen</Title>
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
              readOnly={!!currentUser}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="phone">Telefon</Label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="z.B. 0123 456789"
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="service">Service</Label>
            <Select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">Bitte wählen Sie einen Service</option>
              {bookingServices.map(service => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </Select>
          </FormGroup>

          <FormGroup>
            <Label htmlFor="date">Datum</Label>
            <Input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              min={new Date().toISOString().split('T')[0]}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="time">Uhrzeit</Label>
            <Input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              min="09:00"
              max="18:00"
              step="1800" // 30-minute intervals
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="message">Nachricht (optional)</Label>
            <Input
              as="textarea"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="Zusätzliche Informationen oder Wünsche"
            />
          </FormGroup>

          {error && <ErrorMessage>{error}</ErrorMessage>}

          <Button type="submit" disabled={status === 'loading'}>
            {status === 'loading' ? 'Wird gesendet...' : 'Termin buchen'}
          </Button>

          {status === 'success' && (
            <SuccessMessage>
              Ihre Buchung wurde erfolgreich gesendet! Wir werden uns in Kürze bei Ihnen melden.
            </SuccessMessage>
          )}
        </Form>
      </Container>
    </Section>
  );
};

export default BookingForm;
