<template>
  <nav>
    <ul
      class="aside"
      :class="{ show: showMenu }"
      @touchstart="handleTouchStart"
      @touchend="handleTouchEnd"
    >
      <div
        class="flex flex-col md:flex-row md:items-center w-full h-full top-0"
      >
        <li
          class="flex justify-between items-center md:hidden p-5 px-8 my-12 text-4xl text-violet-200"
        >
          <p>Menu</p>
          <ClientOnly>
            <ColorModeSelector />
          </ClientOnly>
        </li>
        <li
          v-for="link in allLinks"
          :key="link.id"
          :class="{ active: currentPath === link.id }"
          @click.prevent="toggleMenu"
        >
          <NuxtLink class="flex" :to="'/' + link.id">{{ link.text }}</NuxtLink>
        </li>
        <li>
          <a class="flex md:hidden" @click.prevent="toggleMenu"
            >Swipe Left Go Back</a
          >
        </li>
      </div>
    </ul>
    <!-- <div class="aside" :class="{ show: showMenu }"></div> -->
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
const props = defineProps({
  showMenu: {
    type: Boolean,
    default: false,
  },
  toggleMenu: {
    type: Function,
    required: true,
  },
})
const toggleMenu = props.toggleMenu
let touchStartX = 0

const handleTouchStart = (event) => {
  touchStartX = event.touches[0].clientX
  console.log(touchStartX)
}

const handleTouchEnd = (event) => {
  const touchEndX = event.changedTouches[0].clientX
  const swipeThreshold = 30 // Adjust this value as needed
  console.log(touchEndX)
  // Swiped right to left
  if (touchStartX - touchEndX > swipeThreshold) {
    toggleMenu()
  }
}
</script>
<style scoped>
.dark .active {
  color: greenyellow;
}
.active {
  color: green;
  text-decoration: underline;
}
a {
  @apply py-5 px-8 md:px-5 hover:bg-green-200 rounded-md relative my-2 md:my-0;
  cursor: pointer;
  .dark & {
    @apply dark:hover:bg-gray-600;
  }
}

@media (max-width: 768px) {
  a {
    background-color: hsla(0, 0%, 100%, 0.2);
    backdrop-filter: blur(10px);
    z-index: 10;
  }

  .aside {
    font-size: x-large;
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0px;
    left: 0;
    z-index: 5;
    overflow: hidden;
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
  }
  .aside::before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: hsla(224, 23%, 23%, 0.346);
    backdrop-filter: blur(10px);
    transform: translateX(-100%);
    transition: transform 0.2s ease-in-out;
  }

  .dark .aside::before {
    background-color: hsla(284, 23%, 23%, 0.2);
  }

  .show,
  .show::before {
    transform: translateX(0);
  }
}
</style>
