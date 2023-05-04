import type { NextraThemeLayoutProps } from 'nextra'
import { HeaderMenu } from './components/Header/Header';
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import { useState } from 'react';
import { ThemeContext } from "./Provider/config";
import { BlogLayout } from './components/MainLayout/MainLayout';
import {   flexsearch } from "nextra"


export default function Layout({ children, pageOpts, themeConfig }: NextraThemeLayoutProps) {

  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) => setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ThemeContext.Provider value={{ pageOpts: pageOpts, themeConfig: themeConfig }}>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme }}>
          <HeaderMenu />
          <BlogLayout>
            {children}
          </BlogLayout>
        </MantineProvider>
      </ColorSchemeProvider>
    </ThemeContext.Provider>
  )

}
