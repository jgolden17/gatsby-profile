import React from 'react';
import Header from '../Header';
import Seo from '../Seo';
import Iam from '../Iam';
import '../../styles.scss';

const Landing = () => (
  <section className="hero is-fullheight">
    <Seo title="Jonathan Golden Ormsby" />
    <div className="hero-head">
      <Header />
    </div>
    <div className="hero-body">
     <div className="container">
        <h1 className="title is-1" style={{ marginBottom: '1rem' }}>Jonathan Golden Ormsby</h1>
        <Iam a="Software Developer" />
        <Iam a="cyclist" />
        <Iam a="terrible musician" />
        <a
          className="button is-info is-outlined is-medium"
          style={{ marginTop: '4rem' }}
          href="mailto:jonathan.golden.ormsby@gmail.com"
        >
          Contact Me
        </a>
      </div>
    </div>
  </section>
);

export default Landing;
