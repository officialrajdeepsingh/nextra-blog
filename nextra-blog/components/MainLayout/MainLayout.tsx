import React from 'react'
import { useRouter } from 'next/router';
import type { PageOpts, ThemeConfig } from 'nextra';
import { useContext } from 'react';
import { ThemeContext } from '../../Provider/config';
import { ArticleCard } from "../Card/Card"
import { SimpleGrid, Container } from '@mantine/core';
import { ArticleLayout } from "../ArticleLayout/ArticleLayout";
import { AuthorLayout } from "../AuthorLayout/AuthorLayout";
import { PageLayout } from "../PageLayout/PageLayout";

const Layouts = {
  post: ArticleLayout,
  page: PageLayout,
  author: AuthorLayout
};

export function BlogLayout({ children }: { children: React.ReactNode }) {

  const router = useRouter()

  const { pageOpts } = useContext<{ pageOpts?: PageOpts, themeConfig?: ThemeConfig }>(ThemeContext);
  console.log("pageOpts for layout : ", pageOpts)

  let LayoutType: PageOpts = pageOpts?.frontMatter.type || "page"
  let Layout = Layouts[LayoutType]

  return (<>
    {Layout ? <Layout frontMatter={pageOpts.frontMatter} >{children}</Layout> : ""}
    <Container py="xl">
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        {
          pageOpts?.pageMap.map((item) => {

            if (item.kind === "Folder") {

              if (item.route === router.route) {

                return item.children.map((subItem) => {
                  if (subItem?.name !== "index" && subItem?.kind === "MdxPage") {
                    return <ArticleCard subItem={subItem} />
                  }
                })
              }
            }
          })
        }

      </SimpleGrid>
    </Container>
  </>

  )

}
