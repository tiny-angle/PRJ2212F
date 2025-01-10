/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env`,
});

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL || "http://127.0.0.1:1337",
  collectionTypes: ["blog", "category", "author", "tag"],
};

module.exports = {
  siteMetadata: {
    title: `Using Gatsby Head`,
    description: `Example project for the Gatsby Head API`,
    twitterUsername: `@gatsbyjs`,
    image: `/gatsby-icon.png`,
    siteUrl: `${process.env.HOME_URL}`,
  },
  pathPrefix: "",
  plugins: [
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [`${process.env.GA_MEASUREMENT_ID}`],
        pluginConfig: {
          head: true,
          delayOnRouteUpdate: 0,
        },
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Open Sans`,
            file: `https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap`,
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: `${process.env.HOME_URL}`,
        sitemap: `${process.env.HOME_URL}/sitemap.xml`,
        policy: [{ userAgent: "*" }],
      },
    },
  ],
};
