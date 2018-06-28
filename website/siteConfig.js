/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: 'User1',
    image: '/test-site/img/docusaurus.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Partner Open Community' /* title for your website */,
  tagline: 'Comunidade para parceiros IBM',
  url: 'https://ibmpartners.github.io/' /* your website url */,
  baseUrl: '/' /* base url for your project */,
  projectName: '',
  headerLinks: [
    {doc: 'icp-ofer-01', label: 'Ofertas'},
    {doc: 'icp-prod-01', label: 'Produtos'},
    {page: 'help', label: 'Ajuda'},
    {blog: true, label: 'Blog'},
  ],
  users,
  /* path to images for header/footer */
  headerIcon: 'img/ibm-logo-white.png',
  footerIcon: 'img/ibm_logo.svg',
  favicon: 'img/favicon.png',
  /* colors for website */
  colors: {
    primaryColor: '#2b72ce',
    secondaryColor: '#256eed',
  },
  /* custom fonts for website */
  /*fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },*/
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' IBM Cloud Brazil - Open Community',
  organizationName: 'ibmpartners', // or set an env variable ORGANIZATION_NAME
  projectName: 'ibmpartners.github.io', // or set an env variable PROJECT_NAME
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: 'https://github.com/facebook/test-site',
  /* On page navigation for the current documentation page */
  // onPageNav: 'separate',
};

module.exports = siteConfig;
