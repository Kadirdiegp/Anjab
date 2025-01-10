import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FaPlay } from 'react-icons/fa';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

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
  gap: 1.5rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const PrimaryButton = styled(Link)`
  background: ${props => props.theme.colors.accent};
  color: white;
  padding: 1rem 2rem;
  border-radius: 30px;
  font-family: ${props => props.theme.fonts.body};
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
  border: 2px solid ${props => props.theme.colors.accent};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    background: transparent;
    color: ${props => props.theme.colors.accent};
  }
`;

const SecondaryButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 25px;

  .play-icon {
    width: 40px;
    height: 40px;
    background: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    
    svg {
      width: 12px;
      height: 12px;
      margin-left: 2px;
      color: ${props => props.theme.colors.accent};
    }
  }

  &:hover {
    transform: translateY(-2px);
    
    .play-icon {
      background: ${props => props.theme.colors.accent};
      
      svg {
        color: white;
      }
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
  const locationRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure all refs are available
    if (!locationRef.current || !headlineRef.current || !imageRef.current || !buttonRef.current) return;

    // Clear any existing animations
    gsap.context(() => {
      gsap.set([locationRef.current, headlineRef.current, imageRef.current, buttonRef.current], {
        opacity: 0,
        y: 50
      });

      const tl = gsap.timeline({
        defaults: { 
          duration: 1,
          ease: "power3.out"
        }
      });

      // Main animation sequence
      tl.to(locationRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8
      })
      .to(headlineRef.current, {
        opacity: 1,
        y: 0,
        duration: 1
      }, "-=0.3")
      .to(imageRef.current, {
        opacity: 1,
        y: 0,
        duration: 1
      }, "-=0.5")
      .to(buttonRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8
      }, "-=0.3");

      // Add hover animation for button
      if (buttonRef.current) {
        buttonRef.current.addEventListener('mouseenter', () => {
          gsap.to(buttonRef.current, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        buttonRef.current.addEventListener('mouseleave', () => {
          gsap.to(buttonRef.current, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      }
    });

    // Cleanup function
    return () => {
      gsap.killTweensOf([locationRef.current, headlineRef.current, imageRef.current, buttonRef.current]);
    };
  }, []);

  return (
    <HeroSection>
      <HeroContainer>
        <HeroContent>
          <Location ref={locationRef}>
            <LocationText>Haar Ambiente - Cuxhaven</LocationText>
          </Location>
          <div ref={headlineRef}>
            <Headline>
              Entdecke deine <span>natürliche Schönheit</span>
            </Headline>
          </div>
          <ButtonGroup ref={buttonRef}>
            <PrimaryButton to="/services">
              Unsere Services
            </PrimaryButton>
            <SecondaryButton to="/galerie">
              <div className="play-icon">
                <FaPlay />
              </div>
              <span>Galerie ansehen</span>
            </SecondaryButton>
          </ButtonGroup>
        </HeroContent>
        <ImageContainer ref={imageRef}>
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
