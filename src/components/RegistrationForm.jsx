import React, { useState } from 'react';
import styled from 'styled-components';

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
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  border-radius: 1rem;
  padding: 2rem 2.2rem 1.5rem 2.2rem;
  min-width: 330px;
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

const Input = styled.input`
  padding: 0.7rem 1rem;
  border: 1.5px solid ${({ theme }) => theme.colors.electricBlue};
  border-radius: 8px;
  font-size: 1rem;
`;

const SubmitBtn = styled.button`
  background: ${({ theme }) => theme.colors.electricBlue};
  color: ${({ theme }) => theme.colors.black};
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 999px;
  font-weight: bold;
  font-size: 1.1rem;
  margin-top: 0.5rem;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.electricBlue};
    border: 2px solid ${({ theme }) => theme.colors.electricBlue};
  }
`;

const RegistrationForm = ({ course, onClose }) => {
  const [form, setForm] = useState({ name: '', email: '', course: course?.title || '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    // Here you can add backend logic or localStorage as needed
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
              <Input
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <Input
                name="email"
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <Input
                name="course"
                placeholder="Course Title"
                value={form.course}
                onChange={handleChange}
                required
                readOnly={!!course}
              />
              <SubmitBtn type="submit">Submit</SubmitBtn>
            </Form>
          </>
        )}
      </Modal>
    </Overlay>
  );
};

export default RegistrationForm;
