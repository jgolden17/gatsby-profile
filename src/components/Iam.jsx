import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from 'react-bulma-components/dist';

const Iam = ({ a, an }) => (
  <Heading
    subtitle={true}
    renderAs="h3"
    style={{ marginTop: 0, marginBottom: '1rem' }}
  >
    {`I am ${a ? 'a' : 'an'} `}
    <strong>{`${a || an}`}</strong>
    .
  </Heading>
);

Iam.propTypes = {
  a: PropTypes.string,
  an: PropTypes.string,
};

Iam.defaultProps = {
  a: '',
  an: '',
};

export default Iam;
