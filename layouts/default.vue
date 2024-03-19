<template>
  <div class="flex flex-col max-w-2xl container mx-auto">
    <header class="flex justify-between items-center mt-5">
      <div class="flex items-center space-x-12">
        <NuxtLink to="/" class="text-xl font-semibold p-2 hover:bg-gray-200"
          >Chen Yu</NuxtLink
        >
        <HeaderMenu />
      </div>
      <ClientOnly>
        <ColorModeSelector />
      </ClientOnly>
    </header>
    <main class="p-2 mt-10">
      <slot />
    </main>
  </div>
</template>
<script setup>
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

.dark body {
  background-color: black;
  color: whitesmoke;
}
</style>
