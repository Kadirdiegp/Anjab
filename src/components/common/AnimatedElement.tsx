/**
 * Animated Element Component
 * @author Kadir Diego Padin Rodriguez
 * @website rodriguez-digital.de
 */

import React, { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import { fadeInUp, fadeInDown, slideInLeft, slideInRight, scaleIn } from '../../utils/animations';

type AnimationType = 'fadeInUp' | 'fadeInDown' | 'slideInLeft' | 'slideInRight' | 'scaleIn';

interface AnimatedElementProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
}

const getAnimation = (type: AnimationType) => {
  switch (type) {
    case 'fadeInUp':
      return fadeInUp;
    case 'fadeInDown':
      return fadeInDown;
    case 'slideInLeft':
      return slideInLeft;
    case 'slideInRight':
      return slideInRight;
    case 'scaleIn':
      return scaleIn;
    default:
      return fadeInUp;
  }
};

const AnimatedContainer = styled.div<{
  $animation: AnimationType;
  $delay: number;
  $duration: number;
  $isVisible: boolean;
}>`
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.1s ease-out, visibility 0.1s ease-out;

  ${({ $isVisible, $animation, $delay, $duration }) =>
    $isVisible &&
    css`
      opacity: 1;
      visibility: visible;
      animation: ${getAnimation($animation)} ${$duration}s ease-out ${$delay}s forwards;
    `}
`;

const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  animation = 'fadeInUp',
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
  className
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin: '50px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <AnimatedContainer
      ref={elementRef}
      $animation={animation}
      $delay={delay}
      $duration={duration}
      $isVisible={isVisible}
      className={className}
    >
      {children}
    </AnimatedContainer>
  );
};

export default AnimatedElement;
