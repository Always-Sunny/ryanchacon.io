import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div className="Header">
    <div className="Header-Container">
        <div className="header-title">
            <h1><NavLink to="/" className="header-title-navlink">The Daily Vibe</NavLink></h1>
        </div>

        <div className="header-logo-img">

        </div>

        <nav className="header-nav">
          <NavLink to="/sign-up" className="header-nav-navlink" activeClassName="header-nav-navlink-selected">Sign Up</NavLink>
          <NavLink to="/login" className="header-nav-navlink" activeClassName="header-nav-navlink-selected">Login</NavLink>
        </nav>


    </div>
  </div>
//
);

export default Header;
