import React from 'react'
import { TypographyStylesProvider, Box } from '@mantine/core';
// import { OramaSearch } from "../../plugins/Orama/index"
export const HomePage = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box maw={724} mx="auto">
      <TypographyStylesProvider> {children}</TypographyStylesProvider>
    </Box>
  )
}
