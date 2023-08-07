/**
 * @type {import('next').NextConfig}
 */
import nextra from "nextra";


const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  mdxOptions: {
    remarkPlugins: [],
  }
})

export default withNextra()
