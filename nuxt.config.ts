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
    },
    markdown: {
      toc: {
        depth: 4,
      },
    },
  },
})
