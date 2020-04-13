import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Icon, Container, Button } from 'react-bulma-components/dist';
import useSocialLinks from '../hooks/useSocialLinks';

function getIcon(icon) {
  const parts = icon.split('-');

  if (parts.length > 1) {
    return parts;
  }

  return parts[0];
}

const Social = () => {
  const socialLinks = useSocialLinks();

  return (
    <Container style={{ marginTop: '2rem' }}>
      <p className="buttons is-hidden-mobile">
        {
          socialLinks.map((link) => (
            <Button
              renderAs="a"
              href={link.href}
              rel="author"
              title={link.title}
              className="is-primary"
            >
              <Icon>
                <FontAwesomeIcon icon={getIcon(link.icon)} />
              </Icon>
              <span>{link.name}</span>
            </Button>
          ))
        }
      </p>
      <p className="buttons is-hidden-tablet">
        {
          socialLinks.map((link) => (
            <Button
              renderAs="a"
              href={link.href}
              rel="author"
              title={link.title}
              className="is-primary is-medium is-fullwidth"
              style={{ marginTop: '1rem' }}
            >
              <Icon>
                <FontAwesomeIcon icon={getIcon(link.icon)} />
              </Icon>
              <span>{link.name}</span>
            </Button>
          ))
        }
      </p>
    </Container>
  );
};

export default Social;
