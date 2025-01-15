import React from 'react';
import styled from 'styled-components';
import About from '../about/About';

const PageContainer = styled.div`
  min-height: 100vh;
  background: ${props => props.theme.colors.background};
  padding-top: 80px; // Füge Padding hinzu, um unter der Navbar zu beginnen
`;

const AboutPage: React.FC = () => {
  console.log('AboutPage rendering'); // Debug log
  
  return (
    <PageContainer>
      <div style={{ border: '1px solid red' }}> {/* Temporärer Debug-Rahmen */}
        <About />
      </div>
    </PageContainer>
  );
};

export default AboutPage;
