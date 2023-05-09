import { ActionIcon } from '@mantine/core';
import { IconSearch, } from '@tabler/icons-react';
import { useKBar, useRegisterActions } from "kbar"
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import useFetch from "../../Hooks/useFetch"
import { ActionsList } from "../../utility/actions"
import { ThemeContext, } from '../../Provider/config';
import { PageOpts, ThemeConfig } from "nextra";
import type { Action } from "kbar"
export function SearchBar() {

  const router = useRouter()
  let locale = router.locale || "en-US";
  const data = useFetch(router, locale)
  const { query } = useKBar()
  const { posts } = useContext<{ pageOpts?: PageOpts, themeConfig?: ThemeConfig, posts: Action[] }>(ThemeContext)

  useRegisterActions(posts)

  return (
    <ActionIcon onClick={() => query.toggle()} >
      <IconSearch size={"1.1rem"} />
    </ActionIcon>

  );
}

