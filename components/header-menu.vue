<template>
  <nav>
    <ul class="flex aside" :class="{ show: showMenu }">
      <div class="flex flex-col md:flex-row">
        <p
          class="flex justify-between items-center md:hidden p-5 px-8 my-12 text-4xl text-violet-200"
        >
          Menu
          <ColorModeSelector />
        </p>
        <li
          v-for="link in allLinks"
          :key="link.id"
          :class="{ active: currentPath === link.id }"
          @click.prevent="toggleMenu"
        >
          <NuxtLink :to="'/' + link.id">{{ link.text }}</NuxtLink>
        </li>
        <button class="text-left">
          <li class="md:hidden" @click.prevent="toggleMenu">Back to Page</li>
        </button>
      </div>
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
li {
  @apply py-5 px-8 md:px-5 hover:bg-green-200 rounded-md dark:hover:bg-gray-600;
}
@media (max-width: 768px) {
  .aside {
    font-size: x-large;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0;
    background-color: hsla(224, 23%, 23%, 0.346);
    .dark & {
      background-color: hsla(284, 23%, 23%, 0.2);
    }
    backdrop-filter: blur(30px);
  }

  ul {
    display: block;
    transform: translateX(-100%);
    transition: transform 0.5s ease-in-out;
  }
  ul > div {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    @apply space-y-6;
  }

  li {
    background-color: hsla(0, 0%, 100%, 0.2);
    backdrop-filter: blur(10px);
  }
  .show {
    transform: translateX(0);
    border-right: none;
  }
}
</style>
