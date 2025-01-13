import React from 'react';
import styled from 'styled-components';

const GallerySection = styled.section`
  padding: 6rem 0;
  background: #fff;
`;

const GalleryContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

const SectionTitle = styled.h2`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 3rem;
  margin-bottom: 3rem;
  color: ${props => props.theme.colors.primary};
  text-align: center;
  font-weight: 400;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const GalleryItem = styled.div`
  position: relative;
  height: 400px;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;

  &:hover img {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

const Gallery: React.FC = () => {
  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      alt: 'Elegante Hochsteckfrisur'
    },
    {
      url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      alt: 'Moderne Haarschnitte'
    },
    {
      url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      alt: 'Kreative Färbetechniken'
    },
    {
      url: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      alt: 'Natürliche Looks'
    },
    {
      url: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      alt: 'Brautfrisuren'
    },
    {
      url: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      alt: 'Styling Inspiration'
    }
  ];

  return (
    <GallerySection id="galerie">
      <GalleryContainer>
        <SectionTitle>Galerie</SectionTitle>
        <GalleryGrid>
          {galleryImages.map((image, index) => (
            <GalleryItem key={index}>
              <GalleryImage src={image.url} alt={image.alt} />
            </GalleryItem>
          ))}
        </GalleryGrid>
      </GalleryContainer>
    </GallerySection>
  );
};

export default Gallery;
