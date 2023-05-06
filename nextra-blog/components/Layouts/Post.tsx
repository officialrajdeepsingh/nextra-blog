import React from 'react'
import { Box, TypographyStylesProvider, Text, Title, Image, AspectRatio } from '@mantine/core';
import { FrontMatter, PageOpts } from 'nextra';
import { Toc } from "../Toc/Toc"
import Link from 'next/link';

export function Post({ children, pageOpts }: { children: React.ReactNode, pageOpts: PageOpts }) {

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
      <Link href={`/authors/${pageOpts.frontMatter.author.toLowerCase().replaceAll(" ", "-")}`}>
        <Text> Published By {pageOpts.frontMatter.author} </Text>
      </Link>
    </Box>
    <Toc />
    <TypographyStylesProvider> {children}</TypographyStylesProvider>
  </Box>)

}
