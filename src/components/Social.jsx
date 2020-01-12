import React from 'react';

const Social = () => (
  <div className="container" style={{ marginTop: '2rem' }}>
    <p className="buttons">
      <a href="mailto:jonathan.golden.ormsby@gmail.com" className="button is-outlined is-info">
        <span className="icon">
          <i className="email" />
        </span>
        <span>Email</span>
      </a>
      <a href="https://github.com/jgolden17" className="button is-outlined is-info">
        <span className="icon">
          <i className="github" />
        </span>
        <span>GitHub</span>
      </a>
      <a href="https://www.linkedin.com/in/jonathan-golden-ormsby" className="button is-outlined is-info">
        <span className="icon">
          <i className="linkedin" />
        </span>
        <span>LinkedIn</span>
      </a>
      <a href="https://www.strava.com/athletes/40062660" className="button is-outlined is-info">
        <span className="icon">
          <i className="strava" />
        </span>
        <span>Strava</span>
      </a>
    </p>
  </div>
);

export default Social;
