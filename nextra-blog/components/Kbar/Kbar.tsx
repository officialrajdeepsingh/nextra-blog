import { useRouter } from "next/router.js";
import { KBarAnimator, KBarPortal, KBarPositioner, KBarSearch, KBarProvider, Action, useRegisterAction } from "kbar";
import RenderResults from "./RenderResults";
import React from "react"
import { createStyles, useMantineColorScheme } from "@mantine/core";
import { ActionsList } from "../../utility/actions"
import { ThemeContext } from '../../Provider/config';

const useStyles = createStyles((theme) => ({
  searchStyle: {
    padding: "12px 16px",
    fontSize: "16px",
    width: "100%",
    boxSizing: "border-box",
    outline: "none",
    border: "none",
    background: "white",
    color: "black",
  },
  animatorStyle: {
    maxWidth: "600px",
    width: "100%",
    background: "var(--background)",
    color: "black",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "var(--shadow)",
  },
  groupNameStyle: {
    padding: "8px 16px",
    fontSize: "10px",
    textTransform: "uppercase" as const,
    opacity: 0.5,
  }
}));
export function KBar({ children }: { children: React.ReactNode }) {
  const { classes } = useStyles();
  // toggle theme
  const { toggleColorScheme } = useMantineColorScheme();
  //  const { pageOpts } = useContext<{ pageOpts?: PageOpts, themeConfig?: ThemeConfig }>(ThemeContext)


  // Define the router 
  const router = useRouter();

  // Create the Action
  const actions = ActionsList(toggleColorScheme, router)



  return (
    <KBarProvider options={{ enableHistory: true }} actions={actions}>

      {children}

      <KBarPortal>
        <KBarPositioner>
          <KBarAnimator className={classes.animatorStyle}>
            <KBarSearch className={classes.searchStyle} />
            <RenderResults />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
    </KBarProvider>
  )
}
