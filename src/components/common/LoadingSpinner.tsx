import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const LoadingWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.9);
  z-index: 9999;
  animation: ${fadeIn} 0.3s ease;
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 3px solid ${props => props.theme.colors.background};
  border-top: 3px solid ${props => props.theme.colors.primary};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const LoadingText = styled.p`
  position: absolute;
  margin-top: 80px;
  font-family: ${props => props.theme.fonts.heading};
  color: ${props => props.theme.colors.primary};
  font-size: 1.2rem;
`;

interface LoadingSpinnerProps {
  text?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ text = 'Laden...' }) => {
  return (
    <LoadingWrapper>
      <Spinner />
      <LoadingText>{text}</LoadingText>
    </LoadingWrapper>
  );
};

export default LoadingSpinner;
