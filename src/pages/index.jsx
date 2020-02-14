import React from 'react';
import smoothSroll from 'smooth-scroll';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Landing from '../components/sections/Landing';
import Projects from '../components/sections/Projects';
import Timeline from '../components/sections/Timeline';
import Footer from '../components/sections/Footer';
import '../sass/styles.scss';

if (typeof window !== 'undefined') {
  smoothSroll('a[href*="#"]');
}

const Index = () => (
  <Layout>
    <Seo />
    <Landing />
    <Projects />
    <Timeline />
    <Footer />
  </Layout>
);

export default Index;
