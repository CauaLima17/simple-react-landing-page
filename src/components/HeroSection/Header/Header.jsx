import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <h1 className='logo'><a href="/">Page Logo</a></h1>

      <nav aria-label='Navegação Principal'>
        <ul className='menu'>
          <li><a href="/" aria-current='page'>Home</a></li>
          <li><a href="#about-us">About</a></li>
          <li><a href="#our-services">Service</a></li>
          <li><a href="#our-project">Project</a></li>
          <li><a href="/">Blog</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
      </nav>

      <button className='register-btn'>Register</button>
    </header>
  )
}

export default Header
