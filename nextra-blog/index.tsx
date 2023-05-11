import type { NextraThemeLayoutProps } from "nextra";
import { HeaderMenu } from "./components/Header/Header";
import { ThemeContext } from "./Provider/config";
import { useLocalStorage } from "@mantine/hooks";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";
import { MainLayout } from "./components/Layouts/Main";

export default function Layout(props: NextraThemeLayoutProps) {
  const { children, pageOpts, themeConfig } = props;

  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider
      value={{ pageOpts: pageOpts, themeConfig: themeConfig }}
    >
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{ colorScheme }}
        >
          <HeaderMenu />
          <MainLayout>{children}</MainLayout>
        </MantineProvider>
      </ColorSchemeProvider>
    </ThemeContext.Provider>
  );
}
