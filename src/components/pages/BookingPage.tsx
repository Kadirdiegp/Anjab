import React from 'react';
import styled from 'styled-components';
import BookingForm from '../booking/BookingForm';

const PageContainer = styled.div`
  padding: 6rem 2rem 2rem;
  min-height: 100vh;
  background: ${props => props.theme.colors.background};
`;

const ContentContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 2.5rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 2rem;
  text-align: center;
`;

const BookingPage: React.FC = () => {
  return (
    <PageContainer>
      <ContentContainer>
        <Title>Termin buchen</Title>
        <BookingForm />
      </ContentContainer>
    </PageContainer>
  );
};

export default BookingPage;
