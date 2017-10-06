import React from 'react';
import { NavLink } from 'react-router-dom';
// import headerLogo from '../../public/assets/images/ico.jpg';
// <img className="header-logo-img" src={headerLogo} alt={'alt'}/>


const Header = () => (
  <div className="Header">
    <div className="Header-Container">

      <nav className="header-nav">
        <NavLink to="/music" className="header-nav-navlink" activeClassName="header-nav-navlink-selected">About</NavLink>
        <NavLink to="/photos" className="header-nav-navlink" activeClassName="header-nav-navlink-selected">Education</NavLink>
        <NavLink to="/videos" className="header-nav-navlink" activeClassName="header-nav-navlink-selected">Hobbies</NavLink>
        <NavLink to="/articles" className="header-nav-navlink" activeClassName="header-nav-navlink-selected">Interests</NavLink>
      </nav>


    </div>
  </div>
//
);

export default Header;
