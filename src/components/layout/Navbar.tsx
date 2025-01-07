import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../../context/AuthContext';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

const Nav = styled.nav<{ $isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: ${props => props.$isScrolled ? '1rem 2rem' : '1.5rem 2rem'};
  background: ${props => props.$isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'transparent'};
  transition: all 0.3s ease;
  z-index: 1000;
  box-shadow: ${props => props.$isScrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'};

  @media (max-width: 768px) {
    padding: ${props => props.$isScrolled ? '0.75rem 1.5rem' : '1rem 1.5rem'};
    background: ${props => props.$isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.9)'};
    backdrop-filter: blur(10px);
  }
`;

const NavContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 1.5rem;
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  cursor: pointer;
  z-index: 1001;
`;

const MobileMenu = styled(motion.div)`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: ${props => props.theme.colors.background};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 999;
  }
`;

const MenuItems = styled.div<{ $isOpen: boolean }>`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenuItems = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem;
  width: 100%;
`;

const NavLink = styled.a<{ $active?: boolean }>`
  color: ${props => props.$active ? props.theme.colors.primary : props.theme.colors.text};
  text-decoration: none;
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
  font-family: ${props => props.theme.fonts.heading};
  transition: all 0.3s ease;
  position: relative;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin: 0.5rem 0;
    padding: 0.75rem;
    text-align: center;
    width: 100%;
    border-radius: 8px;
    background: ${props => props.$active ? props.theme.colors.primary + '10' : 'transparent'};
    color: ${props => props.$active ? props.theme.colors.primary : props.theme.colors.text};

    &:active {
      transform: scale(0.98);
    }
  }

  &:hover {
    color: ${props => props.theme.colors.primary};
  }

  @media (min-width: 769px) {
    &:after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: ${props => props.$active ? '100%' : '0'};
      height: 2px;
      background: ${props => props.theme.colors.primary};
      transition: width 0.3s ease;
    }

    &:hover:after {
      width: 100%;
    }
  }
`;

const AuthLink = styled(Link)<{ $active?: boolean }>`
  color: ${props => props.$active ? props.theme.colors.primary : props.theme.colors.text};
  text-decoration: none;
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
  font-family: ${props => props.theme.fonts.heading};
  transition: all 0.3s ease;
  position: relative;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin: 0.5rem 0;
    padding: 0.75rem;
    text-align: center;
    width: 100%;
    border-radius: 8px;
    background: ${props => props.$active ? props.theme.colors.primary + '10' : 'transparent'};
    
    &:active {
      transform: scale(0.98);
    }
  }

  &:hover {
    color: ${props => props.theme.colors.primary};
  }

  @media (min-width: 769px) {
    &:after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: ${props => props.$active ? '100%' : '0'};
      height: 2px;
      background: ${props => props.theme.colors.primary};
      transition: width 0.3s ease;
    }

    &:hover:after {
      width: 100%;
    }
  }
`;

const MenuButton = styled.button<{ $isScrolled: boolean }>`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${props => props.$isScrolled ? props.theme.colors.text : props.theme.colors.text};
  cursor: pointer;
  z-index: 1001;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.3s ease;
  position: relative;
  width: 40px;
  height: 40px;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    
    &:active {
      background: rgba(0, 0, 0, 0.05);
    }
  }
`;

const MenuIcon = styled(motion.div)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const MobileAuthButtons = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  padding: 0 2rem;
  margin-top: 2rem;
`;

const AuthButtons = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Button = styled.button<{ $primary?: boolean }>`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  background: ${props => props.$primary ? props.theme.colors.primary : 'transparent'};
  color: ${props => props.$primary ? '#fff' : props.theme.colors.text};
  border: 1px solid ${props => props.$primary ? 'transparent' : props.theme.colors.text};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateY(0);
  }
`;

const menuVariants = {
  closed: {
    x: '-100%',
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: 'easeInOut'
    }
  },
  open: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: 'easeInOut'
    }
  }
};

const itemVariants = {
  closed: {
    x: -20,
    opacity: 0
  },
  open: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
      ease: 'easeOut'
    }
  })
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { currentUser, isAdmin, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Fehler beim Abmelden:', error);
    }
  };

  const isActive = (path: string) => location.pathname === path;

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const menuItems = [
    { label: 'Home', section: 'home' },
    { label: 'Galerie', section: 'gallery' },
    { label: 'Services', section: 'services' },
    { label: 'Über uns', section: 'about' },
    { label: 'Kontakt', section: 'contact' }
  ];

  return (
    <Nav $isScrolled={isScrolled}>
      <NavContainer>
        <MenuButton $isScrolled={isScrolled} onClick={() => setIsOpen(!isOpen)}>
          <AnimatePresence mode="wait">
            {isOpen ? (
              <MenuIcon
                key="close"
                initial={{ opacity: 0, rotate: -180 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <HiX />
              </MenuIcon>
            ) : (
              <MenuIcon
                key="menu"
                initial={{ opacity: 0, rotate: 180 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -180 }}
                transition={{ duration: 0.3 }}
              >
                <HiMenu />
              </MenuIcon>
            )}
          </AnimatePresence>
        </MenuButton>
        
        <Logo to="/">Haarambiente</Logo>
        
        <MenuItems $isOpen={isOpen}>
          {menuItems.map((item) => (
            <NavLink
              key={item.section}
              onClick={() => scrollToSection(item.section)}
              $active={location.pathname === '/' && item.section === 'home'}
            >
              {item.label}
            </NavLink>
          ))}
          {currentUser ? (
            <>
              <AuthLink to="/profil" $active={isActive('/profil')}>
                Profil
              </AuthLink>
              {isAdmin && (
                <AuthLink to="/admin/dashboard" $active={isActive('/admin/dashboard')}>
                  Admin
                </AuthLink>
              )}
              <AuthLink as="button" onClick={handleLogout} to="">
                Abmelden
              </AuthLink>
            </>
          ) : (
            <NavLink onClick={() => scrollToSection('booking')} $active={false}>
              Termin buchen
            </NavLink>
          )}
        </MenuItems>

        <AnimatePresence>
          {isOpen && (
            <MobileMenu
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <MobileMenuItems>
                {menuItems.map((item, i) => (
                  <motion.div
                    key={item.section}
                    custom={i}
                    variants={itemVariants}
                  >
                    <NavLink
                      onClick={() => scrollToSection(item.section)}
                      $active={location.pathname === '/' && item.section === 'home'}
                    >
                      {item.label}
                    </NavLink>
                  </motion.div>
                ))}
                {currentUser ? (
                  <>
                    <motion.div custom={menuItems.length} variants={itemVariants}>
                      <AuthLink to="/profil" $active={isActive('/profil')}>
                        Profil
                      </AuthLink>
                    </motion.div>
                    {isAdmin && (
                      <motion.div custom={menuItems.length + 1} variants={itemVariants}>
                        <AuthLink to="/admin/dashboard" $active={isActive('/admin/dashboard')}>
                          Admin
                        </AuthLink>
                      </motion.div>
                    )}
                    <motion.div custom={menuItems.length + 2} variants={itemVariants}>
                      <AuthLink as="button" onClick={handleLogout} to="">
                        Abmelden
                      </AuthLink>
                    </motion.div>
                  </>
                ) : (
                  <>
                    <motion.div custom={menuItems.length} variants={itemVariants}>
                      <NavLink onClick={() => scrollToSection('booking')} $active={false}>
                        Termin buchen
                      </NavLink>
                    </motion.div>
                    <MobileAuthButtons>
                      <motion.div custom={menuItems.length + 1} variants={itemVariants}>
                        <Button onClick={() => {
                          setIsOpen(false);
                          navigate('/login');
                        }}>
                          Anmelden
                        </Button>
                      </motion.div>
                      <motion.div custom={menuItems.length + 2} variants={itemVariants}>
                        <Button $primary onClick={() => {
                          setIsOpen(false);
                          navigate('/register');
                        }}>
                          Registrieren
                        </Button>
                      </motion.div>
                    </MobileAuthButtons>
                  </>
                )}
              </MobileMenuItems>
            </MobileMenu>
          )}
        </AnimatePresence>

        {!currentUser && (
          <AuthButtons>
            <Button onClick={() => navigate('/login')}>
              Anmelden
            </Button>
            <Button $primary onClick={() => navigate('/register')}>
              Registrieren
            </Button>
          </AuthButtons>
        )}
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
