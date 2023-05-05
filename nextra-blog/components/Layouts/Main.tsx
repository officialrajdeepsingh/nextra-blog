import React from 'react'
import { useRouter } from 'next/router';
import type { PageOpts, ThemeConfig } from 'nextra';
import { useContext } from 'react';
import { ThemeContext } from '../../Provider/config';
import { Author } from './Author';
import { Authors } from './Authors'
import { Page } from './Page'
import { Post } from './Post'
import { Posts } from './Posts'
import { HomePage } from './HomePage'


const Layouts = {
  post: Post,
  posts: Posts,
  page: Page,
  home: HomePage,
  author: Author,
  authors: Authors,
};

export function MainLayout({ children }: { children: React.ReactNode }) {

  const router = useRouter()

  const { pageOpts } = useContext<{ pageOpts?: PageOpts, themeConfig?: ThemeConfig }>(ThemeContext);

  let LayoutType: PageOpts = pageOpts?.frontMatter.type || "home"

  let Layout = Layouts[LayoutType]

  return Layout ? <Layout pageOpts={pageOpts} >{children}</Layout> : ""

}
