module.exports = {
  url: process.env.URL || 'http://localhost:8080',
  siteName: 'Surprise',
  siteDescription:
    'Plant based mix',
  siteType: 'Business', // schema
  locale: 'it_IT',
  lang: 'it',
  skipContent: 'Vai ai contenuti',
  author: 'Lene Saile', // i.e. Lene Saile - author's name. Must be set.
  authorEmail: '', // i.e. hola@lenesaile.com - email of the author
  authorWebsite: '', // i.e. https.://www.lenesaile.com - the personal site of the author
  themeColor: '#DD4462', //  Manifest: defines the default theme color for the application
  themeBgColor: '#F3F3F3', // Manifest: defines a placeholder background color for the application page to display before its stylesheet is loaded
  meta_data: {
    opengraph_default: '/assets/images/opengraph-default.jpg', // fallback/default meta image
    opengraph_default_alt:
      'Plant based mix', // alt text for default meta image
    twitterSite: '', // i.e. @site - twitter profile of the site
    twitterCreator: '', // i.e. @author -  twitter profile of the site
    mastodonProfile: '' // i.e. https://front-end.social/@lene - url to your mastodon instance/profile
  },
  blog: {
    // this is for the rss feed
    name: 'Ricettario di Surprise Mix',
    description:
      'Con SURPRISE puoi preparare sostituti vegani della carne come burger, polpette e ripieni. Privo di allergeni.'
  },
  pagination: {
    itemsPerPage: 20
  },
  address: {
    // edit all presets or leave empty. They are being used in the pages for privacy.md and imprint.md
    firma: 'Prodotti Spiga srl',
    street: 'via Montebello, 27',
    city: 'Milano',
    state: 'Italy',
    zip: '20121',
    mobileDisplay: '+39 02 62086164',
    mobileCall: ' +390262086164',
    email: 'info@prodottispiga.it',
    cif: 'IT11967140150'
  },
  menu: {
    closedText: 'Menu'
  }
};
