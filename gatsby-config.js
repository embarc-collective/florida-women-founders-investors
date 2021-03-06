const path = require(`path`);

module.exports = {
  pathPrefix: "/florida-women-founders-investors",
  siteMetadata: {
    title: `Florida Women Founders & Investors`,
    description: `A directory of Women Founders & Investors in Florida`,
    author: ``,
    primary_background_color: 'white',
    overscroll_background_color: '#89e1cf',
    primary_text_color: '#3b3836',
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Florida Women Founders & Investors`,
        short_name: `fl_women`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Montserrat', 'Nunito Sans:900']
        }
      }
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: `src/utils/typography`,
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
  ],
}
