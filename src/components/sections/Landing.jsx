import React from 'react';
import Seo from '../Seo';
import Iam from '../Iam';
import Social from '../Social';
import '../../sass/styles.scss';

const Landing = () => (
  <section className="hero is-fullheight is-dark">
    <Seo />
    <div className="hero-body">
      <div className="container">
        <h1 className="title is-size-1">
          Jonathan Golden
        </h1>
        <Iam a="cyclist" />
        <Iam a="musician" />
        <Iam a="software developer" />
        <Social />
      </div>
    </div>
  </section>
);

export default Landing;
