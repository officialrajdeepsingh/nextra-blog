import { Group } from '@mantine/core';
import { useContext } from 'react';
import { ThemeContext } from '../../Provider/config';
import { useStyles } from "./Header-style";
import Link from 'next/link';
import type { PageOpts, ThemeConfig } from 'nextra';

export function MenuItems() {
  const { classes, cx } = useStyles();

  const { pageOpts, themeConfig } = useContext<{ pageOpts?: PageOpts, themeConfig?: ThemeConfig }>(ThemeContext)

  // const navigation = pageOpts.pageMap.map(item => ({ name: item.name, kind: item.kind, route: item.route }))


  const items = themeConfig.primary_navigation.map((link: { name: string; route: string; }) => {

    return (<Link
      key={link.name}
      href={link.route}
      className={cx(classes.link, { [classes.linkActive]: "/" === link.route })}
    >
      {link.name}
    </Link>)
  });


  return (
    <Group className={classes.links} position='center' spacing={5}>
      {items}
    </Group>
  );
}
