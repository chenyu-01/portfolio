<template>
  <div>Hello from main page</div>
</template>
<script setup>
useSeoMeta({
  title: 'Main Page',
  description: "The main page of Chen Yu's website.",
  ogTitle: 'Main Page',
  ogDescription: "The main page of Chen Yu's website.",
  ogImage: '[og:image]',
  ogUrl: '[og:url]',
  twitterTitle: 'Main Page',
  twitterDescription: "The main page of Chen Yu's website.",
  twitterImage: '[twitter:image]',
  twitterCard: 'summary',
})

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png',
    },
  ],
})
</script>
