let config = {
  title: 'SW_P',
  author: 'BTTB66',
  description: "Developer SW",
  siteUrl: 'https://bttb66.github.io',

  // header config
  titleLogo: () => {
    return require('./src/images/aa.jpg');
  },
  titleLogoShow: true,
  bio: 'Developer SW',
  bioShow: true,

  // addtional
  googleAnalyticsTrackingId: 'UA-130252305-1',
  disqusShortname: 'sw-p',
};

/********************************************** */

if (process.env.NODE_ENV === 'development') {
  config.googleAnalyticsTrackingId = '';
  config.disqusShortname = '';
}

module.exports = config;



