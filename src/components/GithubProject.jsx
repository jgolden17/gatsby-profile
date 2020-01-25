import React from 'react';
import PropTypes from 'prop-types';
import {
  Heading,
  Card,
  Media,
  Icon,
  Content,
  Level,
} from 'react-bulma-components/dist';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GithubProject = ({
  title,
  description,
  packageName,
  language,
  role,
  url,
}) => (
  <Card style={{ marginBottom: '1rem' }}>
    <Card.Content>
      <Media>
        <Media.Item renderAs="figure" position="left">
          <Icon className="is-large">
            <FontAwesomeIcon icon={['fab', 'github']} size="3x" />
          </Icon>
        </Media.Item>
        <Media.Item>
          <Content>
            <a
              href={url}
              title={`View ${title} on Github`}
              rel="external"
              className="title is-4"
            >
              {title}
            </a>
            <p className="mt">{description}</p>
          </Content>
          <Level breakpoint="mobile">
            <Level.Side align="left">
              <FontAwesomeIcon icon={['fal', 'code']} />
              <span>{language}</span>
            </Level.Side>
          </Level>
        </Media.Item>
        <Media.Item position="right">
          {role}
        </Media.Item>
      </Media>
    </Card.Content>
  </Card>
);

GithubProject.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  packageName: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};

export default GithubProject;
