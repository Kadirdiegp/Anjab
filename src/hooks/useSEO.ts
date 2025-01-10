/**
 * SEO Hook
 * @author Kadir Diego Padin Rodriguez
 * @website rodriguez-digital.de
 */

import { useEffect } from 'react';
import { getDefaultMetaTags, getSalonStructuredData, updateMetaTags, injectStructuredData } from '../utils/seo';

// Salon Information
const SALON_INFO = {
  name: 'Haar Ambiente Cuxhaven',
  description: 'Ihr exklusiver Friseursalon in Cuxhaven. Professionelle Haarschnitte, Färbungen und Styling in entspannter Atmosphäre.',
  address: 'Ahnstraße 22, 27472 Cuxhaven',
  telephone: '+49 4721 39680',
  image: '/images/salon-preview.jpg'
};

interface UseSEOProps {
  title?: string;
  description?: string;
  image?: string;
  additionalMetaTags?: Array<{
    name?: string;
    property?: string;
    content: string;
  }>;
}

export const useSEO = ({
  title = SALON_INFO.name,
  description = SALON_INFO.description,
  image = SALON_INFO.image,
  additionalMetaTags = []
}: UseSEOProps = {}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const metaTags = [
      ...getDefaultMetaTags(title, description, image),
      ...additionalMetaTags
    ];
    updateMetaTags(metaTags);

    // Update structured data
    const structuredData = getSalonStructuredData(
      SALON_INFO.name,
      SALON_INFO.description,
      SALON_INFO.image,
      SALON_INFO.telephone
    );
    injectStructuredData(structuredData);

    // Cleanup
    return () => {
      document.title = SALON_INFO.name;
    };
  }, [title, description, image, additionalMetaTags]);
};
