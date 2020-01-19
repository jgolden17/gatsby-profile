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
            <Heading size={4} style={{ textTransform: 'none' }}>{title}</Heading>
            <Heading
              subtitle={true}
              size={6}
              style={{ textTransform: 'none' }}
            >
              {packageName}
            </Heading>
            <p>{description}</p>
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
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  packageName: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};

export default GithubProject;
