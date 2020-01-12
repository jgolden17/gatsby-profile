import React from 'react';
import PropTypes from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope  } from '@fortawesome/free-solid-svg-icons'
import './layout.css';
import '../sass/styles.scss';

library.add(fab, faEnvelope);

const Layout = ({ children }) => (
  <React.Fragment>
    <main className="is-family-monospace">{children}</main>
  </React.Fragment>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
