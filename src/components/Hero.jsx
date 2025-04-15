import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  background: #D8DBFF;
  color: ${({ theme }) => theme.colors.white};
  padding: 4rem 2rem 3rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  min-height: 350px;
  flex-direction: row;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 2rem;
    padding: 3rem 1rem 2rem 1rem;
  }
`;

const HeroText = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const fadeInLoop = `
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
`;

const Title = styled.h1`
  font-size: 2.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.electricBlue};
  animation: fadeInLoop 5.5s linear infinite;
  @keyframes fadeInLoop {
    0% { opacity: 0; }
    50% { opacity: 1; }
    100% { opacity: 0; }
  }
`;

const Subtitle = styled.p`
  font-size: 16px;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.black};
  animation: fadeInLoop 5.5s linear infinite;
`;

const HeroImage = styled.img`
  flex: 1.2;
  max-width: 420px;
  width: 100%;
  border-radius: 1.5rem;
  box-shadow: 0 8px 32px rgba(31,1,185,0.15);
  @media (max-width: 900px) {
    max-width: 320px;
  }
`;

import heroImage from '../assets/hero-image.jpg';

const RegisterButton = styled.button`
  background: ${({ theme }) => theme.colors.electricBlue};
  color: #fff;
  font-size: 1.1rem;
  padding: 0.8rem 2.2rem;
  border: none;
  border-radius: 0.8rem;
  font-weight: 600;
  margin-top: 1.2rem;
  box-shadow: 0 2px 8px rgba(31,1,185,0.15);
  cursor: pointer;
  transition: background 0.18s;
  &:hover {
    background: #111;
    color: #fff;
  }
`;

import RegistrationForm from './RegistrationForm';

const Hero = () => {
  const [showForm, setShowForm] = React.useState(false);
  return (
    <HeroSection>
      <HeroText>
        <Title>Unlock Your Potential with Our Expert-Led Courses</Title>
        <Subtitle>
          Join our community and gain the skills you need to succeed. Register today and start your learning journey!
        </Subtitle>
        <RegisterButton onClick={() => setShowForm(true)}>Register a Course</RegisterButton>
      </HeroText>
      <HeroImage src={heroImage} alt="Hero" />
      {showForm && <RegistrationForm onClose={() => setShowForm(false)} />}
    </HeroSection>
  );
};

export default Hero;
