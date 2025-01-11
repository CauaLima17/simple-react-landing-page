import React from 'react';
import ServiceCard from './ServiceCard.jsx';

import './OurServices.css'

import ico1 from '../../assets/icons/familly.svg';
import ico2 from '../../assets/icons/flight.svg';
import ico3 from '../../assets/icons/house.svg';
import ico4 from '../../assets/icons/money.svg';

const services = [
  {
    icon: ico1,
    service: 'Lorem ipsum',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam vel dicta commodi omnis laboriosam similique consequatur sunt modi cum, corrupti saepe maiores quae ad nesciunt fugiat eum. Atque, veritatis ad.'
  },
  {
    icon: ico2,
    service: 'Lorem ipsum',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam vel dicta commodi omnis laboriosam similique consequatur sunt modi cum, corrupti saepe maiores quae ad nesciunt fugiat eum. Atque, veritatis ad.'
  },
  {
    icon: ico3,
    service: 'Lorem ipsum',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam vel dicta commodi omnis laboriosam similique consequatur sunt modi cum, corrupti saepe maiores quae ad nesciunt fugiat eum. Atque, veritatis ad.'
  },
  {
    icon: ico4,
    service: 'Lorem ipsum',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam vel dicta commodi omnis laboriosam similique consequatur sunt modi cum, corrupti saepe maiores quae ad nesciunt fugiat eum. Atque, veritatis ad.'
  }
]

const OurServices = () => {
  return (
    <article className='our-services' id='our-services'>
      <h1>Service</h1>
      <div>
        {services.map((service) => (
          <ServiceCard {...service}/>
        ))}
      </div>
    </article>
  )
}

export default OurServices
