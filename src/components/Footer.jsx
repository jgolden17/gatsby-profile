import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="content has-text-centered">
      <p>
        {`© ${new Date().getFullYear()} by Jonathan Golden`}
      </p>
    </div>
  </footer>
);

export default Footer;
