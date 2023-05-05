import { useContext } from 'react';
import { ThemeContext } from '../../Provider/config';
import { useStyles } from "./Header-style";
import Link from 'next/link';
import type { PageOpts, ThemeConfig } from 'nextra';
import { Group, ActionIcon } from '@mantine/core';
import { useMantineColorScheme } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram, IconBrandFacebook, IconBrandGithub, IconSun, IconMoonStars, IconBrandLinkedin } from '@tabler/icons-react';
import { SearchBar } from '../Search/Search';
enum IconsName {
  "Facebook",
  "Twitter",
  "Youtube",
  "Instagram",
  "Github",
  "Linkedin"
}

enum IconsNames {
  "Facebook" = <IconBrandFacebook size={"1.1rem"} stroke={"1.5"} />,
  "Twitter" = <IconBrandTwitter size="1.1rem" stroke={1.5} />,
  "Youtube" = <IconBrandYoutube size="1.1rem" stroke={1.5} />,
  "Instagram" = <IconBrandInstagram size="1.1rem" stroke={1.5} />,
  "Github" = <IconBrandGithub size="1.1rem" stroke={1.5} />,
  "Linkedin" = <IconBrandLinkedin size="1.1rem" stroke={1.5} />
}



let Icons: IconsNames = {
  "Facebook": <IconBrandFacebook size={"1.1rem"} stroke={"1.5"} />,
  "Twitter": <IconBrandTwitter size="1.1rem" stroke={1.5} />,
  "Youtube": <IconBrandYoutube size="1.1rem" stroke={1.5} />,
  "Instagram": <IconBrandInstagram size="1.1rem" stroke={1.5} />,
  "Github": <IconBrandGithub size="1.1rem" stroke={1.5} />,
  "Linkedin": <IconBrandLinkedin size="1.1rem" stroke={1.5} />
}


export function SocialIcons() {
  const { classes } = useStyles();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark'

  const { themeConfig } = useContext<{ pageOpts?: PageOpts, themeConfig?: ThemeConfig }>(ThemeContext)

  return (
    <Group spacing={0} className={classes.social} align="center" position="center" noWrap>

      <SearchBar />
      <ActionIcon
        size="lg"
        variant="outline"
        color={dark ? 'yellow' : 'blue'}
        onClick={() => toggleColorScheme()}
        title="Toggle color scheme"
      >
        {dark ? <IconSun size="1.1rem" /> : <IconMoonStars size="1.1rem" />}
      </ActionIcon>
      {
        themeConfig.social_links.map((link: { name: string; svg?: React.ReactNode; url: string; }) => {
          return <Link key={link.name} target='_blank' href={link.url} > <ActionIcon size="lg">
            {link.svg ? link.svg : Icons[link.name]}
          </ActionIcon>
          </Link>
        }
        )
      }
    </Group >

  );
}
