import { Box, Text, Group } from '@mantine/core';
import { IconListSearch } from '@tabler/icons-react';
import { TocItem } from './TocItem';

import { ThemeContext } from '../../Provider/config';
import { useContext } from 'react';
import { PageOpts, ThemeConfig } from 'nextra';


export function Toc() {
  const { pageOpts } = useContext<{ pageOpts?: PageOpts, themeConfig?: ThemeConfig }>(ThemeContext)
  return <Box my={"lg"}>
    {pageOpts?.headings && pageOpts?.headings.length >= 1 ? <>
      <Group my={"xl"} mb="md">
        <IconListSearch size="1.1rem" stroke={1.5} />
        <Text>Table of contents</Text>
      </Group>
      {
        pageOpts?.headings.map(item => <TocItem item={item} />
        )
      }
    </> : ""
    }
  </Box>
}
