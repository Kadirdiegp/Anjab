import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase/config';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: ${props => props.theme.colors.background};
`;

const FormContainer = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

const Title = styled.h1`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.primary};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
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

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid ${props => props.theme.colors.accent};
  border-radius: 4px;
  font-size: 16px; 
  width: 100%;
  -webkit-appearance: none; 
  -moz-appearance: none;
  appearance: none;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`;

const Button = styled.button`
  background: ${props => props.theme.colors.primary};
  color: white;
  padding: 0.75rem;
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

const ErrorMessage = styled.div`
  color: #f44336;
  text-align: center;
  margin-top: 1rem;
`;

const AdminLogin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/admin/dashboard') {
      navigate('/admin/dashboard');
    }
  }, [navigate, location]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Versuche den Login
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Überprüfe, ob es sich um Anja's E-Mail handelt
      if (user.email === 'anja@haarambiente.de') {
        // Überprüfe, ob das Admin-Dokument bereits existiert
        const adminDocRef = doc(db, 'admins', user.uid);
        const adminDoc = await getDoc(adminDocRef);

        if (!adminDoc.exists()) {
          // Erstelle das Admin-Dokument nur, wenn es noch nicht existiert
          await setDoc(adminDocRef, {
            email: user.email,
            createdAt: new Date(),
          });
        }

        // Weiterleitung zum Dashboard
        navigate('/admin/dashboard');
      } else {
        // Wenn es nicht Anja's E-Mail ist, zeige einen Fehler
        setError('Sie haben keine Berechtigung für den Admin-Bereich.');
        await auth.signOut(); // Logge den Benutzer aus
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Ungültige Anmeldedaten. Bitte überprüfen Sie Ihre E-Mail und Ihr Passwort.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <FormContainer>
        <Title>Admin Login</Title>
        <Form onSubmit={handleLogin}>
          <FormGroup>
            <Label htmlFor="email">E-Mail</Label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Passwort</Label>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
          </FormGroup>
          <Button type="submit" disabled={loading}>
            {loading ? 'Wird geladen...' : 'Anmelden'}
          </Button>
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </Form>
      </FormContainer>
    </Container>
  );
};

export default AdminLogin;
