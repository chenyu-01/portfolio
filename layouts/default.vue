<template>
  <div class="flex flex-col max-w-2xl container mx-auto">
    <header class="flex justify-between my-4">
      <NuxtLink to="/">Chen Yu</NuxtLink>

      <HeaderMenu />
    </header>
    <main class="p-2">
      <slot />
    </main>
  </div>
</template>
<script setup>
import HeaderMenu from '~/components/header-menu.vue'

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
      crossorigin: '',
    },
  ],
  titleTemplate: '%s - Chen Yu',
})
</script>
<style>
body {
  font-family: 'Roboto', sans-serif;
}
</style>
