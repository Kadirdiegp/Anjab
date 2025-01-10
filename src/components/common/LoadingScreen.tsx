/**
 * Loading Screen Component
 * @author Kadir Diego Padin Rodriguez
 * @website rodriguez-digital.de
 */

import React from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from '../../utils/animations';

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    visibility: hidden;
  }
`;

const LoadingContainer = styled.div<{ $isLoading: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.colors.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: ${props => props.$isLoading ? fadeIn : fadeOut} 0.5s ease-in-out forwards;
`;

const Logo = styled.img`
  width: 120px;
  height: auto;
  margin-bottom: 2rem;
`;

const Scissors = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  animation: cut 2s infinite;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 40px;
    height: 4px;
    background: ${props => props.theme.colors.primary};
    border-radius: 2px;
    transform-origin: left;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }

  @keyframes cut {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2) rotate(180deg);
    }
  }
`;

const LoadingText = styled.p`
  margin-top: 1rem;
  font-size: 1.2rem;
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fonts.heading};
`;

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading }) => {
  return (
    <LoadingContainer $isLoading={isLoading}>
      <Logo src="/images/HAAR.png" alt="Haar Ambiente Logo" />
      <Scissors />
      <LoadingText>Wird geladen...</LoadingText>
    </LoadingContainer>
  );
};

export default LoadingScreen;
