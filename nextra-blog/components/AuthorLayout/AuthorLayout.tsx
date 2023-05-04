import React from 'react'
import { Box, TypographyStylesProvider } from '@mantine/core';

export function AuthorLayout({ children, frontMatter }: { children: React.ReactNode }) {

  return (<Box maw={724} mx="auto">
    <h1>Author : {frontMatter.title} </h1>
    <TypographyStylesProvider> {children}</TypographyStylesProvider>
  </Box>)

}
