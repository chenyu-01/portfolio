<template>
  <div class="flex flex-col max-w-7xl container mx-auto p-5">
    <header
      class="flex justify-between items-center text-xl sm:font-semibold hover:dark:bg-gray-700 rounded-xl"
    >
      <div class="flex items-center">
        <div
          class="p-5 mr-12 hover:bg-green-200 rounded-md dark:hover:bg-gray-600"
        >
          <NuxtLink to="/">Chen Yu</NuxtLink>
        </div>
        <HeaderMenu :show-menu="showMenu" :toggle-menu="toggleMenu" />
      </div>
      <div class="flex">
        <ClientOnly>
          <ColorModeSelector />
        </ClientOnly>
        <MenuButton class="md:hidden p-5" @:click.prevent="toggleMenu" />
      </div>
    </header>
    <main class="px-5 mt-10">
      <slot />
    </main>
  </div>
</template>
<script setup>
import HeaderMenu from '../components/header-menu.vue'
const showMenu = ref(false)

const toggleMenu = () => {
  console.log('toggleMenu')
  showMenu.value = !showMenu.value
}
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
:root {
  /* gray-100 */
  --bg-color-light: #f3f4f6;
  /* gray-800 */
  --bg-color-dark: #2d3748;
}
body {
  font-family: 'Roboto', sans-serif;
  background-color: var(--bg-color-light);
  color: var(--bg-color-dark);
}

.dark body {
  background-color: var(--bg-color-dark);
  color: var(--bg-color-light);
}
</style>
