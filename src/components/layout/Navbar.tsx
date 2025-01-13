import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../../assets/images/HAAR.png';

const Nav = styled.nav<{ $isScrolled?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${props => props.$isScrolled ? '#fff' : 'transparent'};
  box-shadow: ${props => props.$isScrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'};
  transition: all 0.3s ease;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: transform 0.3s ease;

  img {
    height: 50px;
    width: auto;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

const NavLinks = styled.div<{ $isOpen: boolean }>`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 250px;
    flex-direction: column;
    background: ${props => props.theme.colors.background};
    padding: 5rem 2rem;
    transform: translateX(${props => (props.$isOpen ? '0' : '100%')});
    transition: transform 0.3s ease;
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
    gap: 1rem;
  }
`;

const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 4px;

  &:hover {
    color: ${props => props.theme.colors.primary};
    background: ${props => props.theme.colors.backgroundLight};
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: left;
    padding: 1rem;
    border-radius: 8px;

    &:hover {
      background: ${props => props.theme.colors.backgroundLight};
    }
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${props => props.theme.colors.primary};
  cursor: pointer;
  transition: color 0.3s ease;
  z-index: 1001;

  &:hover {
    color: ${props => props.theme.colors.primaryDark};
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const Overlay = styled.div<{ $isOpen: boolean }>`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    opacity: ${props => (props.$isOpen ? 1 : 0)};
    visibility: ${props => (props.$isOpen ? 'visible' : 'hidden')};
    transition: opacity 0.3s ease, visibility 0.3s ease;
    z-index: 999;
  }
`;

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const scrollToSection = (sectionId: string) => {
    closeMenu();
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    if (isHomePage) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
    <>
      <Nav $isScrolled={scrolled}>
        <NavContainer>
          <LogoLink to="/" onClick={handleLogoClick}>
            <img src={Logo} alt="Haar Ambiente Logo" />
          </LogoLink>
          <MenuButton onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <FaTimes /> : <FaBars />}
          </MenuButton>
          <NavLinks $isOpen={isOpen}>
            {isHomePage ? (
              <>
                <StyledLink to="/" onClick={() => scrollToSection('home')}>Home</StyledLink>
                <StyledLink to="/" onClick={() => scrollToSection('galerie')}>Galerie</StyledLink>
                <StyledLink to="/" onClick={() => scrollToSection('services')}>Services</StyledLink>
                <StyledLink to="/" onClick={() => scrollToSection('about')}>Über uns</StyledLink>
                <StyledLink to="/" onClick={() => scrollToSection('contact')}>Kontakt</StyledLink>
              </>
            ) : (
              <>
                <StyledLink to="/" onClick={closeMenu}>Home</StyledLink>
                <StyledLink to="/#galerie" onClick={closeMenu}>Galerie</StyledLink>
                <StyledLink to="/#services" onClick={closeMenu}>Services</StyledLink>
                <StyledLink to="/#about" onClick={closeMenu}>Über uns</StyledLink>
                <StyledLink to="/#contact" onClick={closeMenu}>Kontakt</StyledLink>
              </>
            )}
          </NavLinks>
        </NavContainer>
      </Nav>
      <Overlay $isOpen={isOpen} onClick={closeMenu} />
    </>
  );
};

export default Navbar;
