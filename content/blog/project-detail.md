---
title: 'Project Detail'
description: 'Details of this Nuxt3 portfolio project'
publishedAt: '2024-03-20'
head:
  meta:
    - name: 'keywords'
      content: 'tech stacks, Nuxt3, Vue.js, Tailwind CSS'
    - name: 'author'
      content: 'Chen Yu'
toc: true
---

# Project Detail

## Tech Stacks

This website is built with Nuxt3, powered by Vue.js and Tailwind CSS. The content is written in Markdown. The source code is hosted on [GitHub](https://github.com/chenyu-01/portfolio).

## Configurations

### Tailwindcss

> [Tailwindcss Guide for Nuxt](https://tailwindcss.nuxtjs.org/tailwind/config) to configure tailwindcss in Nuxt project.

- I am using typescript file for configuration. In `tailwind.config.ts`, I have added the following code to enable the dark mode feature and typography plugin and darkmode feature:

  ```typescript
  import type { Config } from 'tailwindcss'
  import typography from '@tailwindcss/typography'
  export default  = {
    darkMode: ['selector'], // for tailwind 3.4.0 and above
    plugins: [typography],
  } as Config
  ```

- I also add editor support in `.vscode/settings.json`:

  ```json
  "files.associations": {
    "*.css": "tailwindcss"
  },
  "editor.quickSuggestions": {
    "strings": true
  },
  ```

For `nuxt.config.ts`, I have added the following code correspondingly, with nuxt/content and nuxt/color-mode modules installed and configured in the project:

```typescript
export default defineNuxtConfig({
  // @ts-ignore
  colorMode: {
    classSuffix: '', // will change the class name to `dark` instead of `dark-mode` in html tag
  },
  // ts ignore to suppress the error message that darkMode is not a valid property, which is a known issue
  modules: ['@nuxt/content', '@nuxtjs/color-mode', '@nuxtjs/tailwindcss'],
})
```

### Eslint and Prettier

I am following [eslint guide](https://nuxt.com/docs/guide/concepts/code-style#eslint) to configure eslint and prettier for the project.

- I added `.prettierrc.mjs` and `eslintrc.cjs` files in the root directory of the project.
- In `.vscode/settings.json`, I added editor support for eslint.

### Nuxt Content Module

Nuxt content module is used to manage the content of the website. Here is highliging code config in `nuxt.config.ts`:

```typescript
export default defineNuxtConfig({
  // ... other configs
  content: {
    highlight: {
      theme: {
        default: 'github-light-default',
        dark: 'github-dark-default',
      },
    },
  },
})
```

by the way, in `/pages/blog/[...slug].vue` to work with markdown style and tailwindcss theme, I utilized **prose** class from tailwindcss to style the content.
