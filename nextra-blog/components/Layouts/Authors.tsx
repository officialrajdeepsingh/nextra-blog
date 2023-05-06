import React from 'react'
import type { PageOpts, ThemeConfig } from 'nextra';
import { useContext } from 'react';
import { ThemeContext } from '../../Provider/config';
import { AuthorCard } from "../Cards/AuthorCard"
import { SimpleGrid, Container } from '@mantine/core';
import { useRouter } from 'next/router';

export function Authors({ children, pageOpts }: { children: React.ReactNode, pageOpts: PageOpts }) {

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
                    return <AuthorCard key={subItem?.frontMatter.name} subItem={subItem} />
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
