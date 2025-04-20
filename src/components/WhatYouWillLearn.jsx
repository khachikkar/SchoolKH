import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const LearnSection = styled.section`
  background: #111;
  color: #fff;
  padding: 3rem 2rem 2.5rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 10%;
    width: 480px;
    height: 480px;
    background: radial-gradient(circle, rgba(0,155,255,0.42) 0%, rgba(0,80,180,0.20) 60%, rgba(0,0,0,0) 100%);
    filter: blur(60px);
    transform: translate(-50%, 0);
    z-index: 0;
    pointer-events: none;
  }
`;

const FlowContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.2rem 1.2rem;
  margin-top: 2.8rem;
  justify-content: center;
  align-items: stretch;
  overflow-x: auto;
  position: relative;
  justify-items: center;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem 0;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Step = styled(motion.div)`
  background: rgba(255,255,255,0.3);
  color: #fff;
  border-radius: 1.2rem;
  min-width: 210px;
  max-width: 240px;
  padding: 1.7rem 1rem 1.2rem 1rem;
  margin: 0 0.5rem;
  font-size: 16px;
  font-weight: 500;
  box-shadow: 0 8px 32px rgba(31,1,185,0.13), 0 1.5px 12px rgba(0,0,0,0.10);
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.18s, box-shadow 0.18s;
  backdrop-filter: blur(24px) saturate(160%);
  -webkit-backdrop-filter: blur(24px) saturate(160%);
  border: 1.5px solid rgba(255,255,255,0.22);
  &:hover {
    transform: translateY(-7px) scale(1.04);
    box-shadow: 0 12px 38px rgba(31,1,185,0.19), 0 2px 18px rgba(0,0,0,0.13);
  }
`;



import aiToolsIcon from '../assets/ai-tools-icon.png';
import uiuxIcon from '../assets/uiux-icon.png';
import heroImage from '../assets/hero-image.jpg';
import teacher1Img from '../assets/teacher1.jpg';
import teacher2Img from '../assets/teacher2.jpg';

const cardData = [
  {
    image: aiToolsIcon,
    text: 'Create your own simple website or app and show it to your friends and family!',
  },
  {
    image: uiuxIcon,
    text: 'Learn how to use cool tools like ChatGPT and Figma to make your ideas real.',
  },
  {
    image: heroImage,
    text: 'See how design and marketing work by making your own project and sharing it online.',
  },
  {
    image: teacher1Img,
    text: 'Work together with other teens, make new friends, and help each other succeed.',
  },
  {
    image: teacher2Img,
    text: 'Get support from real teachers and join a community where you can always ask for help.',
  },
];

const WhatYouWillLearn = () => (
  <LearnSection id="learn">
    <h1 style={{ color: '#fff', fontWeight: 700, marginBottom: '1.8rem' }}>What You Will Learn</h1>
    <FlowContainer>
      {cardData.map((card, idx) => (
        <Step
          key={idx}
          initial={{ opacity: 0, x: idx % 2 === 0 ? -80 : 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, type: 'spring', bounce: 0.28 }}
        >
          <img src={card.image} alt="card visual" style={{ width: '100%', height: '100px', borderRadius: '1rem', marginBottom: '1rem', objectFit: 'cover', boxShadow: '0 2px 12px rgba(31,1,185,0.11)' }} />
          <span style={{ fontSize: '1.08em', fontWeight: 600, lineHeight: 1.4 }}>{card.text}</span>
        </Step>
      ))}
    </FlowContainer>
  </LearnSection>
);

export default WhatYouWillLearn;
