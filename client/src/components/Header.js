import React from 'react';
import { NavLink } from 'react-router-dom';
// import img from '../../public/assets/images/sweetPhoto.jpg';
// <div className="header-img"><img className="img" src={img} alt={'alt'}/></div>
//

const Header = () => (
  <div className="Header">
    <div className="Header-Container">

      <div className="header-menu-icon"><img className="menu-icon" src="/images/menu-icon.png" alt="menu" /> </div>

      <nav className="header-nav">
        <NavLink to="/about" className="header-nav-navlink" activeClassName="header-nav-navlink-selected">About</NavLink>
        <NavLink to="/education" className="header-nav-navlink" activeClassName="header-nav-navlink-selected">Education</NavLink>
        <NavLink to="/works" className="header-nav-navlink" activeClassName="header-nav-navlink-selected">Works</NavLink>
        <NavLink to="/blog" className="header-nav-navlink" activeClassName="header-nav-navlink-selected">Blog</NavLink>
      </nav>
        
    </div>
  </div>
//
);

export default Header;
