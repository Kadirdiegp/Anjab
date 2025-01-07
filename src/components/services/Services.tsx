import React from 'react';
import styled from 'styled-components';

const ServicesSection = styled.section`
  padding: 8rem 0;
  background: ${props => props.theme.colors.background};
`;

const ServicesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionTitle = styled.h2`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 2.5rem;
  color: ${props => props.theme.colors.primary};
  text-align: center;
  margin-bottom: 4rem;
`;

const SectionNumber = styled.h2`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 2.5rem;
  color: ${props => props.theme.colors.primary};
  text-align: center;
  margin-bottom: 1rem;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const ServiceCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }
`;

const ServiceIcon = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  background: ${props => props.theme.colors.accent};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
`;

const ServiceTitle = styled.h3`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 1.5rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
`;

const ServicePrice = styled.p`
  font-size: 1.25rem;
  color: ${props => props.theme.colors.accent};
  font-weight: 600;
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  color: ${props => props.theme.colors.text};
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const BookButton = styled.button`
  background: ${props => props.theme.colors.accent};
  color: white;
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 25px;
  font-family: ${props => props.theme.fonts.body};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.colors.primary};
    transform: translateY(-2px);
  }
`;

const services = [
  {
    icon: "✂️",
    title: "Haircuts",
    price: "From €50",
    description: "Precision cuts tailored to your face shape and personal style."
  },
  {
    icon: "🎨",
    title: "Color Treatments",
    price: "From €80",
    description: "From subtle highlights to bold transformations using premium products."
  },
  {
    icon: "💇‍♀️",
    title: "Styling",
    price: "From €40",
    description: "Special occasion styling, blow-outs, and professional finishing."
  },
  {
    icon: "✨",
    title: "Extensions",
    price: "From €200",
    description: "Premium quality hair extensions for length and volume."
  }
];

const Services: React.FC = () => {
  return (
    <ServicesSection id="leistungen">
      <ServicesContainer>
        <SectionNumber>03</SectionNumber>
        <SectionTitle>Our Services</SectionTitle>
        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard key={index}>
              <ServiceIcon>{service.icon}</ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServicePrice>{service.price}</ServicePrice>
              <ServiceDescription>{service.description}</ServiceDescription>
              <BookButton>Book Now</BookButton>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </ServicesContainer>
    </ServicesSection>
  );
};

export default Services;
