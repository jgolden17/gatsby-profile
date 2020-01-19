import React from 'react';
import Layout from '../components/Layout';
import Landing from '../components/sections/Landing';
import Projects from '../components/sections/Projects';

import '../sass/styles.scss';

const Index = () => (
  <Layout>
    <Landing />
    <Projects />
  </Layout>
);

export default Index;
