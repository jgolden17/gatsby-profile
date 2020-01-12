import React from 'react';
import {
  Heading,
  Hero,
} from 'react-bulma-components/dist';
import Seo from '../Seo';
import Iam from '../Iam';
import Social from '../Social';
import '../../sass/styles.scss';

const Landing = () => (
  <Hero size="fullheight">
    <Seo title="Jonathan Golden Ormsby" />
    <Hero.Body>
      <div style={{ margin: 'auto' }}>
        <Heading
          title={true}
          size="2"
          renderAs="h1"
          className="has-text-info"
          style={{ marginBottom: '1rem' }}
        >
          Jonathan Golden Ormsby
        </Heading>
        <Iam a="Software Developer" />
        <Iam a="cyclist" />
        <Iam a="terrible musician" />
        <Social />
      </div>
    </Hero.Body>
  </Hero>
);

export default Landing;
