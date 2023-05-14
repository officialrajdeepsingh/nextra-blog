import { IconBrandDeno } from "@tabler/icons-react";

const themeConfig = {
  logo: {
    text: "Protfolio Blog",
  },
  primary_navigation: [
    {
      route: "/",
      name: "Home",
    },
    {
      route: "/posts",
      name: "Blog",
    },
    {
      route: "/authors",
      name: "Authors",
    },
    {
      route: "/about",
      name: "About",
    },
    {
      route: "/contact",
      name: "Contact",
    },
  ],
  secondary_navigation: [
    {
      route: "/disclaimer",
      name: "Disclaimer",
    },
    {
      route: "/privacy-policy",
      name: "Privacy policy",
    },
    {
      route: "/contact",
      name: "Contact",
    },
  ],
  social_links: [
    {
      name: "Facebook",
      url: "https://facebook.com/officialrajdeepsingh",
    },
    {
      name: "Twitter",
      url: "https://facebook.com/officialrajdeepsingh",
    },
    {
      name: "Linkedin",
      url: "https://facebook.com/officialrajdeepsingh",
    },
    {
      name: "Instagram",
      url: "https://facebook.com/officialrajdeepsingh",
    },
    {
      name: "Github",
      url: "https://facebook.com/officialrajdeepsingh",
    },
    {
      name: "facebook",
      svg: <IconBrandDeno />,
      url: "https://facebook.com/officialrajdeepsingh",
    },
  ],
};

export default themeConfig;
