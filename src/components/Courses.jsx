import React from 'react';
import styled from 'styled-components';
import RegistrationForm from './RegistrationForm';

const CoursesSection = styled.section`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  padding: 3rem 2rem;
  text-align: center;
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 1rem;
  box-shadow: 0 8px 32px rgba(0,0,0,0.15);
  padding: 2rem 1.5rem 1.5rem 1.5rem;
  width: 320px;
  height: 400px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CourseImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin-bottom: 1.2rem;
`;

const CourseTitle = styled.h2`
  color: ${({ theme }) => theme.colors.electricBlue};
  font-size: 20px;
  margin-bottom: 0.7rem;
`;

const Price = styled.div`
  background: ${({ theme }) => theme.colors.electricBlue};
  color: ${({ theme }) => theme.colors.black};
  display: inline-block;
  padding: 0.4rem 1.1rem;
  border-radius: 999px;
  font-weight: bold;
  margin: 1rem 0;
`;

const RegisterButton = styled.button`
  background: ${({ theme }) => theme.colors.electricBlue};
  color: ${({ theme }) => theme.colors.black};
  border: none;
  padding: 0.7rem 1.5rem;
  border-radius: 999px;
  font-weight: bold;
  font-size: 1.1rem;
  margin-top: 1rem;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.electricBlue};
    border: 2px solid ${({ theme }) => theme.colors.electricBlue};
  }
`;

import aiToolsIcon from '../assets/ai-tools-icon.png';
import uiuxIcon from '../assets/uiux-icon.png';

const courses = [
  {
    title: 'Introduction to AI tools',
    description: 'Discover the latest AI tools and how to use them effectively in various domains.',
    price: '$299',
    image: aiToolsIcon,
  },
  {
    title: 'UI/UX and Design',
    description: 'Learn the foundations of user interface and experience design for web and mobile.',
    price: '$199',
    image: uiuxIcon,
  },
];

const Courses = () => {
  const [showForm, setShowForm] = React.useState(false);
  const [selectedCourse, setSelectedCourse] = React.useState(null);

  const handleRegister = (course) => {
    setSelectedCourse(course);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setSelectedCourse(null);
  };

  return (
    <CoursesSection id="courses">
      <h1>Our Courses</h1>
      <Cards>
        {courses.map((course, idx) => (
          <Card key={idx}>
            <CourseImage src={course.image} alt={course.title + ' icon'} />
            <CourseTitle>{course.title}</CourseTitle>
            <p style={{ fontSize: '16px' }}>{course.description}</p>
            <Price>{course.price}</Price>
            <RegisterButton onClick={() => handleRegister(course)}>
              Register
            </RegisterButton>
          </Card>
        ))}
      </Cards>
      {showForm && (
        <RegistrationForm course={selectedCourse} onClose={handleCloseForm} />
      )}
    </CoursesSection>
  );
};

export default Courses;
