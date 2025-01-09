import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../../assets/images/HAAR.png';

const Nav = styled.nav<{ $isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${props => props.$isScrolled ? 'white' : 'rgba(255, 255, 255, 0.95)'};
  padding: 1rem;
  box-shadow: ${props => props.$isScrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'};
  transition: all 0.3s ease;
  z-index: 1000;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const LogoLink = styled(Link)`
  img {
    height: 50px;
    width: auto;
  }
`;

const NavLinks = styled.div<{ $isOpen: boolean }>`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: ${props => props.$isOpen ? 'flex' : 'none'};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    padding: 1rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
`;

const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }

  &.active {
    color: ${props => props.theme.colors.primary};
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${props => props.theme.colors.text};

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <Nav $isScrolled={isScrolled}>
      <NavContainer>
        <LogoLink to="/" onClick={closeMenu}>
          <img src={Logo} alt="Haar Ambiente Logo" />
        </LogoLink>

        <MenuButton onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MenuButton>

        <NavLinks $isOpen={isOpen}>
          <StyledLink to="/" onClick={closeMenu} className={location.pathname === '/' ? 'active' : ''}>
            Home
          </StyledLink>
          <StyledLink to="/galerie" onClick={closeMenu} className={location.pathname === '/galerie' ? 'active' : ''}>
            Galerie
          </StyledLink>
          <StyledLink to="/services" onClick={closeMenu} className={location.pathname === '/services' ? 'active' : ''}>
            Leistungen
          </StyledLink>
          <StyledLink to="/uber-uns" onClick={closeMenu} className={location.pathname === '/uber-uns' ? 'active' : ''}>
            Über uns
          </StyledLink>
          <StyledLink to="/kontakt" onClick={closeMenu} className={location.pathname === '/kontakt' ? 'active' : ''}>
            Kontakt
          </StyledLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
