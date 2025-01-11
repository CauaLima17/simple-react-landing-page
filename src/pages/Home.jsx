import React from 'react';
import Header from '../components/HeroSection/Header/Header.jsx';
import Intro from '../components/HeroSection/Intro/Intro.jsx';
import AboutSection from '../components/AboutSection/AboutSection.jsx';
import OurServices from '../components/ServiceSection/OurServices.jsx';
import OurProject from '../components/ProjectSection/OurProject.jsx';
import Contact from '../components/ContactSection/Contact.jsx';
import Footer from '../components/Footer/Footer.jsx';

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
      <Contact />
      <Footer />
    </>
    
  )
}

export default Home
