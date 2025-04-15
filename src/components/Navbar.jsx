import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.electricBlue};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`;

const Logo = styled.div`
  font-size: 1.7rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.electricBlue};
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const Link = styled.a`
  color: ${({ theme }) => theme.colors.electricBlue};
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  transition: color 0.2s;
  &:hover {
    color: ${({ theme }) => theme.colors.black};
  }
`;

const Navbar = () => (
  <Nav>
    <Logo>Training Courses</Logo>
    <NavLinks>
      <Link href="#courses">Courses</Link>
      <Link href="#learn">What You'll Learn</Link>
      <Link href="#teachers">Teachers</Link>
      <Link href="#register">Register</Link>
    </NavLinks>
  </Nav>
);

export default Navbar;
