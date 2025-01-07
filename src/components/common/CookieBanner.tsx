import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { initializeAnalytics } from '../../firebase/config';

const BannerContainer = styled.div<{ $isVisible: boolean }>`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  padding: 1rem;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  transform: ${props => props.$isVisible ? 'translateY(0)' : 'translateY(100%)'};
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 0 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Text = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: ${props => props.theme.colors.text};
  line-height: 1.5;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-shrink: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const Button = styled.button<{ $isPrimary?: boolean }>`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  background: ${props => props.$isPrimary ? props.theme.colors.primary : 'transparent'};
  color: ${props => props.$isPrimary ? 'white' : props.theme.colors.primary};
  border: 1px solid ${props => props.theme.colors.primary};

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0.75rem 1rem;
  }
`;

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');
    if (!hasAcceptedCookies) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
    initializeAnalytics(); // Initialize analytics after consent
  };

  const handleDecline = () => {
    localStorage.setItem('cookiesAccepted', 'false');
    setIsVisible(false);
  };

  return (
    <BannerContainer $isVisible={isVisible}>
      <Content>
        <Text>
          Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern. 
          Durch die weitere Nutzung unserer Website stimmen Sie der Verwendung von Cookies zu. 
          Sie können Ihre Cookie-Einstellungen jederzeit ändern.
        </Text>
        <ButtonGroup>
          <Button onClick={handleDecline}>Ablehnen</Button>
          <Button $isPrimary onClick={handleAccept}>Akzeptieren</Button>
        </ButtonGroup>
      </Content>
    </BannerContainer>
  );
};

export default CookieBanner;
