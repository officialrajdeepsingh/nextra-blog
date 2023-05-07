import { IconHome, IconDashboard, IconSearch, IconMail, IconSun, IconMoonStars, IconBrandTwitter, IconBrandGithub, IconMoon, IconSettingsUp } from '@tabler/icons-react';
import type { Action } from 'kbar';
import type { NextRouter } from 'next/router';

export function ActionsList(toggleColorScheme: ToggleColorScheme, router: NextRouter): Action[] {
  return [
    {
      id: "homeAction",
      name: "Home",
      shortcut: ["h"],
      keywords: "back",
      section: "Navigation",
      perform: () => router.push("/"),
      icon: <IconHome size="1.2rem" />,
      subtitle: "Subtitles can help add more context.",
    },
    {
      id: "contactAction",
      name: "Contact",
      shortcut: ["c"],
      keywords: "email hello",
      section: "Navigation",
      icon: <IconMail size="1.2rem" />,
      perform: () => window.open("mailto:timchang@hey.com", "_blank"),
    },
    {
      id: "twitterAction",
      name: "Twitter",
      shortcut: ["g", "t"],
      keywords: "social contact dm",
      section: "Navigation",
      icon: <IconBrandTwitter size="1.2rem" />,
      perform: () => window.open("https://twitter.com/timcchang", "_blank"),
    },
    {
      id: "githubAction",
      name: "Github",
      shortcut: ["g", "h"],
      keywords: "sourcecode",
      section: "Navigation",
      icon: <IconBrandGithub size="1.2rem" />,
      perform: () => window.open("https://github.com/timc1/kbar", "_blank"),
    },
    {
      id: "blog",
      name: "Search Blogs",
      shortcut: ["?"],
      keywords: "serach articles",
      section: "blog",
      icon: <IconSearch className="w-6 h-6 mx-3" />
    },
    {
      id: "theme",
      name: "Change theme…",
      keywords: "interface color dark light",
      section: "Preferences",
      icon: <IconSettingsUp className="w-6 h-6 mx-3" />,
    },
    {
      id: "darkTheme",
      name: "Dark",
      keywords: "dark theme",
      section: "Preferences",
      perform: () => {
        toggleColorScheme("dark");
      },
      icon: <IconMoon className="w-6 h-6 mx-3" />,
      parent: "theme",
    },
    {
      id: "lightTheme",
      name: "Light",
      keywords: "light theme",
      section: "Preferences",
      perform: () => {
        toggleColorScheme("light")
      },
      icon: <IconSun className="w-6 h-6 mx-3" />,
      parent: "theme",
    },

  ];
}
