import React from 'react';
import styled from 'styled-components';
import Services from '../services/Services';

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

const ServicesPage: React.FC = () => {
  return (
    <PageContainer>
      <ContentContainer>
        <Title>Unsere Services</Title>
        <Services />
      </ContentContainer>
    </PageContainer>
  );
};

export default ServicesPage;
