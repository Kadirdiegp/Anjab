import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const ServicesSection = styled.section`
  padding: 4rem 0;
  background: linear-gradient(to bottom, #F5F0F0, #E8DFE0);
  overflow: hidden;
  position: relative;
`;

const ServicesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
`;

const SectionTitle = styled.h2`
  font-family: ${props => props.theme.fonts.heading};
  font-size: clamp(2rem, 5vw, 3rem);
  color: ${props => props.theme.colors.primary};
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  opacity: 0;
  
  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background: ${props => props.theme.colors.accent};
    margin: 1rem auto 0;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  padding: 2rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ServiceCard = styled.div`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 2.5rem;
  text-align: left;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 280px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 0;
    background: linear-gradient(to bottom, ${props => props.theme.colors.accent}, ${props => props.theme.colors.primary});
    transition: height 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
    
    &::before {
      height: 100%;
    }
  }
`;

const ServiceHeader = styled.div`
  position: relative;
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 2px;
    background: ${props => props.theme.colors.accent};
    transition: width 0.3s ease;
  }

  ${ServiceCard}:hover &::after {
    width: 60px;
  }
`;

const ServiceNumber = styled.span`
  font-size: 0.9rem;
  color: ${props => props.theme.colors.accent};
  font-family: ${props => props.theme.fonts.heading};
  margin-bottom: 0.5rem;
  display: block;
  letter-spacing: 1px;
`;

const ServiceTitle = styled.h3`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 1.5rem;
  color: ${props => props.theme.colors.primary};
  margin: 0.5rem 0;
  transition: color 0.3s ease;

  ${ServiceCard}:hover & {
    color: ${props => props.theme.colors.accent};
  }
`;

const ServiceDescription = styled.p`
  color: ${props => props.theme.colors.text};
  line-height: 1.8;
  font-size: 1rem;
  margin-bottom: 2rem;
`;

const BookButton = styled.a`
  background: transparent;
  color: ${props => props.theme.colors.primary};
  border: 2px solid ${props => props.theme.colors.primary};
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  font-family: ${props => props.theme.fonts.body};
  font-weight: 500;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-start;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    background: ${props => props.theme.colors.primary};
    color: white;
    transform: translateY(-2px);
  }

  ${ServiceCard}:hover & {
    border-color: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.accent};

    &:hover {
      background: ${props => props.theme.colors.accent};
      color: white;
    }
  }

  svg {
    width: 1em;
    height: 1em;
  }
`;

const PhoneIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    stroke="none"
  >
    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
  </svg>
);

const services = [
  {
    title: "Damenhaarschnitt",
    description: "Professioneller Haarschnitt mit ausführlicher Beratung, Waschen, Pflege und Styling"
  },
  {
    title: "Herrenhaarschnitt",
    description: "Klassischer oder moderner Herrenhaarschnitt inkl. Beratung und Styling"
  },
  {
    title: "Färben & Strähnen",
    description: "Individuelle Färbetechniken, Balayage, Highlights oder Komplett-Färbung"
  },
  {
    title: "Pflegebehandlungen",
    description: "Intensive Haarpflege-Behandlungen für gesundes, glänzendes Haar"
  },
  {
    title: "Braut-Styling",
    description: "Komplettes Styling für den besonderen Tag inkl. Beratung und Probe-Styling"
  },
  {
    title: "Dauerwelle",
    description: "Klassische oder moderne Dauerwelle für lang anhaltendes Styling"
  },
  {
    title: "Strähnentechniken",
    description: "Foliensträhnchen, Balayage, Ombré oder andere kreative Techniken"
  },
  {
    title: "Kinderhaarschnitt",
    description: "Kindgerechte Haarschnitte in entspannter Atmosphäre"
  },
  {
    title: "Styling & Finish",
    description: "Föhnen, Glätten, Locken oder Hochsteckfrisuren für jeden Anlass"
  }
];

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const initAnimations = () => {
      if (!sectionRef.current || !titleRef.current) return;

      gsap.to(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
      });

      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        
        gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=50",
            toggleActions: "play none none reverse"
          },
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: "power3.out"
        });
      });
    };

    setTimeout(initAnimations, 100);

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <ServicesSection ref={sectionRef}>
      <ServicesContainer>
        <SectionTitle ref={titleRef}>
          Unsere Services
        </SectionTitle>
        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              ref={el => cardsRef.current[index] = el}
            >
              <ServiceHeader>
                <ServiceNumber>{`Service ${String(index + 1).padStart(2, '0')}`}</ServiceNumber>
                <ServiceTitle>{service.title}</ServiceTitle>
              </ServiceHeader>
              <ServiceDescription>{service.description}</ServiceDescription>
              <BookButton href="tel:+4947219656511">
                <PhoneIcon />
                04721 96 56 511
              </BookButton>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </ServicesContainer>
    </ServicesSection>
  );
};

export default Services;
