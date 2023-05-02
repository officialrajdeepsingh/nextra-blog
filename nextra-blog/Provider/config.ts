
import { PageOpts, ThemeConfig } from "nextra";
import { createContext } from "react";

export const ThemeContext = createContext<{ pageOpts?: PageOpts, themeConfig?: ThemeConfig }>({});
