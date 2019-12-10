module.exports = {
  siteTitle: 'Nabil Farhan',
  siteDescription:
    'Nabil Farhan is a software engineer student based in Kuala Lumpur, Malaysia who specializes in developing (and occasionally designing) exceptional, high-quality websites and applications.',
  siteKeywords:
    'Nabil Farhan, Nabil, Farhan, nnabilfarhan, software engineer, front-end engineer, back-end engineer, web developer, javascript, kuala lumpur, mobile, developer, mobile developer',
  siteUrl: 'https://nabilfarhan.com',
  siteLanguage: 'en_US',

  googleVerification: 'u2H1Clscli7EKpXzh7Rcxfn8RLsYDaQs0FgrPQ7Hefg',

  name: 'Nabil Farhan',
  location: 'Kuala Lumpur, Malaysia',
  email: 'nnabilfarhan@gmail.com',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/nabilfarhann',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/nabil-farhan/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/nabilfarhann/',
    },
  ],

  nav: [
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'Experience',
      url: '#jobs',
    },
    {
      name: 'Work',
      url: '#projects',
    },
    {
      name: 'Contact',
      url: '#contact',
    },
  ],

  googleAnalyticsID: 'UA-154338619-1',

  headerHeight: 100,

  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => {
    return {
      origin: 'bottom',
      distance: '20px',
      duration: 500,
      delay,
      rotate: { x: 0, y: 0, z: 0 },
      opacity: 0,
      scale: 1,
      easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      mobile: true,
      reset: false,
      useDelay: 'always',
      viewFactor: 0.25,
      viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    };
  },
};
