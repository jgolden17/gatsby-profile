import React from 'react';
import PropTypes from 'prop-types';

const Iam = ({ a }) => (
  <h2 className="subtitle has-text-info" style={{ marginTop: 0, marginBottom: '1rem' }}>
    I am a
    <strong>{` ${a}`}</strong>
    .
  </h2>
);

Iam.propTypes = {
  a: PropTypes.string.isRequired,
};

export default Iam;
