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

import { whatYouWillLearn } from '../data/importantInfo.mjs';

const WhatYouWillLearn = () => (
  <LearnSection id="learn">
    <h1>What You Will Learn</h1>
    <FlowContainer>
      {whatYouWillLearn.map((card, idx) => (
        <Step
          key={idx}
          initial={{ opacity: 0, x: idx % 2 === 0 ? -80 : 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: idx * 0.1 }}
        >
          <img src={card.image} alt={card.title} style={{width:'64px',height:'64px',objectFit:'contain',marginBottom:'1.2em'}} />
          <div style={{fontSize:'1.2em',fontWeight:600,marginBottom:'0.5em'}}>{card.title}</div>
          <div>{card.description}</div>
        </Step>
      ))}
    </FlowContainer>
  </LearnSection>
);

export default WhatYouWillLearn;
