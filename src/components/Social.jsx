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
      <p className="buttons">
        {
          socialLinks.map((link) => (
            <Button
              renderAs="a"
              href={link.href}
              outlined={true}
              color="info"
              rel="author"
              title={link.title}
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
