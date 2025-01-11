import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <h1 className='logo'><a href="/">Page Logo</a></h1>

      <nav>
        <ul className='menu'>
          <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Service</a></li>
          <li><a href="/">Project</a></li>
          <li><a href="/">Blog</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
      </nav>

      <button className='register-btn'>Register</button>
    </header>
  )
}

export default Header
