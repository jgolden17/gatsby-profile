import React from 'react';

const Header = () => (
  <nav className="navbar">
    <div className="container">
      <div id="navbarMenu" className="navbar-menu">
        <div className="navbar-end">
          <a className="navbar-item">
            About
          </a>
          <a className="navbar-item">
            Experience
          </a>
          <a className="navbar-item">
            Projects
          </a>
          <a className="navbar-item">
            Contact
          </a>
          <a className="button is-info is-outlined" style={{ alignSelf: 'center' }}>
            Resume
          </a>
        </div>
      </div>
    </div>
  </nav>
);

export default Header;
