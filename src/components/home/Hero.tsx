import React from 'react';
import styled from 'styled-components';
import { FaPlay } from 'react-icons/fa';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(to bottom, #E8DFE0 0%, #D4C4C5 50%, #C1B4B5 100%);
  position: relative;
  overflow: hidden;
  padding: 6rem 0 2rem;

  @media (max-width: 768px) {
    padding: 5rem 0 2rem;
    min-height: calc(100vh - 60px);
  }
`;

const HeroContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 1.5rem;
    gap: 2rem;
  }
`;

const HeroContent = styled.div`
  z-index: 1;
  max-width: 600px;

  @media (max-width: 768px) {
    text-align: left;
    margin-top: 2rem;
    order: 2;
  }
`;

const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;

  &::before {
    content: '';
    width: 40px;
    height: 1px;
    background: #000;
    display: block;
  }

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
    
    &::before {
      width: 30px;
    }
  }
`;

const LocationText = styled.p`
  font-size: 1rem;
  color: #000;
  font-weight: 400;
  font-family: ${props => props.theme.fonts.body};

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Headline = styled.h1`
  font-family: ${props => props.theme.fonts.heading};
  font-size: clamp(3rem, 5vw, 4.5rem);
  color: #000;
  margin-bottom: 3rem;
  line-height: 1.1;
  font-weight: 600;
  letter-spacing: -0.02em;
  text-transform: uppercase;

  span {
    color: #fff;
    display: block;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    font-weight: 700;
  }

  @media (max-width: 768px) {
    margin-bottom: 2rem;
    font-size: clamp(2.5rem, 8vw, 3.5rem);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
  }
`;

const PrimaryButton = styled.button`
  padding: 1rem 2.5rem;
  border-radius: 100px;
  background: #000;
  color: #fff;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: ${props => props.theme.fonts.body};
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0.875rem 2rem;
    font-size: 0.9rem;
  }
`;

const SecondaryButton = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: transparent;
  border: none;
  color: #000;
  font-size: 1rem;
  cursor: pointer;
  padding: 0;
  font-family: ${props => props.theme.fonts.body};

  .play-icon {
    width: 48px;
    height: 48px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  &:hover .play-icon {
    transform: scale(1.1);
    background: #fff;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: flex-start;
    font-size: 0.9rem;

    .play-icon {
      width: 40px;
      height: 40px;
    }
  }
`;

const ImageContainer = styled.div`
  position: relative;
  height: 600px;
  
  &::after {
    content: '';
    position: absolute;
    top: -20%;
    right: -20%;
    width: 140%;
    height: 140%;
    background: linear-gradient(135deg, #E8DFE0 0%, #D4C4C5 100%);
    border-radius: 50%;
    z-index: -1;
  }

  @media (max-width: 768px) {
    height: 400px;
    order: 1;
    margin-top: 2rem;
    
    &::after {
      top: -10%;
      right: -10%;
      width: 120%;
      height: 120%;
    }
  }
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0 0 0 100px;

  @media (max-width: 768px) {
    border-radius: 0 0 0 50px;
  }
`;

const Hero: React.FC = () => {
  return (
    <HeroSection id="start">
      <HeroContainer>
        <HeroContent>
          <Location>
            <LocationText>Cuxhaven, Deutschland</LocationText>
          </Location>
          <Headline>
            Alles für die
            Schönheit Ihrer
            <span>Haare</span>
          </Headline>
          <ButtonGroup>
            <PrimaryButton>Jetzt Buchen</PrimaryButton>
            <SecondaryButton>
              <div className="play-icon">
                <FaPlay size={12} />
              </div>
              Salon ansehen
            </SecondaryButton>
          </ButtonGroup>
        </HeroContent>
        <ImageContainer>
          <HeroImage 
            src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
            alt="Frau mit gestylten Haaren"
          />
        </ImageContainer>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
