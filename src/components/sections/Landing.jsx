import React from 'react';
import Iam from '../Iam';
import Social from '../Social';
import Header from '../Header';
import '../../sass/styles.scss';

const Landing = () => (
  <section id="home" className="hero is-fullheight is-dark">
    <div className="hero-head">
      <Header />
    </div>
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
