import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from './context/AuthContext';
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
import BookingPage from './components/pages/BookingPage';

// Auth Components
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Profile from './components/profile/Profile';
import AdminLogin from './components/admin/AdminLogin';
import AdminDashboard from './components/admin/AdminDashboard';
import ProtectedRoute from './components/auth/ProtectedRoute';

// Common Components
import CookieBanner from './components/common/CookieBanner';
import BackToTop from './components/common/BackToTop';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthProvider>
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
              <Route path="/termin" element={<BookingPage />} />
              
              {/* Auth Routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              
              {/* Protected Routes */}
              <Route path="/profil" element={
                <ProtectedRoute requireAdmin={false}>
                  <Profile />
                </ProtectedRoute>
              } />
              
              {/* Admin Routes */}
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin/dashboard" element={
                <ProtectedRoute requireAdmin>
                  <AdminDashboard />
                </ProtectedRoute>
              } />
              
              {/* Fallback Route */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
          <CookieBanner />
          <BackToTop />
        </div>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
