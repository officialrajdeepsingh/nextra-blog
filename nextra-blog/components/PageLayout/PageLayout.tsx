import React from 'react'
import { TypographyStylesProvider, Box } from '@mantine/core';
import type { FrontMatter } from "nextra"
export const PageLayout = ({ children, frontMatter }: { children: React.ReactNode frontMatter:FrontMatter }) => {
  return (
    <Box maw={724} mx="auto">
     <h1>Page : {frontMatter.title}  </h1>
      <TypographyStylesProvider> {children}</TypographyStylesProvider>
    </Box>
  )
}
