import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Project = ({
  title,
  description,
  packageName,
  language,
  role,
  url,
}) => (
  <article className="media container" style={{ padding: '1rem' }}>
    <figure className="media-left">
      <span className="icon is-large">
        <FontAwesomeIcon icon={['fab', 'github']} size="3x" />
      </span>
    </figure>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{title}</strong>
          <br />
          <small>{packageName}</small>
        </p>
        <p>{description}</p>
        <div className="level is-mobile">
          <div className="level-left">
            <span className="tag is-light level-item">{role}</span>
            <span className="tag is-light level-item">{language}</span>
          </div>
        </div>
        <a className="button is-primary is-outlined" href={url}>View on Github</a>
      </div>
    </div>
  </article>
);

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  packageName: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Project;
