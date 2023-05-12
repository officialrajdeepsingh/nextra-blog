import type { PageOpts } from "nextra";
import type { ReactNode } from "react";
import type { Components } from "nextra/mdx";
import { Image } from "@mantine/core";
import { type } from "os";

export interface NextraBlogTheme {
  comments?: ReactNode;
  components?: Components;
  cusdis?: {
    appId: string;
    host?: string;
    lang: string;
  };
  darkMode?: boolean;
  dateFormatter?: (date: Date) => string;
  footer?: ReactNode;
  head?: ({
    meta,
    title,
  }: {
    meta: Record<string, any>;
    title: string;
  }) => ReactNode;
  navs?: {
    name: string;
    url: string;
  }[];
  postFooter?: string;
  readMore?: string;
  titleSuffix?: string;
}

export type BlogPageOpts = PageOpts<BlogFrontMatter>;
export type AuthorPageOpts = PageOpts<AuthorFrontMatter>;
export type LayoutTypes =
  | "home"
  | "post"
  | "page"
  | "posts"
  | "tag"
  | "author"
  | "authors";

export type BlogFrontMatter = {
  author?: string;
  date?: string;
  description: string;
  image?: string;
  tags?: string[];
  title: string;
  type: "post";
};
export type iconsType =
  | "Facebook"
  | "Twitter"
  | "Youtube"
  | "Linkedin"
  | "Github"
  | "Instagram";

export type AuthorFrontMatter = {
  name: string;
  description?: string;
  image?: string;
  tags?: string[];
  title: string;
  type: "author";
  social?: { name: iconsType; svg?: React.ReactNode; url: string }[];
};
export interface LayoutProps {
  config: NextraBlogTheme;
  opts: BlogPageOpts;
}
