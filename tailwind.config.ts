import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [
    typography,
    // ...other plugins
  ],
  darkMode: ['selector'],
} as Config
