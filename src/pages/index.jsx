import React from 'react';
import smoothSroll from 'smooth-scroll';
import { useStaticQuery, graphql } from 'gatsby';
import SEO from '@americanexpress/react-seo';
import Layout from '../components/Layout';
import Landing from '../components/sections/Landing';
import Projects from '../components/sections/Projects';
import Timeline from '../components/sections/Timeline';
import Footer from '../components/sections/Footer';
import '../sass/styles.scss';

if (typeof window !== 'undefined') {
  smoothSroll('a[href*="#"]');
}

function Profile() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            googleSiteVerification
          }
        }
      }
    `
  );

  const { siteMetadata } = site;

  return (
    <Layout>
      <SEO
        title={siteMetadata.title}
        description={siteMetadata.description}
        author={siteMetadata.author}
        keywords={[
          'software developer',
          'software engineer',
          '@americanexpress',
          'strava',
          'github',
          'react',
          'node',
          'javascript',
        ]}
        meta={[
          {
            name: 'google-site-verification',
            content: siteMetadata.googleSiteVerification,
          },
        ]}
      />
      <Landing />
      <Projects />
      <Timeline />
      <Footer />
    </Layout>
  );
}

export default Profile;
