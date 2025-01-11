import React from 'react';
import profileImg1 from '../../assets/img/profile1.jpg';
import profileImg2 from '../../assets/img/profile2.jpg';
import profileImg3 from '../../assets/img/profile3.jpg';
import profileImg4 from '../../assets/img/profile4.jpg';

import './Contact.css'

const contacts = [
  {
    img: profileImg1,
    contactName: 'Laura Love',
  },
  {
    img: profileImg2,
    contactName: 'Alex William',
  },
  {
    img: profileImg3,
    contactName: 'Bruna Alec',
  },
  {
    img: profileImg4,
    contactName: 'Victoria Cherry',
  },
]

const Contact = () => {
  return (
    <article className='our-contact' id='our-contact'>
      <h1>Our Contacts</h1>

      <div className='contacts'>
      {contacts.map(({img, contactName}) => (
              <div className='contact' key={img}>
                <div>
                  <img src={img}/>
                </div>

                <h3>{contactName}</h3>
                <p className='contact-email'>example@example.com</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi fugit explicabo provident soluta a in vel incidunt delectus.</p>
              </div>
            ))}
      </div>
    </article>
  )
}

export default Contact
