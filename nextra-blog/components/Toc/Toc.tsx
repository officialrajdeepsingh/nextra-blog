import { Heading } from 'nextra';
import Link from 'next/link';
import { createStyles, Box, Text, Group, rem } from '@mantine/core';
import { IconListSearch } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  link: {
    ...theme.fn.focusStyles(),
    display: 'block',
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    lineHeight: 1.2,
    fontSize: theme.fontSizes.sm,
    padding: theme.spacing.xs,
    borderTopRightRadius: theme.radius.sm,
    borderBottomRightRadius: theme.radius.sm,
    borderLeft: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkActive: {
    fontWeight: 500,
    borderLeftColor: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 6 : 7],
    color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 2 : 7],

    '&, &:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
          : theme.colors[theme.primaryColor][0],
    },
  },
}));

interface TableOfContentsProps {
  links: Heading;
  active: string;
}

export function Toc({ links, active }: TableOfContentsProps) {
  const { classes, cx } = useStyles();

  // depth
  // :
  // 2
  // id
  // :
  // "5-things"
  // value
  // :
  // "5 Things"

  const items = links.map((item) => (
    <Link
      href={`#${item.id}`}
      key={item.value}
      className={cx(classes.link, { [classes.linkActive]: active === item.link })}
    // sx={(theme) => ({ paddingLeft: `calc(${item.depth} * ${theme.spacing.md})` })}
    >
      {item.value}
    </Link>
  ));

  return links.length >= 1 ? (
    <div>
      <Group mb="md">
        <IconListSearch size="1.1rem" stroke={1.5} />
        <Text>Table of contents</Text>
      </Group>
      {items}
    </div>
  ) : ""
}
