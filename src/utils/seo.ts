/**
 * SEO Utilities
 * @author Kadir Diego Padin Rodriguez
 * @website rodriguez-digital.de
 */

const SITE_URL = 'https://haarambiente.netlify.app';
const DEFAULT_IMAGE = `${SITE_URL}/images/salon-preview.jpg`;

interface MetaTag {
  name?: string;
  property?: string;
  content: string;
}

interface StructuredData {
  '@context': string;
  '@type': string;
  [key: string]: any;
}

export const getDefaultMetaTags = (
  title: string,
  description: string,
  image: string = DEFAULT_IMAGE
): MetaTag[] => [
  // Primary Meta Tags
  { name: 'title', content: title },
  { name: 'description', content: description },
  
  // Open Graph / Facebook
  { property: 'og:type', content: 'website' },
  { property: 'og:url', content: SITE_URL },
  { property: 'og:title', content: title },
  { property: 'og:description', content: description },
  { property: 'og:image', content: image },
  { property: 'og:site_name', content: 'Haar Ambiente Cuxhaven' },
  { property: 'og:locale', content: 'de_DE' },
  
  // Twitter
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:url', content: SITE_URL },
  { name: 'twitter:title', content: title },
  { name: 'twitter:description', content: description },
  { name: 'twitter:image', content: image },
  
  // Geo Tags
  { name: 'geo.region', content: 'DE-NI' },
  { name: 'geo.placename', content: 'Cuxhaven' },
  { name: 'geo.position', content: '53.8667;8.7' },
  { name: 'ICBM', content: '53.8667, 8.7' },
  
  // Additional Tags
  { name: 'theme-color', content: '#ffffff' },
  { name: 'format-detection', content: 'telephone=no' }
];

export const updateMetaTags = (tags: MetaTag[]): void => {
  // Entferne bestehende Meta-Tags
  document.querySelectorAll('meta').forEach(meta => {
    if (meta.getAttribute('name') || meta.getAttribute('property')) {
      meta.remove();
    }
  });

  // Füge neue Meta-Tags hinzu
  tags.forEach(tag => {
    const meta = document.createElement('meta');
    if (tag.name) meta.setAttribute('name', tag.name);
    if (tag.property) meta.setAttribute('property', tag.property);
    meta.setAttribute('content', tag.content);
    document.head.appendChild(meta);
  });
};

export const injectStructuredData = (data: any): void => {
  // Entferne bestehende strukturierte Daten
  const existingScript = document.querySelector('script[type="application/ld+json"]');
  if (existingScript) {
    existingScript.remove();
  }

  // Füge neue strukturierte Daten hinzu
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(data);
  document.head.appendChild(script);
};

export const getSalonStructuredData = (
  name: string,
  description: string,
  image: string,
  telephone: string
): StructuredData => ({
  '@context': 'https://schema.org',
  '@type': 'HairSalon',
  '@id': SITE_URL,
  name,
  description,
  url: SITE_URL,
  telephone,
  image: [
    image,
    `${SITE_URL}/images/salon-outside.jpg`,
    `${SITE_URL}/images/salon-inside.jpg`
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Ahnstraße 22',
    addressLocality: 'Cuxhaven',
    postalCode: '27472',
    addressCountry: 'DE'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '53.8667',
    longitude: '8.7'
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '08:00',
      closes: '13:00'
    }
  ],
  priceRange: '€€',
  paymentAccepted: ['Cash', 'Credit Card', 'EC Card'],
  currenciesAccepted: 'EUR'
});
