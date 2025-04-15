import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  background: rgba(255,255,255,0.4);
  color: ${({ theme }) => theme.colors.electricBlue};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  height: 64px;
  min-height: 64px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 9999;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  transition: opacity 0.35s cubic-bezier(0.4,0,0.2,1), background 0.35s cubic-bezier(0.4,0,0.2,1);
  @media (max-width: 768px) {
    background: #fff;
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    box-shadow: 0 2px 12px rgba(31,1,185,0.10);
    height: 64px;
    min-height: 64px;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  img {
    height: 42px;
    width: 42px;
    display: block;
    background: transparent !important;
    box-shadow: none;
    border-radius: 0;
    mix-blend-mode: multiply;
    object-fit: contain;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

const RightGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9rem;
  @media (min-width: 769px) {
    gap: 2rem;
  }
`;

const Link = styled.a`
  color: #232323;
  text-decoration: none;
  font-weight: 400;
  font-size: 14px;
  position: relative;
  transition: color 0.18s cubic-bezier(0.4,0,0.2,1);
  &::after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 2px;
    background: ${({ theme }) => theme.colors.electricBlue || '#1F01B9'};
    transform: scaleX(0);
    transition: transform 0.24s cubic-bezier(0.4,0,0.2,1);
    transform-origin: left;
  }
  &:hover {
    color: ${({ theme }) => theme.colors.electricBlue || '#1F01B9'};
    font-weight: 400;
  }
  &:hover::after {
    transform: scaleX(1);
  }
`;

import RegistrationForm from './RegistrationForm';
import logoImg from '../assets/logo.png';

const RegisterButton = styled.button`
  background: ${({ theme }) => theme.colors.electricBlue || '#1F01B9'};
  color: #fff;
  font-size: 1rem;
  padding: 0.5rem 1.2rem;
  border: none;
  border-radius: 0.8rem;
  font-weight: 600;
  margin-left: 0.7rem;
  cursor: pointer;
  transition: background 0.18s cubic-bezier(0.4,0,0.2,1), color 0.18s cubic-bezier(0.4,0,0.2,1);
  box-shadow: 0 2px 8px rgba(31,1,185,0.11);
  &:hover {
    background: #111;
    color: #fff;
  }
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const MenuIcon = styled.button`
  display: none;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  margin-left: 1.3rem;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  svg {
    width: 30px;
    height: 30px;
  }
`;

const MobileMenuOverlay = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: ${({ open }) => (open ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.38);
    z-index: 9998;
    opacity: ${({ open }) => (open ? 1 : 0)};
    transition: opacity 0.25s cubic-bezier(0.4,0,0.2,1);
  }
`;

const MobileMenu = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: ${({ open }) => (open ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 64px; /* navbar height */
    left: 0;
    width: 100vw;
    background: rgba(255,255,255,0.97);
    backdrop-filter: blur(8px);
    z-index: 9999;
    box-shadow: 0 4px 24px rgba(0,0,0,0.10);
    animation: slideDown 0.32s cubic-bezier(0.4,0,0.2,1);
    padding: 2.5rem 0 2rem 0;
    gap: 2rem;
  }
  @keyframes slideDown {
    from { transform: translateY(-100%); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
`;

const CloseMenuBtn = styled.button`
  position: absolute;
  top: 1.1rem;
  right: 1.3rem;
  background: none;
  border: none;
  color: #1F01B9;
  font-size: 2.1rem;
  cursor: pointer;
  z-index: 10001;
  @media (min-width: 769px) {
    display: none;
  }
`;

const Navbar = () => {
  const [visible, setVisible] = React.useState(true);
  const [showForm, setShowForm] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const lastScroll = React.useRef(0);

  React.useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll <= 0) {
        setVisible(true);
      } else if (currentScroll > lastScroll.current) {
        setVisible(false); // scrolling down
      } else {
        setVisible(true); // scrolling up
      }
      lastScroll.current = currentScroll;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on nav link click
  const handleMobileNav = (cb) => {
    setMobileMenuOpen(false);
    if (cb) cb();
  };

  return (
    <Nav style={{opacity: visible ? 1 : 0}}>
      <Logo><img src={logoImg} alt="Logo" /></Logo>
      <RightGroup>
        <NavLinks>
          <Link href="#courses">Courses</Link>
          <Link href="#learn">What You'll Learn</Link>
          <Link href="#teachers">Teachers</Link>
        </NavLinks>
        <RegisterButton as="button" type="button" onClick={() => setShowForm(true)}>
          Register
        </RegisterButton>
        <MenuIcon aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMobileMenuOpen(v => !v)}>
          {mobileMenuOpen ? (
            <svg viewBox="0 0 24 24" width="30" height="30"><line x1="5" y1="5" x2="19" y2="19" stroke="#1F01B9" strokeWidth="2.5" strokeLinecap="round"/><line x1="19" y1="5" x2="5" y2="19" stroke="#1F01B9" strokeWidth="2.5" strokeLinecap="round"/></svg>
          ) : (
            <svg viewBox="0 0 24 24"><rect y="4" width="24" height="2" rx="1" fill="#1F01B9"/><rect y="11" width="24" height="2" rx="1" fill="#1F01B9"/><rect y="18" width="24" height="2" rx="1" fill="#1F01B9"/></svg>
          )}
        </MenuIcon>
      </RightGroup>
      <MobileMenuOverlay open={mobileMenuOpen} onClick={() => setMobileMenuOpen(false)} aria-label="Close menu overlay" />
      <MobileMenu open={mobileMenuOpen}>
        <CloseMenuBtn aria-label="Close menu" onClick={() => setMobileMenuOpen(false)}>&times;</CloseMenuBtn>
        <Link href="#courses" onClick={() => handleMobileNav()}>Courses</Link>
        <Link href="#learn" onClick={() => handleMobileNav()}>What You'll Learn</Link>
        <Link href="#teachers" onClick={() => handleMobileNav()}>Teachers</Link>
        <RegisterButton as="button" type="button" onClick={() => { setShowForm(true); setMobileMenuOpen(false); }}>
          Register
        </RegisterButton>
      </MobileMenu>
      {showForm && <RegistrationForm onClose={() => setShowForm(false)} />}
    </Nav>
  );
};

export default Navbar;
