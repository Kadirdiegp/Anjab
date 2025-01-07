import React from 'react';
import styled from 'styled-components';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebook } from 'react-icons/fa';

const FooterWrapper = styled.footer`
  background: #000;
  color: #fff;
  padding: 4rem 0 2rem 0;
`;

const FooterContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
    gap: 2rem;
  }
`;

const FooterSection = styled.div`
  h3 {
    font-family: ${props => props.theme.fonts.heading};
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    font-weight: 400;
  }
`;

const OpeningHours = styled.div`
  display: grid;
  gap: 0.5rem;
`;

const Day = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  span {
    color: rgba(255, 255, 255, 0.8);
  }
`;

const ContactInfo = styled.div`
  display: grid;
  gap: 1rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: rgba(255, 255, 255, 0.8);

  svg {
    font-size: 1.2rem;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #fff;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  a {
    color: rgba(255, 255, 255, 0.8);
    font-size: 1.5rem;
    transition: all 0.3s ease;

    &:hover {
      color: #fff;
      transform: translateY(-2px);
    }
  }
`;

const LegalLinks = styled.div`
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;

  a {
    color: inherit;
    text-decoration: none;
    margin: 0 1rem;
    transition: color 0.3s ease;

    &:hover {
      color: #fff;
    }
  }
`;

const Footer: React.FC = () => {
  const openingHours = [
    { day: 'Montag', hours: 'Geschlossen' },
    { day: 'Dienstag', hours: '09:00 - 18:00' },
    { day: 'Mittwoch', hours: '09:00 - 18:00' },
    { day: 'Donnerstag', hours: '09:00 - 18:00' },
    { day: 'Freitag', hours: '09:00 - 18:00' },
    { day: 'Samstag', hours: '09:00 - 16:00' },
    { day: 'Sonntag', hours: 'Geschlossen' },
  ];

  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterSection>
          <h3>Öffnungszeiten</h3>
          <OpeningHours>
            {openingHours.map((item, index) => (
              <Day key={index}>
                <span>{item.day}</span>
                <span>{item.hours}</span>
              </Day>
            ))}
          </OpeningHours>
        </FooterSection>

        <FooterSection>
          <h3>Kontakt</h3>
          <ContactInfo>
            <ContactItem>
              <FaPhone />
              <a href="tel:+4947216814680">04721 681468</a>
            </ContactItem>
            <ContactItem>
              <FaEnvelope />
              <a href="mailto:info@haararmbiente.de">info@haararmbiente.de</a>
            </ContactItem>
            <ContactItem>
              <FaMapMarkerAlt />
              <address>
                Neustraße 19<br />
                27472 Cuxhaven
              </address>
            </ContactItem>
            <SocialLinks>
              <a href="https://instagram.com/haararmbiente" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://facebook.com/haararmbiente" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
            </SocialLinks>
          </ContactInfo>
        </FooterSection>
      </FooterContainer>
      
      <LegalLinks>
        <a href="/impressum">Impressum</a>
        <a href="/datenschutz">Datenschutz</a>
        <a href="/agb">AGB</a>
        <p> {new Date().getFullYear()} Haarambiente. Alle Rechte vorbehalten.</p>
      </LegalLinks>
    </FooterWrapper>
  );
};

export default Footer;
