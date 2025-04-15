import React from 'react';
import styled from 'styled-components';

const FooterSection = styled.footer`
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  padding: 2rem 2rem 1rem 2rem;
  text-align: center;
  font-size: 12px;
`;

const SocialLinks = styled.div`
  margin: 0.5rem 0 1rem 0;
  a {
    color: ${({ theme }) => theme.colors.electricBlue};
    margin: 0 1rem;
    font-size: 1.3rem;
    text-decoration: none;
    &:hover {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

const Footer = () => (
  <FooterSection>
    <div>Contact us: info@trainingcourses.com</div>
    <SocialLinks>
      <a href="#" aria-label="Twitter">Twitter</a>
      <a href="#" aria-label="Facebook">Facebook</a>
      <a href="#" aria-label="LinkedIn">LinkedIn</a>
    </SocialLinks>
    <div>© {new Date().getFullYear()} Training Courses. All rights reserved.</div>
  </FooterSection>
);

export default Footer;
