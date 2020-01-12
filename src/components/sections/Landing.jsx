import React from 'react';
import Seo from '../Seo';
import Iam from '../Iam';
import Social from '../Social';
import '../../sass/styles.scss';

const Landing = () => (
  <section className="hero is-fullheight">
    <Seo title="Profile" />
    <div className="hero-body">
      <div className="container">
        <h1 className="title is-1 has-text-info" style={{ marginBottom: '1rem' }}>
          Jonathan Golden Ormsby
        </h1>
        <Iam a="Software Developer" />
        <Iam a="cyclist" />
        <Iam a="terrible musician" />
        <Social />
      </div>
    </div>
  </section>
);

export default Landing;
