import React from 'react';
import styled from 'styled-components';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const TestimonialsSection = styled.section`
  padding: 6rem 0;
  background: #fff;
`;

const TestimonialsContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

const SectionNumber = styled.span`
  font-size: 4rem;
  opacity: 0.5;
  font-family: ${props => props.theme.fonts.heading};
  display: block;
  margin-bottom: 1rem;
  color: #000;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
`;

const TestimonialCard = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const QuoteIcon = styled(FaQuoteLeft)`
  font-size: 2rem;
  color: ${props => props.theme.colors.accent};
  margin-bottom: 1rem;
`;

const TestimonialText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #333;
  margin-bottom: 1.5rem;
  font-style: italic;
`;

const Stars = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-bottom: 1rem;
  color: #FFD700;
`;

const CustomerInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const CustomerImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

const CustomerDetails = styled.div`
  h4 {
    font-family: ${props => props.theme.fonts.heading};
    font-size: 1.1rem;
    margin: 0;
  }

  p {
    color: #666;
    font-size: 0.9rem;
    margin: 0;
  }
`;

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      text: "Ich bin begeistert von der professionellen Beratung und dem fantastischen Ergebnis. Die Atmosphäre ist entspannt und luxuriös zugleich.",
      name: "Julia Weber",
      date: "Oktober 2024",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
      stars: 5
    },
    {
      text: "Endlich habe ich meinen Friseur fürs Leben gefunden! Die Stylisten verstehen es perfekt, meine Wünsche umzusetzen.",
      name: "Marie Schmidt",
      date: "September 2024",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
      stars: 5
    },
    {
      text: "Hervorragende Beratung und ein tolles Endergebnis. Das Team ist super freundlich und kompetent.",
      name: "Thomas Müller",
      date: "November 2024",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
      stars: 5
    }
  ];

  return (
    <TestimonialsSection id="testimonials">
      <TestimonialsContainer>
        <SectionNumber>05</SectionNumber>
        <TestimonialsGrid>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index}>
              <QuoteIcon />
              <Stars>
                {[...Array(testimonial.stars)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </Stars>
              <TestimonialText>{testimonial.text}</TestimonialText>
              <CustomerInfo>
                <CustomerImage src={testimonial.image} alt={testimonial.name} />
                <CustomerDetails>
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.date}</p>
                </CustomerDetails>
              </CustomerInfo>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
      </TestimonialsContainer>
    </TestimonialsSection>
  );
};

export default Testimonials;
