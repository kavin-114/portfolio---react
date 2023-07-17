import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';
import headerImg from './header.png'

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h3>Hello I'm</h3>
        <h1 className='fw-bold'>Kavin S</h1>
        <h4 className="text-light">Certified Full-stack Developer</h4>
        <CTA />
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
