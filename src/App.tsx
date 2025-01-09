import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Page Components
import Home from './components/pages/Home';
import GaleriePage from './components/pages/GaleriePage';
import ServicesPage from './components/pages/ServicesPage';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';

// Common Components
import CookieBanner from './components/common/CookieBanner';
import BackToTop from './components/common/BackToTop';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/galerie" element={<GaleriePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/uber-uns" element={<AboutPage />} />
            <Route path="/kontakt" element={<ContactPage />} />
            
            {/* Fallback Route */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <CookieBanner />
        <BackToTop />
      </div>
    </ThemeProvider>
  );
};

export default App;
