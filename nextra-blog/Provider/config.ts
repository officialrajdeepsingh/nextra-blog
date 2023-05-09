import { PageOpts, ThemeConfig } from "nextra";
import { createContext } from "react";
import type { Action } from "kbar"

interface themeConfig {
  pageOpts: PageOpts;
  themeConfig: ThemeConfig;
  posts: Action[];
}
export const ThemeContext = createContext<themeConfig>({});
