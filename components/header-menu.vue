<template>
  <nav>
    <ul class="flex space-x-4">
      <li>
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about">About</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/projects">Projects</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/blog">Blog</NuxtLink>
      </li>
    </ul>
  </nav>
</template>
<style scoped>
li {
  @apply p-5 hover:bg-green-200 rounded-md;
}
</style>
