import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

const TeamSection = styled(motion.section)`
  padding: 6rem 0;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props => props.theme.colors.background};
`;

const TeamContainer = styled(motion.div)`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3.5rem;
  color: ${props => props.theme.colors.text};
  text-align: center;
  margin-bottom: 4rem;
  font-family: "Italiana", serif;
`;

const TeamGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;
  width: 100%;
  padding: 2rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const TeamMember = styled(motion.div)`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MemberImage = styled(motion.div)`
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

const TextContainer = styled(motion.div)`
  padding: 2rem;
  width: 100%;
  text-align: center;
  background: white;
`;

const MemberName = styled(motion.h3)`
  font-size: 1.8rem;
  color: #333333;
  margin: 0 0 0.5rem 0;
  font-family: "Italiana", serif;
  font-weight: 600;
`;

const MemberRole = styled(motion.p)`
  font-size: 1.1rem;
  color: #666666;
  margin: 0 0 1rem 0;
  font-weight: 500;
`;

const MemberBio = styled(motion.p)`
  font-size: 1rem;
  color: #555555;
  line-height: 1.6;
  opacity: 0.9;
`;

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const containerVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5
      }
    })
  };

  const teamMembers: TeamMember[] = [
    {
      name: 'Anja Behrens',
      role: 'Geschäftsführerin & Friseurmeisterin',
      bio: 'Mit über 20 Jahren Erfahrung leitet Anja unser Team mit Leidenschaft und Expertise.',
      image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFpcmRyZXNzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'
    },
    {
      name: 'Sarah Schmidt',
      role: 'Friseurmeisterin',
      bio: 'Sarah ist spezialisiert auf Farbtechniken und kreative Schnitte.',
      image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aGFpcmRyZXNzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'
    },
    {
      name: 'Lisa Meyer',
      role: 'Friseurin',
      bio: 'Lisa ist unsere Expertin für Hochsteckfrisuren und Styling.',
      image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGFpcmRyZXNzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'
    }
  ];

  return (
    <TeamSection
      ref={sectionRef}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <TeamContainer>
        <SectionTitle>
          Unser Team
        </SectionTitle>
        <TeamGrid>
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <MemberImage
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  loading="lazy"
                  onError={(e) => {
                    console.error('Image failed to load:', member.image);
                    e.currentTarget.src = 'https://via.placeholder.com/400x400?text=Bild+nicht+verfügbar';
                  }}
                />
              </MemberImage>
              <TextContainer>
                <MemberName>{member.name}</MemberName>
                <MemberRole>{member.role}</MemberRole>
                <MemberBio>{member.bio}</MemberBio>
              </TextContainer>
            </TeamMember>
          ))}
        </TeamGrid>
      </TeamContainer>
    </TeamSection>
  );
};

export default About;
