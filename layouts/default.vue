<template>
  <div
    class="flex flex-col max-w-7xl container mx-auto"
    @touchstart="handleTouchStart"
    @touchend="handleTouchEnd"
  >
    <header
      class="px-5 flex justify-between items-center text-xl sm:font-semibold dark:bg-gray-700 bg-gray-200 md:bg-inherit md:dark:bg-inherit sticky md:static top-0 w-full"
    >
      <div class="flex items-center">
        <div class="p-5 mr-12 menu-hover">
          <NuxtLink to="/">Chen Yu</NuxtLink>
        </div>
        <HeaderMenu :show-menu="showMenu" :toggle-menu="toggleMenu" />
      </div>
      <div class="flex">
        <ClientOnly>
          <ColorModeSelector />
        </ClientOnly>
        <MenuButton
          class="md:hidden p-5"
          @:click.prevent="toggleMenu(!showMenu)"
        />
      </div>
    </header>
    <main class="px-10 mt-5">
      <slot />
    </main>
  </div>
</template>
<script setup lang="ts">
import HeaderMenu from '../components/header-menu.vue'
const showMenu = ref(false)
const toggleMenu = (changeTo: Boolean) => {
  console.log(changeTo)
  if (changeTo === false) {
    showMenu.value = false
    document.body.style.overflow = 'auto'
    return
  }
  showMenu.value = true
  document.body.style.overflow = 'hidden'
}
const { handleTouchStart, handleTouchEnd } = swipeMenu(toggleMenu, 'right')

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
.menu-hover {
  @apply md:hover:bg-green-200 rounded-md md:dark:hover:bg-gray-600;
}
</style>
