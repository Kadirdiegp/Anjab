/**
 * Scroll To Top Button Component
 * @author Kadir Diego Padin Rodriguez
 * @website rodriguez-digital.de
 */

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaChevronUp } from 'react-icons/fa';
import { fadeIn } from '../../utils/animations';

const ScrollButton = styled.button<{ $isVisible: boolean }>`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  opacity: ${props => props.$isVisible ? 1 : 0};
  visibility: ${props => props.$isVisible ? 'visible' : 'hidden'};
  z-index: 999;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  animation: ${fadeIn} 0.3s ease-out;

  &:hover {
    transform: translateY(-5px);
    background: ${props => props.theme.colors.primaryDark};
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    bottom: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
  }
`;

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <ScrollButton
      $isVisible={isVisible}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Nach oben scrollen"
    >
      <FaChevronUp size={20} />
    </ScrollButton>
  );
};

export default ScrollToTop;
