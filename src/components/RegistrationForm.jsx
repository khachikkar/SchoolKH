import React, { useState } from 'react';
import styled from 'styled-components';
import PersonIcon from './icons/PersonIcon';
import EmailIcon from './icons/EmailIcon';
import PhoneIcon from './icons/PhoneIcon';
import { courses } from '../data/importantInfo.mjs';
import emailjs from 'emailjs-com';

const Overlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  z-index: 1000;
`;

const Modal = styled.div`
  background: #fff;
  color: ${({ theme }) => theme.colors.black};
  border-radius: 1rem;
  padding: 2.2rem 2.2rem 1.7rem 2.2rem;
  width: 400px;
  max-width: 96vw;
  box-shadow: 0 4px 24px rgba(0,0,0,0.18);
  position: relative;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 1rem;
  right: 1.3rem;
  background: none;
  border: none;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.electricBlue};
  cursor: pointer;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  border: 1.5px solid #e0e0e0;
  border-radius: 8px;
  padding: 0.25rem 0.9rem;
  transition: border 0.18s;
  margin-bottom: 0.2rem;
  &:focus-within {
    border: 1.5px solid ${({ theme }) => theme.colors.electricBlue || '#1F01B9'};
  }
`;

const IconLeft = styled.span`
  display: flex;
  align-items: center;
  margin-right: 0.6em;
  svg {
    width: 1.15em;
    height: 1.15em;
  }
`;

const Input = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  font-size: 1.02rem;
  padding: 0.63rem 0;
  color: #232323;
`;

const Select = styled.select`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  font-size: 1.02rem;
  padding: 0.63rem 0;
  color: #232323;
`;

const SubmitBtn = styled.button`
  background: ${({ theme }) => theme.colors.electricBlue};
  color: #fff;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 999px;
  font-weight: bold;
  font-size: 1.1rem;
  margin-top: 0.5rem;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: ${({ theme }) => theme.colors.black};
    color: #fff;
    border: 2px solid ${({ theme }) => theme.colors.electricBlue};
  }
`;

const RegistrationForm = ({ course, onClose }) => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', course: course?.title || '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // EmailJS config (replace with your own IDs from emailjs.com dashboard)
    const SERVICE_ID = 'service_1xa4dbd';
    const TEMPLATE_ID = 'template_15lqq5a';
    const USER_ID = 'epbMqS-2RYpB_FFsQ'; // aka Public Key

    const templateParams = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      course: form.course,
      time: new Date().toLocaleString(),
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID);
      setSubmitted(true);
    } catch (err) {
      alert('There was an error sending your registration. Please try again or contact us directly.');
    }
  };


  return (
    <Overlay>
      <Modal>
        <CloseBtn onClick={onClose} aria-label="Close">×</CloseBtn>
        {submitted ? (
          <div>
            <h2>Thank you for registering!</h2>
            <p>We have received your information.</p>
          </div>
        ) : (
          <>
            <h2>Register for {course?.title || 'a Course'}</h2>
            <Form onSubmit={handleSubmit}>
              <InputWrapper>
                <IconLeft><PersonIcon /></IconLeft>
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </InputWrapper>
              <InputWrapper>
                <IconLeft><EmailIcon /></IconLeft>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </InputWrapper>
              <InputWrapper>
                <IconLeft><PhoneIcon /></IconLeft>
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Your Phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </InputWrapper>
              <InputWrapper>
                <Select
                  name="course"
                  value={form.course}
                  onChange={handleChange}
                  required
                  disabled={!!course}
                >
                  <option value="">Select a course</option>
                  {courses && courses.map((c, idx) => (
                    <option key={idx} value={c.title}>{c.title}</option>
                  ))}
                </Select>
              </InputWrapper>
              <SubmitBtn type="submit">Submit</SubmitBtn>
            </Form>
          </>
        )}
      </Modal>
    </Overlay>
  );
};

export default RegistrationForm;
