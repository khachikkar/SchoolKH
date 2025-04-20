import React from 'react';
import styled from 'styled-components';

import logoImg from '../assets/logo.png';
import { teachers, contactEmail } from '../data/importantInfo.mjs';

const FooterSection = styled.footer`
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  padding: 2rem 2rem 0.5rem 2rem;
  font-size: 13px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const FooterRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 2rem;
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
  }
`;

const TeacherSocials = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

const TeacherSocialLinks = styled.div`
  display: flex;
  gap: 1.1rem;
  margin-bottom: 0.3rem;
  a {
    color: #fff;
    font-size: 1.5em;
    svg {
      fill: #fff;
      transition: transform 0.18s cubic-bezier(.4,2,.6,1), fill 0s;
    }
    &:hover svg {
      transform: scale(1.22);
    }
  }
`;

const LogoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
  img {
    width: 70px;
    height: auto;
    border-radius: 0.6rem;
    background: #fff;
    box-shadow: 0 2px 8px rgba(31,1,185,0.09);
  }
`;

const MadeWith = styled.div`
  text-align: center;
  color: #b0b0b0;
  font-size: 1em;
  margin-top: 1.7rem;
  letter-spacing: 0.01em;
`;


const Footer = () => (
  <FooterSection>
    <FooterRow>
      <TeacherSocials>
        {teachers.map((teacher, idx) => (
          <div key={idx} style={{marginBottom: '0.2em'}}>
            <span style={{fontWeight: 600, marginRight: 8}}>{teacher.name}:</span>
            <TeacherSocialLinks>
  <a href={teacher.linkedin} target="_blank" aria-label="LinkedIn" rel="noopener noreferrer">
    <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.88v1.23h.04c.4-.76 1.38-1.56 2.85-1.56 3.05 0 3.62 2.01 3.62 4.62v4.71z"/></svg>
  </a>
  <a href={teacher.behance} target="_blank" aria-label="Behance" rel="noopener noreferrer">
    <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M7.6 13.5c0-.7-.4-1.2-1.1-1.3.5-.2.9-.7.9-1.3 0-1.1-.8-1.4-1.7-1.4h-3.7v7.5h3.8c1.2 0 1.8-.7 1.8-1.6 0-.7-.4-1.2-1.1-1.3.6-.1 1.1-.7 1.1-1.6zm-2.8-1.6h1.3c.4 0 .7.2.7.6s-.3.6-.7.6h-1.3v-1.2zm1.3 4.1h-1.3v-1.3h1.4c.4 0 .7.2.7.7s-.3.6-.8.6zm12.2-2.2c-2.2 0-2.2 1.5-2.2 1.5h1c0-.1.1-.6 1.1-.6.7 0 1.1.2 1.1.7v.1h-1.5c-1.7 0-2.1 1.1-2.1 1.7 0 .9.7 1.7 2.2 1.7 1.8 0 2.1-1.1 2.1-1.7v-.4h-1v.2c0 .1-.1.6-1.1.6-.7 0-1.1-.2-1.1-.7v-.1h1.6c1.7 0 2.1-1.1 2.1-1.7 0-.9-.7-1.7-2.2-1.7zm-1.1 1.3c.1-.1.4-.5 1.1-.5.7 0 1.1.2 1.1.7v.1h-2.2zm-1.2-5.1h4.6v1.1h-4.6v-1.1zm-2.3 10.1c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10z"/></svg>
  </a>
  <a href={teacher.github} target="_blank" aria-label="GitHub" rel="noopener noreferrer">
    <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.304-.535-1.527.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.984-.399 3.003-.404 1.019.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.649.242 2.872.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z"/></svg>
  </a>
  <a href={teacher.facebook} target="_blank" aria-label="Facebook" rel="noopener noreferrer">
    <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.731 0-1.325.594-1.325 1.326v21.348c0 .73.594 1.326 1.325 1.326h11.495v-9.294h-3.124v-3.622h3.124v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24h-1.918c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12v9.294h6.116c.73 0 1.324-.596 1.324-1.326v-21.35c0-.732-.594-1.326-1.324-1.326z"/></svg>
  </a>
</TeacherSocialLinks>
          </div>
        ))}
      </TeacherSocials>
      <LogoWrap>
        <img src={logoImg} alt="Logo" />
      </LogoWrap>
    </FooterRow>
    <div style={{textAlign:'center',marginTop:'1.1em',marginBottom:'0.7em',fontSize:'1.13em'}}>
      Contact: <a href="mailto:info@trainingcourses.com" style={{color:'#6ba4ff',textDecoration:'underline'}}>info@trainingcourses.com</a>
    </div>
    <MadeWith>Made with AI with <span style={{color:'#ff4fa3',fontWeight:700}}>&lt;3</span></MadeWith>
    <div style={{textAlign:'center',marginTop:'1.2em',color:'#888',fontSize:'0.97em'}}>© {new Date().getFullYear()} Training Courses. All rights reserved.</div>
  </FooterSection>
);

export default Footer;
