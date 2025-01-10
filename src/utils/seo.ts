/**
 * SEO Utilities
 * @author Kadir Diego Padin Rodriguez
 * @website rodriguez-digital.de
 */

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

export const updateMetaTags = (tags: MetaTag[]) => {
  // Remove existing meta tags
  const existingTags = document.head.querySelectorAll('meta[data-dynamic="true"]');
  existingTags.forEach(tag => tag.remove());

  // Add new meta tags
  tags.forEach(tag => {
    const meta = document.createElement('meta');
    meta.dataset.dynamic = 'true';
    
    if (tag.name) meta.name = tag.name;
    if (tag.property) meta.setAttribute('property', tag.property);
    
    meta.content = tag.content;
    document.head.appendChild(meta);
  });
};

export const injectStructuredData = (data: StructuredData) => {
  // Remove existing structured data
  const existingScript = document.head.querySelector('script[type="application/ld+json"]');
  if (existingScript) existingScript.remove();

  // Add new structured data
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(data);
  document.head.appendChild(script);
};

export const getDefaultMetaTags = (
  title: string,
  description: string,
  image: string
): MetaTag[] => [
  // Basic Meta Tags
  { name: 'description', content: description },
  { name: 'robots', content: 'index, follow' },
  
  // Open Graph Tags
  { property: 'og:title', content: title },
  { property: 'og:description', content: description },
  { property: 'og:image', content: image },
  { property: 'og:type', content: 'website' },
  
  // Twitter Cards
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: title },
  { name: 'twitter:description', content: description },
  { name: 'twitter:image', content: image },
];

export const getSalonStructuredData = (
  name: string,
  description: string,
  image: string,
  address: string,
  phone: string,
  url: string,
  coordinates: { latitude: string; longitude: string }
): StructuredData => ({
  '@context': 'https://schema.org',
  '@type': 'HairSalon',
  name,
  description,
  image,
  '@id': url,
  url,
  telephone: phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: address,
    addressLocality: 'Cuxhaven',
    postalCode: '27472',
    addressCountry: 'DE'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: coordinates.latitude,
    longitude: coordinates.longitude
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
  paymentAccepted: 'Cash, EC-Karte',
  currenciesAccepted: 'EUR'
});
