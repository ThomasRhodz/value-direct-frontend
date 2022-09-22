module.exports = {
  siteMetadata: {
    title: `Adwire`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
  "gatsby-plugin-top-layout",
  "gatsby-plugin-react-helmet",
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  },
  {
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [`Arvo`, `Raleway`, `Playfair Display`],
      display: "swap",
    },
  }, 

]
};