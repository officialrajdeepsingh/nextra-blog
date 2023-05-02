import type { NextraThemeLayoutProps } from 'nextra'
import { HeaderMenu } from './components/Header/Header';
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import { useState } from 'react';
import { ThemeContext } from "./Provider/config"
import { Box } from '@mantine/core';
import { ArticleLayout } from "./components/ArticleLayout/ArticleLayout"
import { DocLayout } from "./components/DocLayout/DocLayout"
import { PageLayout } from "./components/PageLayout/PageLayout";
import { MdxPage } from "./components/MdxPage/MdxPage.tsx"
import type { ReactNode } from 'react';
import { TypographyStylesProvider} from '@mantine/core';

const layoutMap = {
  post: ArticleLayout,
  docs: DocLayout,
  page: PageLayout
};

//  kind: 'MdxPage',  
//  kind: 'Folder',  

const BlogLayout = ({ children, opts }): ReactElement => {
  
  const kind = opts.kind;
  const type = opts.frontMatter.type;
  const Layout = layoutMap[type]


    // opts.pageMap.map( item=> {
   //     console.log("item ", item)
   // })

console.log( kind === 'MdxPage', kind === 'Folder')
  if( kind === 'MdxPage'){
     return (<Box maw={724} mx="auto">
        <TypographyStylesProvider> {children}</TypographyStylesProvider>
    </Box>)
  }

 if( kind === 'Folder'){
     return (<Box maw={724} mx="auto">
        <h1>Blogs </h1>
    </Box>)
  }


}

export default function Layout({ children, pageOpts, themeConfig }: NextraThemeLayoutProps) {

  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) => setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ThemeContext.Provider value={{ pageOpts: pageOpts, themeConfig: themeConfig }}>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme }}>
          <HeaderMenu />

          <BlogLayout opts={pageOpts}>
            {children}
          </BlogLayout>

        </MantineProvider>
      </ColorSchemeProvider>
    </ThemeContext.Provider>
  )


}
