<template>
  <BlogPosts v-slot="{ posts }" :limit="limit">
    <div v-for="post in posts" :key="post._path">
      <NuxtLink :to="post._path">
        <p>{{ post.title }}</p>
      </NuxtLink>
    </div>
  </BlogPosts>
</template>
<script setup>
defineProps({
  limit: {
    type: Number,
    default: null,
  },
})
</script>
