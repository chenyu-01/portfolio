<template>
  <div class="flex flex-col max-w-7xl container mx-auto p-5">
    <header class="flex justify-between items-center">
      <div class="flex items-center">
        <div
          class="text-xl font-semibold p-5 mr-12 hover:bg-green-200 rounded-md"
        >
          <NuxtLink to="/"> Chen Yu </NuxtLink>
        </div>
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
