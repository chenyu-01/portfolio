<template>
  <div class="flex flex-col max-w-7xl container mx-auto p-5">
    <header class="flex justify-between items-center text-xl sm:font-semibold">
      <div class="flex items-center">
        <div class="p-5 mr-12 hover:bg-green-200 rounded-md">
          <NuxtLink to="/"> Chen Yu </NuxtLink>
        </div>
        <HeaderMenu
          :show-menu="showMenu"
          :column-mode="columnMode"
          :toggle-menu="toggleMenu"
        />
      </div>
      <div class="flex">
        <ClientOnly>
          <ColorModeSelector />
        </ClientOnly>
        <MenuButton class="md:hidden" @:click.prevent="toggleMenu" />
      </div>
    </header>
    <main class="px-5 mt-10">
      <slot />
    </main>
  </div>
</template>
<script setup>
import HeaderMenu from '../components/header-menu.vue'
import { useWindowSize } from '@vueuse/core'
const showMenu = ref(true)
const columnMode = computed(() => {
  const { width } = useWindowSize()

  return width.value > 768 ? false : true
})
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
