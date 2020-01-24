import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Landing from '../components/sections/Landing';
import Projects from '../components/sections/Projects';
import '../sass/styles.scss';

const Index = () => (
  <Layout>
    <Seo
      title="Jonathan Ormsby | Software Engineer"
      description="Software Engineer at American Express"
    />
    <Landing />
    <Projects />
  </Layout>
);

export default Index;
