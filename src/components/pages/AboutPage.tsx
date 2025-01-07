import React from 'react';
import styled from 'styled-components';
import AboutUs from '../home/AboutUs';

const PageContainer = styled.div`
  padding: 6rem 2rem 2rem;
  min-height: 100vh;
  background: ${props => props.theme.colors.background};
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 2.5rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 2rem;
  text-align: center;
`;

const AboutPage: React.FC = () => {
  return (
    <PageContainer>
      <ContentContainer>
        <Title>Über uns</Title>
        <AboutUs />
      </ContentContainer>
    </PageContainer>
  );
};

export default AboutPage;
