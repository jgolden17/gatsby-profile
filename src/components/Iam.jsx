import React from 'react';
import PropTypes from 'prop-types';

const Iam = ({ a }) => (
  <h2 className="subtitle" style={{ marginTop: 0, marginBottom: '1rem' }}>
    I am a <strong>{a}</strong>.
  </h2>
);

export default Iam;
