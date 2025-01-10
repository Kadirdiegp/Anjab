import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import WhiteLogo from '../../assets/images/2.png';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebook } from 'react-icons/fa';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const FooterContainer = styled.footer`
  background: #000000;
  color: white;
  padding: 5rem 0 2rem 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(to right, ${props => props.theme.colors.primary}, ${props => props.theme.colors.accent});
  }
`;

const FooterContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  gap: 4rem;
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }
`;

const Section = styled.div`
  animation: ${fadeIn} 0.6s ease-out;

  h3 {
    font-family: ${props => props.theme.fonts.heading};
    color: ${props => props.theme.colors.accent};
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -8px;
      width: 40px;
      height: 2px;
      background: ${props => props.theme.colors.accent};
      transition: width 0.3s ease;
    }

    &:hover::after {
      width: 60px;
    }

    @media (max-width: 768px) {
      &::after {
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
`;

const ContactInfo = styled(Section)`
  .contact-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.2rem;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateX(10px);
    }

    @media (max-width: 768px) {
      justify-content: center;
      &:hover {
        transform: translateY(-5px);
      }
    }

    svg {
      color: ${props => props.theme.colors.accent};
      font-size: 1.2rem;
    }

    a {
      color: white;
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: ${props => props.theme.colors.accent};
      }
    }
  }
`;

const OpeningHours = styled(Section)`
  .hours-grid {
    display: grid;
    gap: 0.8rem;
  }

  .day-row {
    display: flex;
    justify-content: space-between;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;

    &:hover {
      border-bottom-color: ${props => props.theme.colors.accent};
      transform: translateX(10px);
    }

    @media (max-width: 768px) {
      &:hover {
        transform: translateY(-5px);
      }
    }
  }
`;

const LogoSection = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2rem;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const FooterLogo = styled(Link)`
  display: block;
  transition: transform 0.3s ease;

  img {
    height: 120px;
    width: auto;
    filter: brightness(1);
  }

  &:hover {
    animation: ${pulse} 1s ease infinite;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;

  a {
    color: white;
    font-size: 1.8rem;
    transition: all 0.3s ease;

    &:hover {
      color: ${props => props.theme.colors.accent};
      transform: translateY(-5px);
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  animation: ${fadeIn} 0.6s ease-out;

  a {
    color: ${props => props.theme.colors.accent};
    text-decoration: none;
    margin: 0 1rem;
    transition: color 0.3s ease;

    &:hover {
      color: white;
    }
  }

  .developer-credit {
    margin-top: 1rem;
    font-size: 0.8rem;
    opacity: 0.6;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 1;
    }

    a {
      color: ${props => props.theme.colors.accent};
      margin: 0;
    }
  }
`;

const Footer: React.FC = () => {
  const handleLogoClick = (e: React.MouseEvent) => {
    if (window.location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <FooterContainer>
      <FooterContent>
        <ContactInfo>
          <h3>Kontakt</h3>
          <div className="contact-item">
            <FaPhone />
            <a href="tel:+4947219656511">04721 96 56 511</a>
          </div>
          <div className="contact-item">
            <FaEnvelope />
            <a href="mailto:info@haar-ambiente.de">info@haar-ambiente.de</a>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt />
            <p>Ahnstraße 22, 27472 Cuxhaven</p>
          </div>
        </ContactInfo>

        <OpeningHours>
          <h3>Öffnungszeiten</h3>
          <div className="hours-grid">
            <div className="day-row">
              <span>Montag</span>
              <span>Geschlossen</span>
            </div>
            <div className="day-row">
              <span>Dienstag - Freitag</span>
              <span>09:00 - 18:00</span>
            </div>
            <div className="day-row">
              <span>Samstag</span>
              <span>08:00 - 13:00</span>
            </div>
            <div className="day-row">
              <span>Sonntag</span>
              <span>Geschlossen</span>
            </div>
          </div>
        </OpeningHours>

        <LogoSection>
          <FooterLogo to="/" onClick={handleLogoClick}>
            <img src={WhiteLogo} alt="Haar Ambiente Logo" />
          </FooterLogo>
          <SocialLinks>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
          </SocialLinks>
        </LogoSection>
      </FooterContent>

      <Copyright>
        <p>&copy; {new Date().getFullYear()} Haar Ambiente</p>
        <div>
          <a href="/impressum">Impressum</a>
          <a href="/datenschutz">Datenschutz</a>
          <a href="/agb">AGB</a>
        </div>
        <div className="developer-credit">
          Entwickelt von <a href="https://rodriguez-digital.de" target="_blank" rel="noopener noreferrer">Kadir Diego Padin Rodriguez</a>
        </div>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
