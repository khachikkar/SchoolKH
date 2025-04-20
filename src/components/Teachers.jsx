import React, { useState } from 'react';
import styled from 'styled-components';

const TeachersSection = styled.section`
  background: ${({ $overlay }) => {
    if ($overlay === 'pink') return 'linear-gradient(120deg, rgba(255, 110, 180, 0.5), rgba(255,255,255,0.5))';
    if ($overlay === 'blue') return 'linear-gradient(120deg, rgba(0, 155, 255, 0.5), rgba(255,255,255,0.5))';
    return '#fff';
  }};
  color: ${({ theme }) => theme.colors.black};
  padding: 3rem 2rem 2.5rem 2rem;
  text-align: center;
  transition: background 0.35s cubic-bezier(.4,2,.5,1);
`;

const TeacherCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const Card = styled.div`
  background: rgba(255,255,255,0.5);
  color: #111;
  border-radius: 1rem;
  box-shadow: 0 8px 32px rgba(0,0,0,0.09);
  padding: 2rem 1.5rem 1.5rem 1.5rem;
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  border: 1.5px solid rgba(255,255,255,0.22);
`;

const TeacherImg = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 1rem 1rem 0 0;
  object-fit: cover;
  margin-bottom: 1.2rem;
`;

const TeacherName = styled.h2`
  font-size: 20px;
  margin-bottom: 0.5rem;
  color: #111;
`;

const TeacherRole = styled.div`
  font-size: 1rem;
  color: #2b5dff;
  margin-bottom: 0.5rem;
`;

const TeacherBio = styled.p`
  font-size: 1rem;
  color: #111;
`;

import { teachers } from '../data/importantInfo.mjs';

const SocialButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.2rem;
`;

const IconButton = styled.a`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.black};
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.electricBlue};
    border-radius: 50%;
    padding: 0.2rem;
  }
`;

const StartNowButton = styled.button`
  background: #fff;
  color: ${({ theme }) => theme.colors.electricBlue || '#1F01B9'};
  font-size: 1.1rem;
  padding: 0.9rem 2.4rem;
  border: 2px solid ${({ theme }) => theme.colors.electricBlue || '#1F01B9'};
  border-radius: 1.2rem;
  font-weight: 700;
  margin: 2.5rem auto 0 auto;
  display: flex;
  align-items: center;
  gap: 0.7em;
  box-shadow: 0 2px 12px rgba(31,1,185,0.07);
  cursor: pointer;
  transition: background 0.18s, color 0.18s, border 0.18s;
  &:hover {
    background: ${({ theme }) => theme.colors.electricBlue || '#1F01B9'};
    color: #fff;
    border-color: ${({ theme }) => theme.colors.electricBlue || '#1F01B9'};
  }
`;

import RegistrationForm from './RegistrationForm';

const Teachers = () => {
  const [hovered, setHovered] = useState(null);
  const [showForm, setShowForm] = useState(false);

  // Set overlay color based on hovered teacher gender
  let overlay = null;
  if (['Anna Smith', 'Vard Ohanyan'].includes(hovered)) overlay = 'pink'; // Female
  if (['David Lee', 'Khachik Karapetyan'].includes(hovered)) overlay = 'blue'; // Male

  return (
    <TeachersSection id="teachers" $overlay={overlay}>
      <h1>Meet Your Teachers</h1>
      <TeacherCards>
        {teachers.map((teacher, idx) => (
          <Card
            key={idx}
            onMouseEnter={() => setHovered(teacher.name)}
            onMouseLeave={() => setHovered(null)}
          >
            <TeacherImg src={teacher.image} alt={teacher.name} />
            <TeacherName>{teacher.name}</TeacherName>
            <TeacherRole>{teacher.role}</TeacherRole>
            <TeacherBio>{teacher.bio}</TeacherBio>
          </Card>
        ))}
      </TeacherCards>
      <StartNowButton onClick={() => setShowForm(true)}>
        Start Now <span style={{fontSize:'1.25em',marginLeft:'0.3em',display:'inline-block'}}>&rarr;</span>
      </StartNowButton>
      {showForm && (
        <RegistrationForm onClose={() => setShowForm(false)} />
      )}
    </TeachersSection>
  );
};

export default Teachers;
