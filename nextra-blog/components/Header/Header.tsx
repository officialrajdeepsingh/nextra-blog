import { Header, Group, Container, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantine/ds';
import { useStyles } from "./Header-style";
import { MenuItems } from "./MenuItems";
import { SocialIcons } from "./SocialIcons"


export function HeaderMenu() {

  const [opened, { toggle }] = useDisclosure(false);

  const { classes } = useStyles();

  return (
    <Header height={56} mb={120}>
      <Container className={classes.inner}>

        <MantineLogo size={28} />

        <Burger opened={opened} onClick={toggle} size="sm" className={classes.burger} />

        <Group position='left'>
          <MenuItems />
          <SocialIcons />
        </Group>
      </Container>
    </Header>
  );
}
