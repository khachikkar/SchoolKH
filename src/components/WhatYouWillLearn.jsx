import React from 'react';
import styled from 'styled-components';

const LearnSection = styled.section`
  background: ${({ theme }) => theme.colors.electricBlue};
  color: ${({ theme }) => theme.colors.white};
  padding: 3rem 2rem 2.5rem 2rem;
  text-align: center;
`;

const FlowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 0;
  margin-top: 2.8rem;
  overflow-x: auto;
`;

const Step = styled.div`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.electricBlue};
  border-radius: 1.2rem;
  min-width: 210px;
  max-width: 240px;
  padding: 1.2rem 1rem 1.2rem 1rem;
  margin: 0 0.5rem;
  font-size: 16px;
  font-weight: 500;
  box-shadow: 0 4px 18px rgba(31,1,185,0.07);
  position: relative;
  z-index: 1;
`;

const Arrow = styled.div`
  display: flex;
  align-items: center;
  margin: 0 -10px;
  z-index: 0;
`;

const ArrowSvg = () => (
  <svg width="60" height="40" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 35 C25 5, 35 35, 55 5" stroke="#1F01B9" strokeWidth="4" fill="none" markerEnd="url(#arrowhead)"/>
    <defs>
      <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="8" refY="4" orient="auto" markerUnits="strokeWidth">
        <polygon points="0 0, 8 4, 0 8" fill="#1F01B9" />
      </marker>
    </defs>
  </svg>
);

const steps = [
  'Build responsive and modern web applications from scratch',
  'Master the fundamentals of React and Node.js',
  'Develop digital marketing strategies for real-world impact',
  'Collaborate with expert instructors and peers',
  'Access to exclusive learning materials and community',
];

const WhatYouWillLearn = () => (
  <LearnSection id="learn">
    <h1 style={{ color: '#fff', fontWeight: 700 }}>What You Will Learn</h1>
    <FlowContainer>
      {steps.map((step, idx) => (
        <React.Fragment key={idx}>
          <Step>{step}</Step>
          {idx < steps.length - 1 && (
            <Arrow>
              <ArrowSvg />
            </Arrow>
          )}
        </React.Fragment>
      ))}
    </FlowContainer>
  </LearnSection>
);

export default WhatYouWillLearn;
