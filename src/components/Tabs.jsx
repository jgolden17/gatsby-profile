import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Tabs as BulmaTabs } from 'react-bulma-components/dist';

function Tabs({ children }) {
  const [activeTab, setActiveTab] = useState('All');

  return (
    <React.Fragment>
      <BulmaTabs>
        <BulmaTabs.Tab
          active={activeTab === 'All'}
          onClick={() => setActiveTab('All')}
        >
          All
        </BulmaTabs.Tab>
        <BulmaTabs.Tab
          active={activeTab === 'JavaScript'}
          onClick={() => setActiveTab('JavaScript')}
        >
          JavaScript
        </BulmaTabs.Tab>
        <BulmaTabs.Tab
          active={activeTab === 'React'}
          onClick={() => setActiveTab('React')}
        >
          React
        </BulmaTabs.Tab>
        <BulmaTabs.Tab
          active={activeTab === 'Python'}
          onClick={() => setActiveTab('Python')}
        >
          Python
        </BulmaTabs.Tab>
      </BulmaTabs>
      {children(activeTab)}
    </React.Fragment>
  );
}

Tabs.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Tabs;
