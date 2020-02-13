import React from 'react';

const Footer = () => (
  <footer className="hero is-dark">
    <div className="hero-body">
      <div className="container">
        <div className="has-text-centered">
          <small>{`Copyright © ${new Date().getFullYear()}, Jonathan Golden`}</small>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
