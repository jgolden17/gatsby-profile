import { useState } from 'react';

function useTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return {
    activeTab,
    setActiveTab,
  };
}

export default useTabs;
