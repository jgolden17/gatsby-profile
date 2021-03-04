import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => (
  <nav className="navbar">
    <div className="container">
      <div className="navbar-brand">
        <button type="button" className="navbar-item" />
        <span className="navbar-burger" data-target="navbar-menu">
          <span />
          <span />
          <span />
        </span>
      </div>
    </div>
    <div id="navbar-menu" className="navbar-menu">
      <div className="navbar-end">
        <span className="navbar-item">
          <a href="" className="button is-primary">
            <span className="icon">
              <FontAwesomeIcon icon={['fa', 'file-alt']} />
            </span>
            <span>Resume</span>
          </a>
        </span>
      </div>
    </div>
  </nav>
);

export default Header;
