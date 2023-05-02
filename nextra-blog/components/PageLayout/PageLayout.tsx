import React from 'react'
import { TypographyStylesProvider, Box } from '@mantine/core';

export const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box maw={724} mx="auto">
      <TypographyStylesProvider> {children}</TypographyStylesProvider>
    </Box>
  )
}
