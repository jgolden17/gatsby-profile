import React, { useState } from 'react';

const Header = () => {
  const [isActive, toggleHeader] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <span
            role="button"
            tabIndex={0}
            className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
            data-target="navbarMenuHeroA"
            onClick={() => toggleHeader(!isActive)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                toggleHeader(!isActive);
              }
            }}
          >
            <span />
            <span />
            <span />
          </span>
        </div>
        <div id="navbarMenuHeroA" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
          <div className="navbar-end">
            <a href="#projects" className="navbar-item">
              Projects
            </a>
            <a href="#experience" className="navbar-item">
              Experience
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
