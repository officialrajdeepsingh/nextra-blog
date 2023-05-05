import type { NextraThemeLayoutProps } from 'nextra'
import { HeaderMenu } from './components/Header/Header';
import { ThemeContext } from "./Provider/config";
import { useLocalStorage } from '@mantine/hooks';
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import { SpotlightProvider } from '@mantine/spotlight';
import { IconHome, IconDashboard, IconSearch, IconMail, IconSun, IconMoonStars } from '@tabler/icons-react';
import { useRouter } from 'next/router';
import type { SpotlightAction } from '@mantine/spotlight';
import { MainLayout } from './components/Layouts/Main';

export default function Layout({ children, pageOpts, themeConfig }: NextraThemeLayoutProps) {

  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({ key: 'color-scheme', defaultValue: 'light', getInitialValueInEffect: true });

  const toggleColorScheme = (value?: ColorScheme) => setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  const router = useRouter()


  const actions: SpotlightAction[] = [
    {
      group: "blog",
      title: "title",
      description: "subItem.description",
      onTrigger: () => console.log("hello"),
    },
    {
      group: "Change theme",
      title: 'Change light Theme',
      description: 'Change theme',
      onTrigger: () => toggleColorScheme("light"),
      icon: <IconSun size="1.2rem" />,
    },
    {
      group: "Change theme",
      title: 'Change Dark Theme',
      description: 'Change theme',
      onTrigger: () => toggleColorScheme("dark"),
      icon: <IconMoonStars size="1.2rem" />,
    },

    {
      title: 'Home',
      group: "Navigation",
      description: 'Get to Home Page',
      onTrigger: () => router.push("/"),
      icon: <IconHome size="1.2rem" />,
    },

    {
      title: 'About',
      group: "Navigation",

      description: 'Read our journey to build a startup from Zero.',
      onTrigger: () => router.push("/about"),
      icon: <IconDashboard size="1.2rem" />,
    },
    {
      title: 'Contact',
      group: "Navigation",
      description: 'Get contact us',
      onTrigger: () => router.push("/contact"),
      icon: <IconMail size="1.2rem" />,
    },
  ];


  return (
    <ThemeContext.Provider value={{ pageOpts: pageOpts, themeConfig: themeConfig }}>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <SpotlightProvider
          actions={actions}
          searchIcon={<IconSearch size="1.2rem" />}
          searchPlaceholder="Search..."
          shortcut="ctrl + k"
          nothingFoundMessage="Nothing found..."
        >
          <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme }}>
            <HeaderMenu />
            <MainLayout>
              {children}
            </MainLayout>
          </MantineProvider>
        </SpotlightProvider>

      </ColorSchemeProvider>
    </ThemeContext.Provider>
  )

}
