module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    title: 'Jonathan Ormsby - Software Engineer',
    description: 'Software Developer at American Express',
    author: '@jgolden17',
    googleSiteVerification: 'YM65urxVqPi5q3nXVGbzeu8g8zKcGtxb6_qBq_20eng',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        includePaths: ['./src/sass'],
      },
    },
  ],
};
