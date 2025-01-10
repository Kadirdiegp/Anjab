/**
 * Haar Ambiente - Premium Hair Salon Website
 * 
 * @author Kadir Diego Padin Rodriguez
 * @website https://rodriguez-digital.de
 * @copyright (c) ${new Date().getFullYear()} Rodriguez Digital
 * @license MIT
 * 
 * This is the main application component that handles routing and layout structure.
 * Built with React, TypeScript, and Styled Components.
 */

import React, { useEffect, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { initSecurity } from './utils/security';
import theme from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';
import LoadingSpinner from './components/common/LoadingSpinner';
import CookieBanner from './components/common/CookieBanner';
import BackToTop from './components/common/BackToTop';

// Lazy loaded components
const Navbar = lazy(() => import('./components/layout/Navbar'));
const Footer = lazy(() => import('./components/layout/Footer'));
const Home = lazy(() => import('./components/pages/Home'));
const Gallery = lazy(() => import('./components/home/Gallery'));

// Loading fallback component
const PageLoader = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '100vh' 
  }}>
    <LoadingSpinner />
  </div>
);

const App: React.FC = () => {
  useEffect(() => {
    // Initialize security features
    initSecurity();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Suspense fallback={<PageLoader />}>
        <div className="app">
          <Navbar />
          <main>
            <Routes>
              <Route 
                path="/" 
                element={
                  <Suspense fallback={<PageLoader />}>
                    <Home />
                  </Suspense>
                } 
              />
              <Route 
                path="/galerie" 
                element={
                  <Suspense fallback={<PageLoader />}>
                    <Gallery />
                  </Suspense>
                } 
              />
            </Routes>
          </main>
          <Footer />
          <CookieBanner />
          <BackToTop />
        </div>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
