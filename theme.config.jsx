import { IconBrandDeno } from '@tabler/icons-react';
// import { OramaSearch } from '@orama/plugin-nextra'

export default {
  // search: {
  //   component: OramaSearch,
  // },
  footer: <p>MIT 2023 © Nextra.</p>,
  readMore: 'Read More →',
  primary_navigation: [
    {
      route: '/',
      name: "Home"
    },
    {
      route: '/posts',
      name: "Blog"
    },
    {
      route: '/authors',
      name: "Authors"
    },
    {
      route: '/about',
      name: "About"
    },
    {
      route: '/contact',
      name: "Contact"
    },

  ],
  social_links: [
    {
      name: "Facebook",
      url: "https://facebook.com/officialrajdeepsingh"
    },
    {
      name: "Twitter",
      url: "https://facebook.com/officialrajdeepsingh"
    },
    {
      name: "Linkedin",
      url: "https://facebook.com/officialrajdeepsingh"
    },
    {
      name: "Instagram",
      url: "https://facebook.com/officialrajdeepsingh"
    },
    {
      name: "Github",
      url: "https://facebook.com/officialrajdeepsingh"
    },
    {
      name: "facebook",
      svg: <IconBrandDeno />,
      url: "https://facebook.com/officialrajdeepsingh"
    },
  ]
}
