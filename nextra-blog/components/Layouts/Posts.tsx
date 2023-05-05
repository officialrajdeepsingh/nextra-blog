import React from 'react'
import type { PageOpts, ThemeConfig } from 'nextra';
import { useContext } from 'react';
import { ThemeContext } from '../../Provider/config';
import { ArticleCard } from "../Cards/Card"
import { SimpleGrid, Container } from '@mantine/core';
import { useRouter } from 'next/router';
export function Posts({ children, pageOpts }: { children: React.ReactNode, pageOpts: PageOpts }) {
  // const { pageOpts } = useContext<{ pageOpts?: PageOpts, themeConfig?: ThemeConfig }>(ThemeContext);
  const router = useRouter()
  return (<>
    <Container py="xl">
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        {
          pageOpts?.pageMap.map((item) => {

            if (item.kind === "Folder") {

              if (item.route === router.route) {

                return item.children.map((subItem) => {
                  if (subItem?.name !== "index" && subItem?.kind === "MdxPage") {
                    return <ArticleCard key={subItem?.frontMatter.title} subItem={subItem} />
                  }
                })
              }
            }
          })
        }

      </SimpleGrid>
    </Container>  </>

  )

}
