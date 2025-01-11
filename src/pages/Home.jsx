import React from 'react';
import Header from '../components/HeroSection/Header/Header.jsx';
import Intro from '../components/HeroSection/Intro/Intro.jsx';
import AboutSection from '../components/AboutSection/AboutSection.jsx';
import OurServices from '../components/ServiceSection/OurServices.jsx';
import OurProject from '../components/ProjectSection/OurProject.jsx';

import '../styles/Home.css';

const Home = () => {
  return (
    <>
      <div className='header-intro'>
        <Header/>
        <Intro/>
      </div>

      <AboutSection />
      <OurServices />
      <OurProject />
    </>
    
  )
}

export default Home
