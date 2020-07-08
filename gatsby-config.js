const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Base Two',
    description: 'We Implement engaging websites and applications',
    url: 'https://www.base2.io',
    image: '/static/images/planet-earth.jpg',
    twitterUsername: '@base2io',
    keywords:
      'IT Consulting, Software Development, React Application Development, Software Engineer',
    ogimage: '',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-26131818-3',
        anonymize: true,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: path.join(__dirname, '_content'),
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: [`.mdx`, `.md`],
      },
      gatsbyRemarkPlugins: [
        {
          resolve: 'gatsby-remark-responsive-iframe',
          options: {
            wrapperStyle: 'margin-bottom: 1rem',
          },
        },
      ],
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Base Two',
        short_name: 'Base Two',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#000000',
        display: 'minimal-ui',
        icons: [
          {
            src: '/img/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/img/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    'gatsby-plugin-offline',
  ],
};
