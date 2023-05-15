import { defineConfig } from "tsup";
import tsconfig from "./tsconfig.json";

export default defineConfig({
  entry: ["section-blog-theme/index.tsx", "section-blog-theme/utlis/tag.tsx"],
  dts: true,
  format: ["esm"],
  name: "section-blog-theme",
  outExtension: () => ({ js: ".js" }),
  target: tsconfig.compilerOptions.target as "es2016",
  external: ["nextra"],
  minify: true,
  bundle: true,
});
