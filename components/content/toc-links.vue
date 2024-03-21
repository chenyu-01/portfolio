<template>
  <ul class="not-prose">
    <li v-for="link in links" :key="link.id">
      <NuxtLink
        :to="{ path: route.path, hash: `#${link.id}` }"
        :class="[
          level > 0 ? `ml-${level * 4}` : '',
          { 'text-green-400': activeId === link.id },
        ]"
      >
        {{ link.text }}
      </NuxtLink>
      <TocLinks
        :links="link.children"
        :level="link.depth - 1"
        :active-id="activeId"
      />
    </li>
  </ul>
</template>

<script setup>
const route = useRoute()
defineProps({
  links: {
    type: Array,
    default: () => [],
  },
  level: {
    type: Number,
    default: 0,
  },
  activeId: {
    type: String,
    default: null,
  },
})
</script>

<style scoped>
.ml-4 {
  margin-left: 1rem;
}
/* somehow tailwind failed to generate these classes */
.ml-8 {
  margin-left: 2rem;
}
.ml-12 {
  margin-left: 3rem;
}
</style>
