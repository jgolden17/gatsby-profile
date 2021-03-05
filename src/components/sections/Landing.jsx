import React from 'react';
import Social from '../Social';
import '../../sass/styles.scss';

const Landing = () => (
  <section className="hero is-dark is-medium">
    <div className="hero-body flex flex-column flex-align-center flex-justify-center">
      <h1 className="title is-size-1-tablet is-size-3-mobile has-text-centered-mobile">
        Jonathan Golden
      </h1>
      <p className="subtitle is-4">Full Stack Developer</p>
      <Social />
    </div>
  </section>
);

export default Landing;
