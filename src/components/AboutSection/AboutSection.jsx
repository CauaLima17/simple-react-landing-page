import React from 'react';
import cityImage1 from '../../assets/img/city-1.jpg';
import cityImage2 from '../../assets/img/city-2.jpg';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <article className='about-us-bg'>
      <div className='about-us' id='about-us'>
        <div className='flex-item'>
          <img className='city-trip' src={cityImage1} alt="cidade-1"/>
          <h3 className='city-name'>Paris</h3>
        </div>

        <div className='flex-item'>
          <img className='city-trip' src={cityImage2} alt="cidade-1"/>
          <h3 className='city-name'>London</h3>
        </div>

          <section className='about flex-item'>
            <h1>Make a very nice trip!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab qui, nobis hic quisquam provident amet non deserunt, soluta consequuntur magni temporibus autem tempore distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button className='about-btn'>About Us</button>
          </section>
      </div>
    </article>
  )
}

export default AboutSection
