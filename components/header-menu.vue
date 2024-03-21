<template>
  <nav :class="{ show: showMenu }">
    <ul class="flex columnMode">
      <li
        v-for="link in allLinks"
        :key="link.id"
        :class="{ active: currentPath === link.id }"
        class="ml-5 md:ml-0 p-5 hover:bg-green-200 rounded-md dark:hover:bg-gray-600"
        @click.prevent="toggleMenu"
      >
        <NuxtLink :to="'/' + link.id">{{ link.text }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>
<script setup>
const route = useRoute()
const currentPath = computed(() => {
  return route.path.slice(1)
})
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
  toggleMenu: {
    type: Function,
    required: true,
  },
})
</script>
<style scoped>
.dark .active {
  color: greenyellow;
}
.active {
  color: green;
  text-decoration: underline;
}
@media (max-width: 768px) {
  .columnMode {
    flex-direction: column;
    position: absolute;
    width: 80vw;
    height: 100vh;
    top: 130px;
    left: 0;
    backdrop-filter: blur(22px);
    margin-left: 4px;
    margin-right: 4px;
  }

  nav {
    display: none;
  }

  .show {
    display: flex;
  }
}
</style>
