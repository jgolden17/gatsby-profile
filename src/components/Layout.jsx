import React from 'react';
import PropTypes from 'prop-types';
import './layout.css';
import '../sass/styles.scss';

const Layout = ({ children }) => (
  <React.Fragment>
    <main className="is-family-monospace">{children}</main>
  </React.Fragment>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
