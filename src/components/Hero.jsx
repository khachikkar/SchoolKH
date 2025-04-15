import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  background: ${({ theme }) => theme.colors.electricBlue};
  color: ${({ theme }) => theme.colors.white};
  padding: 4rem 2rem 3rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  min-height: 350px;
`;

const HeroText = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Title = styled.h1`
  font-size: 2.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.white};
`;

const Subtitle = styled.p`
  font-size: 16px;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.white};
`;

const HeroImage = styled.img`
  flex: 1;
  max-width: 340px;
  width: 100%;
  border-radius: 1.5rem;
  box-shadow: 0 8px 32px rgba(31,1,185,0.15);
`;

import heroImage from '../assets/hero-image.jpg';

const Hero = () => (
  <HeroSection>
    <HeroText>
      <Title>Unlock Your Potential with Our Expert-Led Courses</Title>
      <Subtitle>
        Join our community and gain the skills you need to succeed. Register today and start your learning journey!
      </Subtitle>
    </HeroText>
    <HeroImage src={heroImage} alt="Hero" />
  </HeroSection>
);

export default Hero;
