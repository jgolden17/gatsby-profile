import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useSocialLinks from '../hooks/useSocialLinks';
import getIcon from '../utils/getIcon';

const Social = () => {
  const socialLinks = useSocialLinks();

  return (
    <p className="buttons">
      {
        socialLinks.map((link) => (
          <a
            key={link.title}
            className="button is-rounded"
            href={link.href}
            outlined={true}
            title={link.title}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <FontAwesomeIcon icon={getIcon(link.icon)} />
            </span>
            <span>{link.name}</span>
          </a>
        ))
      }
    </p>
  );
};

export default Social;
