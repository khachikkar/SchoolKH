import React from 'react';
import styled from 'styled-components';
import RegistrationForm from './RegistrationForm';

// Checklist styles
const CheckList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0.5rem 0 0 0;
  text-align: left;
`;

const CheckItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 6px;
  font-size: 15px;
  color: #222;
  font-weight: 500;
  &:last-child { margin-bottom: 0; }
`;

const CheckIcon = styled.svg`
  margin-right: 7px;
  flex-shrink: 0;
`;

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
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  border-radius: 1.5rem;
  box-shadow: 0 8px 32px rgba(0,0,0,0.10);
  padding: 20px;
  width: 320px;
  // height: 400px;
  // display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  overflow: hidden;
`;

const CardHeader = styled.div`
  margin-bottom: 20px;
`;

const CourseTitle = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 2px 0;
  text-align: left;
`;

const CourseCategory = styled.div`
  color: #888;
  font-size: 13px;
  margin-bottom: 0.6rem;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 1rem;
  background: #f3f3fb;
  margin-bottom: 0.8rem;
  overflow: hidden;
  position: relative;
  /* display: flex; align-items: flex-end; justify-content: flex-start; removed */
  &:hover .image-overlay {
    opacity: 1;
  }
  &:hover .price-on-image {
    font-size: 34px;
    transition: font-size 0.2s;
  }
  &:hover img.course-img {
    transform: scale(1.07);
    transition: transform 0.25s cubic-bezier(0.4,0,0.2,1);
  }
`;

const CourseImage = styled.img.attrs({ className: 'course-img xRaPv' })`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  z-index: 1;
  transition: transform 0.25s cubic-bezier(0.4,0,0.2,1);
`;

const ImageOverlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 300px;
  background: rgba(0,0,0,0.2);
  opacity: 0;
  transition: opacity 0.2s;
  z-index: 2;
`;

const PriceOnImage = styled.div`
  position: absolute;
  left: 18px;
  bottom: 18px;
  color: #fff;
  font-size: 28px;
  font-weight: 700;
  z-index: 3;
  transition: font-size 0.2s;
  pointer-events: none;
`;

const CourseDescription = styled.p`
  font-size: 16px;
  color: #444;
  margin: 0 0 6px 0;
  text-align: left;
`;

const CardFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 0 1.2rem 1.2rem 1.2rem;
`;

const Price = styled.div`
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.electricBlue};
  font-size: 28px;
  font-weight: 600;
  border-radius: 0.7rem;
  padding: 0.2rem 1.1rem 0.2rem 1.1rem;
  box-shadow: 0 2px 8px rgba(31,1,185,0.08);
`;

const ArrowButton = styled.button`
  background: #fff;
  border: none;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(31,1,185,0.09);
  cursor: pointer;
  transition: background 0.2s;
  font-size: 1.4rem;
  padding: 0;
  z-index: 1000;
  &:hover {
    background: #111;
    svg path {
      stroke: #fff;
    }
  }
  svg path {
    stroke: ${({ theme }) => theme.colors.electricBlue};
    transition: stroke 0.2s;
  }
`;

import aiToolsIcon from '../assets/ai-tools-icon.png';
import uiuxIcon from '../assets/uiux-icon.png';

const courses = [
  {
    title: 'Introduction to AI tools',
    description: 'For Kids',
    price: '$299',
    image: aiToolsIcon,
    points: [
      'Hands-on with ChatGPT, Midjourney, and more',
      'Real-world automation projects',
      'Prompt engineering basics',
      'Ethical use of AI tools'
    ],
  },
  {
    title: 'UI/UX and Design',
    description: 'For Adults',
    price: '$199',
    image: uiuxIcon,
    points: [
      'Wireframing & prototyping',
      'Figma & Adobe XD workflows',
      'User journey mapping',
      'Modern design trends'
    ],
  },
{
    title: 'SEO',
    description: 'For kids',
    price: '$199',
    image: uiuxIcon,
    points: [
      'Wireframing & prototyping',
      'Figma & Adobe XD workflows',
      'User journey mapping',
      'Modern design trends'
    ],
  },];

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
            <CardHeader>
              <CourseTitle>{course.title}</CourseTitle>
              <CourseCategory>Course</CourseCategory>
            </CardHeader>
            <p style={{ fontSize: '16px' }}>{course.description}</p>
            <ImageWrapper>
              <CourseImage src={course.image} alt={course.title + ' icon'} />
              <ImageOverlay className="image-overlay" />
              <PriceOnImage className="price-on-image">{course.price}</PriceOnImage>
            </ImageWrapper>
            <div style={{ width: '100%', margin: '12px 0 0 0', flex: '0 0 auto' }}>
              <CheckList>
                {course.points && course.points.map((point, i) => (
                  <CheckItem key={i}>
                    <CheckIcon viewBox="0 0 20 20" width="18" height="18">
                      <polyline points="4,11 8,15 16,6" fill="none" stroke="#1F01B9" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </CheckIcon>
                    <span>{point}</span>
                  </CheckItem>
                ))}
              </CheckList>
            </div>
            <CardFooter>
              <div />
              <ArrowButton onClick={() => handleRegister(course)} aria-label="Register">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                  <path d="M8 18L18 8" strokeWidth="2.6" strokeLinecap="round"/>
                  <path d="M8 8h10v10" strokeWidth="2.6" strokeLinecap="round"/>
                </svg>
              </ArrowButton>
            </CardFooter>
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
