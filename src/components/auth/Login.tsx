import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../../context/AuthContext';

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
  font-size: 1rem;

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

const RegisterLink = styled(Link)`
  display: block;
  text-align: center;
  margin-top: 1rem;
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(email, password);
      navigate('/profile');
    } catch (error: any) {
      setError(
        error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password'
          ? 'Ungültige E-Mail oder Passwort'
          : 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <FormContainer>
        <Title>Anmelden</Title>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="email">E-Mail</Label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
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
            />
          </FormGroup>

          <Button type="submit" disabled={loading}>
            {loading ? 'Wird angemeldet...' : 'Anmelden'}
          </Button>

          {error && <ErrorMessage>{error}</ErrorMessage>}
        </Form>
        <RegisterLink to="/register">
          Noch kein Konto? Jetzt registrieren
        </RegisterLink>
      </FormContainer>
    </Container>
  );
};

export default Login;
