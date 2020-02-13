import React from 'react';

const ProjectTab = ({ isActive, label, onClick }) => (
  <li className={isActive ? 'is-active' : ''}>
    <a tabIndex={0} onClick={onClick}>{label}</a>
  </li>
);

export default ProjectTab;
