import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({
  icon,
  service,
  description
}) => {
  return (
    <div className='service-card'>
      <div>
        <img src={icon} alt="" />
      </div>

      <h3>{service}</h3>
      <p>{description}</p>

      <a href="/">More</a>
    </div>
  )
}

export default ServiceCard
