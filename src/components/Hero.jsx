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

const Title = styled.h1`
  font-size: 2.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.electricBlue};
  width: 100%;
  max-width: 24em;
  word-break: break-word;
  overflow: visible;
  text-align: left;
  min-height: 2.5em;
  background: transparent;
  text-shadow: 0 2px 8px rgba(31,1,185,0.10), 0 1px 0 #fff;
  box-sizing: border-box;
  padding-right: 0.4em;

  @media (max-width: 600px) {
    font-size: 2.8rem;
    min-height: 1.6em;
    max-width: 99vw;
    padding-right: 0.2em;
    white-space: normal;
    display: block;
  }
`;

const Subtitle = styled.p`
  font-size: clamp(0.95rem, 2vw, 1.2rem);
  margin-bottom: 2rem;
  color: #232323;
  line-height: 1.5;
  max-width: 38em;
  @media (max-width: 600px) {
    font-size: 0.95rem;
    max-width: 98vw;
  }
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

const titleLine1 = "Unlock Your Potential";
const titleLine2 = "with Our Expert-Led Courses";

const Hero = () => {
  const [showForm, setShowForm] = React.useState(false);
  const [displayed1, setDisplayed1] = React.useState("");
  const [displayed2, setDisplayed2] = React.useState("");

  React.useEffect(() => {
    let i = 0;
    setDisplayed1("");
    setDisplayed2("");
    const interval1 = setInterval(() => {
      setDisplayed1(titleLine1.slice(0, i + 1));
      i++;
      if (i === titleLine1.length) {
        clearInterval(interval1);
        let j = 0;
        const interval2 = setInterval(() => {
          setDisplayed2(titleLine2.slice(0, j + 1));
          j++;
          if (j === titleLine2.length) {
            clearInterval(interval2);
          }
        }, 55);
      }
    }, 55);
    return () => {
      clearInterval(interval1);
    };
  }, []);

  return (
    <HeroSection>
      <HeroText>
        <Title style={{marginBottom: 0}}>{displayed1}</Title>
        <Title style={{marginTop: 0}}>{displayed2}</Title>
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
