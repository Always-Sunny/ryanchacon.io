import React from 'react';
import { NavLink } from 'react-router-dom';
// import headerLogo from '../../public/assets/images/ico.jpg';
// <img className="header-logo-img" src={headerLogo} alt={'alt'}/>

const Header = () => (
  <div className="Header">
    <div className="Header-Container">

      <div className="header-title">
        <h1><NavLink to="/" className="header-title-navlink header-title-text">ryanchacon</NavLink></h1>
      </div>

      <nav className="header-nav">
        <NavLink to="/about" className="header-nav-navlink" activeClassName="header-nav-navlink-selected">About</NavLink>
        <NavLink to="/education" className="header-nav-navlink" activeClassName="header-nav-navlink-selected">Education</NavLink>
        <NavLink to="/hobbies" className="header-nav-navlink" activeClassName="header-nav-navlink-selected">Hobbies</NavLink>
        <NavLink to="/interests" className="header-nav-navlink" activeClassName="header-nav-navlink-selected">Interests</NavLink>
      </nav>


    </div>
  </div>
//
);

export default Header;
