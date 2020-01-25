import React from 'react';
import PropTypes from 'prop-types';
import {
  Heading,
  Card,
  Media,
  Icon,
  Content,
  Level,
} from 'react-bulma-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Project = ({
  title,
  description,
  packageName,
  language,
  role,
  url,
}) => {

  return (
    <Card style={{ marginBottom: '1rem' }}>
      <Card.Content>
        <Media renderAs="article">
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
            </Content>
            <Content>
              <p>{description}</p>
            </Content>
            <div className="">
              <p className="">
                <span className="">
                  {language}
                </span>
              </p>
              <p className="">
                <span className="">
                  {role}
                </span>
              </p>
              <a className="">
                <span className="">
                  View on Github
                </span>
              </a>
            </div>
          </Media.Item>
        </Media>
      </Card.Content>
    </Card>
  );
};

export default Project;
