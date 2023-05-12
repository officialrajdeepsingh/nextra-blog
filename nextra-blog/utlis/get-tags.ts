import type { PageMapItem, MdxFile } from "nextra";
import type { BlogFrontMatter } from "../../types";

interface Page extends MdxFile {
  children?: Page[];
}

const flattenPageMap = (page: Page, result: PageMapItem[] = []) => {
  if (Array.isArray(page.children!)) {
    page.children.forEach((p) => flattenPageMap(p, result));
  }
  result.push(page);
};

const flattenPageMaps = (pages: Page[], result: PageMapItem[] = []) => {
  pages.forEach((v) => flattenPageMap(v, result));
};
export const getStaticTags = (pageMap: PageMapItem[]) => {
  const result: MdxFile[] = [];
  flattenPageMaps(pageMap as Page[], result);
  return Array.from(new Set(result.map(getTags).flat(1).filter(Boolean)));
};

export default function getTags(page: MdxFile<BlogFrontMatter>) {
  if (!page.frontMatter) {
    return [];
  }
  return page.frontMatter.tags;
}
