import React, { useState, useEffect } from 'react';
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
    title: 'Haar Ambiente Cuxhaven - Ihr Friseursalon in Cuxhaven',
    description: 'Willkommen bei Haar Ambiente in Cuxhaven. Professionelle Haar- und Beautypflege in entspannter Atmosphäre. Ahnstraße 22, Cuxhaven. Jetzt Termin vereinbaren: 04721 96 56 511',
    additionalMetaTags: [
      { name: 'keywords', content: 'Friseur Cuxhaven, Haar Ambiente, Haarstyling, Beauty Salon, Friseursalon Cuxhaven, Ahnstraße' },
      { property: 'og:locale', content: 'de_DE' },
      { name: 'geo.region', content: 'DE-NI' },
      { name: 'geo.placename', content: 'Cuxhaven' },
      { name: 'geo.position', content: '53.8667;8.7' },
      { name: 'ICBM', content: '53.8667, 8.7' }
    ]
  });

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      
      <StyledMain>
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
      </StyledMain>
    </>
  );
};

export default Home;
