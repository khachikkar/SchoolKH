import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Courses from './components/Courses';
import WhatYouWillLearn from './components/WhatYouWillLearn';
import Teachers from './components/Teachers';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Courses />
      <WhatYouWillLearn />
      <Teachers />
      <Footer />
    </>
  );
}

export default App;
