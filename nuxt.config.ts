import { defineNuxtConfig } from 'nuxt/config'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@nuxt/content'],
  // @ts-ignore
  colorMode: {
    classSuffix: '',
  },

  content: {
    highlight: {
      theme: {
        default: 'github-light-default',
        dark: 'github-dark-default',
      },
      langs: [
        'javascript',
        'typescript',
        'json',
        'bash',
        'shell',
        'yaml',
        'markdown',
      ],
    },
    markdown: {
      anchorLinks: {
        // disable anchor links on headings
        depth: 0,
      },
      toc: {
        depth: 4,
      },
    },
  },
  // prerender sitemap.xml
  nitro: {
    prerender: {
      routes: ['/sitemap.xml'],
    },
  },
})
