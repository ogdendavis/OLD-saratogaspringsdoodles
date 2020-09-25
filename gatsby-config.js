module.exports = {
  siteMetadata: {
    title: `Moon Dogs`,
    description: `We make the best dogs ever. On the moon.`,
    author: `Lucas Ogden-Davis`,
    company: `Moon Dogs, LLC`,
    siteUrl: `https://musing-kilby-86c5ff.netlify.app/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Midwoofery Template 1`,
        short_name: `Woof`,
        start_url: `/`,
        background_color: `#008080`,
        theme_color: `#008080`,
        display: `minimal-ui`,
        icon: `src/cms/general/img/dog5.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-remark`,
    // Netlify CMS to manage content
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
        htmlTitle: `Admin: Moon Dogs`,
        htmlFavicon: `${__dirname}/src/images/dog5.png`,
      },
    },
    // Make gatsby aware of CMS content
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `dogs`,
        path: `${__dirname}/src/cms/dogs`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `litters`,
        path: `${__dirname}/src/cms/litters`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `general`,
        path: `${__dirname}/src/cms/general`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static`,
        path: `${__dirname}/static/img`,
      },
    },
    `gatsby-plugin-sitemap`,
    // Keep netlify plugin last
    `gatsby-plugin-netlify`,
  ],
};
