import React from 'react'
import { Box, TypographyStylesProvider } from '@mantine/core';
import { PageOpts } from 'nextra';


export function Author({ children, pageOpts }: { children: React.ReactNode, pageOpts: PageOpts }) {

  return (<Box maw={724} mx="auto">
    <h1>{pageOpts.frontMatter.title} </h1>
    <TypographyStylesProvider> {children}</TypographyStylesProvider>
  </Box>)

}
