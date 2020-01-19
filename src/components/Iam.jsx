import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from 'react-bulma-components/dist';

const Iam = ({ a }) => (
  <Heading
    subtitle={true}
    renderAs="h2"
    className="has-text-info"
    style={{ marginTop: 0, marginBottom: '1rem' }}
  >
    I am a
    <strong>{` ${a}`}</strong>
    .
  </Heading>
);

Iam.propTypes = {
  a: PropTypes.string.isRequired,
};

export default Iam;
