import { PageOpts, ThemeConfig } from "nextra";
import { createContext } from "react";

export const SearchProvider = createContext<{ posts: [] }>({ posts: [] });
export const ThemeContext = createContext<{ pageOpts?: PageOpts; themeConfig?: ThemeConfig; posts: [] }>({});
