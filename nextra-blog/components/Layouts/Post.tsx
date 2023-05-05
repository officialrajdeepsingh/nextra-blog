import React from 'react'
import { Box, TypographyStylesProvider, Text, Title, Image, AspectRatio } from '@mantine/core';
import { FrontMatter } from 'nextra';
import {Toc } from "../Toc/Toc"
export function Post({ children, pageOpts }: { children: React.ReactNode, pageOpts: PageOpts }) {

console.log(pageOpts.headings)

  return (<Box maw={724} mx="auto">
    <Box py={"lg"} >
      <AspectRatio my={"lg"} ratio={1920 / 1080}>
        <Image
          mb={"xl"}
          src={pageOpts.frontMatter.image}
          alt="With custom placeholder"
          caption="My dog begging for treats"
        />
      </AspectRatio>
      <Title order={1}>{pageOpts.frontMatter.title}</Title>
      <Text> Published By {pageOpts.frontMatter.author} </Text>
    </Box>
    <Toc links={pageOpts.headings} /> 
    <TypographyStylesProvider> {children}</TypographyStylesProvider>
  </Box>)

}
