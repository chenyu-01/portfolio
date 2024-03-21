<template>
  <nav>
    <ul class="flex" :class="{ show: showMenu, columnMode: columnMode }">
      <li
        v-for="link in allLinks"
        :key="link.id"
        class="ml-5"
        @click.prevent="toggleMenu"
      >
        <NuxtLink :to="'/' + link.id">{{ link.text }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>
<script setup>
const allLinks = [
  {
    id: '',
    text: 'Home',
  },
  {
    id: 'about',
    text: 'About',
  },
  {
    id: 'projects',
    text: 'Projects',
  },
  {
    id: 'blog',
    text: 'Blog',
  },
]
defineProps({
  showMenu: {
    type: Boolean,
    default: false,
  },
  columnMode: {
    type: Boolean,
    default: false,
  },
  toggleMenu: {
    type: Function,
    required: true,
  },
})
</script>
<style scoped>
li {
  @apply p-5 hover:bg-green-200 rounded-md;
}
@media (max-width: 768px) {
  .columnMode {
    flex-direction: column;
    display: none;
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 100px;
    left: 0;
    backdrop-filter: blur(33px);
  }

  .show {
    display: flex;
  }
}
</style>
