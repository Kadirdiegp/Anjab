/**
 * SEO Hook
 * @author Kadir Diego Padin Rodriguez
 * @website rodriguez-digital.de
 */

import { useEffect } from 'react';
import { updateMetaTags, injectStructuredData, getDefaultMetaTags, getSalonStructuredData } from '../utils/seo';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  structuredData?: boolean;
  additionalMetaTags?: Array<{
    name?: string;
    property?: string;
    content: string;
  }>;
}

const DEFAULT_IMAGE = '/images/salon-preview.jpg';
const SALON_INFO = {
  name: 'Haar Ambiente',
  description: 'Ihr Friseursalon in Cuxhaven. Professionelle Haar- und Beautypflege in entspannter Atmosphäre.',
  address: 'Ahnstraße 22, 27472 Cuxhaven',
  phone: '+4947219656511',
  url: 'https://haar-ambiente.de',
  coordinates: {
    latitude: '53.8667',
    longitude: '8.7'
  }
};

export const useSEO = ({
  title,
  description,
  image = DEFAULT_IMAGE,
  structuredData = true,
  additionalMetaTags = []
}: SEOProps) => {
  useEffect(() => {
    // Update document title
    document.title = `${title} | ${SALON_INFO.name}`;

    // Update meta tags
    const defaultTags = getDefaultMetaTags(title, description, image);
    updateMetaTags([...defaultTags, ...additionalMetaTags]);

    // Add structured data if needed
    if (structuredData) {
      const data = getSalonStructuredData(
        SALON_INFO.name,
        SALON_INFO.description,
        image,
        SALON_INFO.address,
        SALON_INFO.phone,
        SALON_INFO.url,
        SALON_INFO.coordinates
      );
      injectStructuredData(data);
    }
  }, [title, description, image, structuredData, additionalMetaTags]);
};
