/**
 * LazyImage Component
 * @author Kadir Diego Padin Rodriguez
 * @website rodriguez-digital.de
 */

import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

interface LazyImageProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  className?: string;
  blur?: boolean;
}

const ImageContainer = styled.div<{ $isLoading: boolean }>`
  position: relative;
  overflow: hidden;
  background: #f0f0f0;
  width: 100%;
  height: 100%;
`;

const StyledImage = styled.img<{ $isLoaded: boolean; $blur?: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease, filter 0.3s ease;
  opacity: ${props => (props.$isLoaded ? 1 : 0)};
  filter: ${props => (props.$blur ? 'blur(10px)' : 'none')};
`;

const Placeholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #f0f0f0 0%, #e0e0e0 50%, #f0f0f0 100%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;

  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
`;

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  width = '100%',
  height = 'auto',
  className,
  blur = false
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '50px'
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <ImageContainer 
      style={{ width, height }} 
      className={className}
      $isLoading={!isLoaded}
    >
      {!isLoaded && <Placeholder />}
      {isInView && (
        <StyledImage
          ref={imgRef}
          src={src}
          alt={alt}
          onLoad={handleLoad}
          $isLoaded={isLoaded}
          $blur={blur && !isLoaded}
          loading="lazy"
        />
      )}
    </ImageContainer>
  );
};

export default LazyImage;
