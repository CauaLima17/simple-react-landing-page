import React from 'react';
import travelImg01 from '../../assets/img/travel-4.jpg';
import travelImg02 from '../../assets/img/travel-5.jpg';
import travelImg03 from '../../assets/img/travel-6.jpg';
import travelImg04 from '../../assets/img/travel-2.jpg';

import './OurProject.css'

const photos = [
  {
    travelImg: travelImg01,
    alt: 'Visão aérea de uma viagem'
  },
  {
    travelImg: travelImg02,
    alt: 'Visão aérea de uma viagem'
  },
  {
    travelImg: travelImg03,
    alt: 'Visão aérea de uma viagem'
  },
  {
    travelImg: travelImg04,
    alt: 'Visão aérea de uma viagem'
  }
]

const OurProject = () => {
  return (
    <article className='our-project-bg' id='our-project'>
      <div className="our-project">
        <div className='project-header'>
          <h1>Our Project</h1>
          <a href="/">More &gt;&gt;</a>
        </div>

        <div className='project'>
          {photos.map(({ travelImg, alt }) => (
            <div key={travelImg} className='project-image-container'>
              <img src={travelImg} alt={alt} />
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}

export default OurProject
