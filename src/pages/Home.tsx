import React, { useState, useEffect, Suspense } from 'react';
import { useSEO } from '../hooks/useSEO';
import Hero from '../components/home/Hero';
import Services from '../components/services/Services';
import About from '../components/about/About';
import Contact from '../components/contact/Contact';
import AnimatedElement from '../components/common/AnimatedElement';
import LoadingScreen from '../components/common/LoadingScreen';
import ScrollToTop from '../components/common/ScrollToTop';
import styled from 'styled-components';

const StyledMain = styled.main`
  overflow-x: hidden; // Verhindert horizontales Scrollen bei Animationen
`;

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simuliere Ladezeit für Assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useSEO({
    title: 'Haar Ambiente Cuxhaven | Ihr Friseursalon für Stil und Wohlbefinden',
    description: 'Willkommen bei Haar Ambiente in Cuxhaven. Professionelle Haarschnitte, Färbungen und Styling in entspannter Atmosphäre. Vereinbaren Sie jetzt Ihren Termin!',
    additionalMetaTags: [
      { name: 'keywords', content: 'Friseur Cuxhaven, Haar Ambiente, Haarschnitt, Färben, Styling, Salon' },
      { property: 'business:contact_data:street_address', content: 'Ahnstraße 22' },
      { property: 'business:contact_data:locality', content: 'Cuxhaven' },
      { property: 'business:contact_data:postal_code', content: '27472' },
      { property: 'business:contact_data:country_name', content: 'Germany' },
      { property: 'business:contact_data:phone_number', content: '+49 4721 39680' }
    ]
  });

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      
      <StyledMain>
        <Suspense fallback={<LoadingScreen isLoading={false} />}>
          <AnimatedElement animation="fadeInDown" duration={0.8}>
            <section id="hero">
              <Hero />
            </section>
          </AnimatedElement>

          <AnimatedElement animation="slideInRight" delay={0.2} threshold={0.2}>
            <section id="services">
              <Services />
            </section>
          </AnimatedElement>

          <AnimatedElement animation="fadeInUp" delay={0.3} threshold={0.2}>
            <section id="about">
              <About />
            </section>
          </AnimatedElement>

          <AnimatedElement animation="slideInLeft" delay={0.4} threshold={0.2}>
            <section id="contact">
              <Contact />
            </section>
          </AnimatedElement>

          <ScrollToTop />
        </Suspense>
      </StyledMain>
    </>
  );
};

export default Home;
