import React from 'react';
import styled from 'styled-components';

const TeamSection = styled.section`
  padding: 6rem 0;
  background: #000;
  color: #fff;
`;

const TeamContainer = styled.div`
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
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
`;

const TeamMember = styled.div`
  text-align: center;
`;

const MemberImage = styled.div`
  width: 100%;
  height: 400px;
  margin-bottom: 1.5rem;
  position: relative;
  overflow: hidden;
  border-radius: 8px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const MemberName = styled.h3`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  font-weight: 400;
`;

const MemberRole = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const MemberBio = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  line-height: 1.6;
`;

const AboutUs: React.FC = () => {
  const teamMembers = [
    {
      name: 'Anja Behrens',
      role: 'Master Stylistin',
      image: 'https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      bio: 'Mit über 10 Jahren Erfahrung kreiert Sarah einzigartige Looks, die Ihre natürliche Schönheit unterstreichen.'
    },
    {
      name: 'Lina Vincenza Fonto',
      role: 'Coloristin',
      image: 'https://images.unsplash.com/photo-1605980776566-0486c3ac7617?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      bio: 'Spezialisiert auf Haarfarben und Balayage, verwandelt Lisa Ihre Haarfarbe in ein strahlendes Kunstwerk.'
    },
    {
      name: 'Marie Weber',
      role: 'Style Expertin',
      image: 'https://images.unsplash.com/photo-1605980776548-2a0c3e9b1e6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      bio: 'Marie ist bekannt für ihre kreativen Hochsteckfrisuren und perfekten Styling-Techniken.'
    }
  ];

  return (
    <TeamSection id="team">
      <TeamContainer>
        <SectionNumber>04</SectionNumber>
        <TeamGrid>
          {teamMembers.map((member, index) => (
            <TeamMember key={index}>
              <MemberImage>
                <img src={member.image} alt={member.name} />
              </MemberImage>
              <MemberName>{member.name}</MemberName>
              <MemberRole>{member.role}</MemberRole>
              <MemberBio>{member.bio}</MemberBio>
            </TeamMember>
          ))}
        </TeamGrid>
      </TeamContainer>
    </TeamSection>
  );
};

export default AboutUs;
