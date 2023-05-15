import React from "react";
import {
  Box,
  TypographyStylesProvider,
  Title,
  Image,
  AspectRatio,
  Group,
  Text,
} from "@mantine/core";
import type { PageOpts } from "nextra";
import { Toc } from "../Toc/Toc";
import Link from "next/link";
import dayjs from "dayjs";
import slugify from "slugify";

export function Post({
  children,
  pageOpts,
}: {
  children: React.ReactNode;
  pageOpts?: PageOpts;
}) {
  return (
    <Box maw={724} mx="auto">
      <Box py={"lg"}>
        <AspectRatio my={"lg"} ratio={1920 / 1080}>
          <Image
            mb={"xl"}
            src={pageOpts?.frontMatter.image}
            alt={pageOpts?.frontMatter.title}
            caption="My dog begging for treats"
          />
        </AspectRatio>

        <Title order={1}>{pageOpts?.frontMatter.title}</Title>
        <Group>
          <Link
            href={`/authors/${slugify(pageOpts?.frontMatter.author,{ lower: true, trim: true  })}`}
          >
            Published By {pageOpts?.frontMatter.author}
          </Link>

          <Text>
            {dayjs(pageOpts?.frontMatter.date).format("MMM DD, YYYY")}{" "}
          </Text>

          {pageOpts?.frontMatter.tags[0] ? (
            <Link
              href={`/tags/${slugify(pageOpts?.frontMatter.tags[0],{ lower: true, trim: true})}`}
            >
              {" "}
              {pageOpts?.frontMatter.tags[0]}{" "}
            </Link>
          ) : (
            ""
          )}
        </Group>
      </Box>

      <Toc />

      <TypographyStylesProvider> {children}</TypographyStylesProvider>
    </Box>
  );
}
