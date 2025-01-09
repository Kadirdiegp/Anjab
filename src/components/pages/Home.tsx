import React from 'react';
import Hero from '../home/Hero';
import Gallery from '../home/Gallery';
import Services from '../services/Services';
import AboutUs from '../home/AboutUs';
import Contact from '../contact/Contact';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <section id="gallery">
        <Gallery />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="about">
        <AboutUs />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default Home;
