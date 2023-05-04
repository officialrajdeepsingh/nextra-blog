/** @type {import('next').NextConfig} */

const withNextra = require('nextra')({
  theme: 'nextra-blog',
  themeConfig: './theme.config.jsx',
  flexsearch: true,
  defaultShowCopyCode: true,
  readingTime: true,
  codeHighlight: true
})

module.exports = withNextra({
  // reactStrictMode: true,
})
