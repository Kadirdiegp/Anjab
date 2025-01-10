/**
 * About Component
 * @author Kadir Diego Padin Rodriguez
 * @website rodriguez-digital.de
 */

import React from 'react';
import styled from 'styled-components';
import LazyImage from '../common/LazyImage';

const AboutSection = styled.section`
  padding: 6rem 0;
  background: ${props => props.theme.colors.background};
`;

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const AboutContent = styled.div`
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: ${props => props.theme.colors.primary};
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: ${props => props.theme.colors.text};
    margin-bottom: 1.5rem;
  }
`;

const AboutImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const About: React.FC = () => {
  return (
    <AboutSection id="about">
      <AboutContainer>
        <AboutContent>
          <h2>Über Uns</h2>
          <p>
            Willkommen in unserem exklusiven Luxury Salon. Seit über 15 Jahren bieten wir 
            unseren Kunden erstklassige Haar- und Beautypflege in einer entspannten und 
            luxuriösen Atmosphäre.
          </p>
          <p>
            Unser Team aus erfahrenen Stylisten und Beauty-Experten ist stets auf dem 
            neuesten Stand der Trends und Techniken. Wir verwenden ausschließlich 
            hochwertige Produkte und arbeiten mit modernster Ausstattung.
          </p>
          <p>
            Ihr Wohlbefinden und Ihre Zufriedenheit stehen bei uns an erster Stelle. 
            Erleben Sie bei uns eine persönliche Beratung und individuelle Behandlung, 
            die genau auf Ihre Wünsche und Bedürfnisse abgestimmt ist.
          </p>
        </AboutContent>
        <AboutImageWrapper>
          <LazyImage
            src="/images/salon-interior.jpg"
            alt="Luxury Salon Interior"
            blur
          />
        </AboutImageWrapper>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
