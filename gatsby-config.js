module.exports = {
  pathPrefix: '/profile',
  siteMetadata: {
    title: 'Jonathan Golden Ormsby',
    description: 'I am a Software Developer at American Express',
    author: '@jgolden17',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/android-chrome-192x192.png',
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        includePaths: ['./src/sass'],
      },
    },
  ],
};
