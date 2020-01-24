import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Landing from '../components/sections/Landing';
import Projects from '../components/sections/Projects';
import '../sass/styles.scss';

const Index = () => (
  <Layout>
    <Seo />
    <Landing />
    <Projects />
  </Layout>
);

export default Index;
