import React from 'react';
import { NavLink } from 'react-router-dom';
import headerLogo from '../../public/assets/images/ico.jpg';

const Header = () => (
  <div className="Header">
    <div className="Header-Container">

      <div className="header-title">
        <img className="header-logo-img" src={headerLogo} alt={'alt'}/>
        <h1><NavLink to="/" className="header-title-navlink header-title-text">TheDailyVibe</NavLink></h1>
      </div>


      <nav className="header-nav">
        <NavLink to="/music" className="header-nav-navlink" activeClassName="header-nav-navlink-selected">Music</NavLink>
        <NavLink to="/photos" className="header-nav-navlink" activeClassName="header-nav-navlink-selected">Photos</NavLink>
        <NavLink to="/video" className="header-nav-navlink" activeClassName="header-nav-navlink-selected">Video</NavLink>
        <NavLink to="/articles" className="header-nav-navlink" activeClassName="header-nav-navlink-selected">Articles</NavLink>
      </nav>

      <div className="header-nav-profile">
        <NavLink to="/login" className="header-nav-profile-navlink" activeClassName="header-nav-profile-navlink-selected">Login</NavLink>
      </div>
    </div>
  </div>
//
);

export default Header;
