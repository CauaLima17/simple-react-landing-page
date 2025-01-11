import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer-bg'>
      <div className='footer-content'>
        <div className='departments'>
          <h3>Department</h3>
          <ul>
            <li><a href="/">Planejamento e Operações</a></li>
            <li><a href="/">Atendimento ao Cliente</a></li>
            <li><a href="/">Parcerias e Expansão</a></li>
          </ul>
        </div>

        <div className='others'>
          <h3>Others Services</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium ab, dolor nobis repellat deserunt impedit cupiditate omnis voluptas neque. Natus odio consequatur sequi!</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. consequatur unde maxime laborum ipsam sit consectetur ducimus omnis commodi.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. beatae similique necessitatibus animi odit consequatur unde maxime laborum ipsam sit consectetur ducimus omnis commodi.</p>
        </div>

        <p className='copyright'>Copyright© 2025, Template</p>
      </div>
    </footer>
  )
}

export default Footer
