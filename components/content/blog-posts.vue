<template>
  <slot :posts="posts">
    <section class="not-prose">
      <header class="column text-gray-400 text-sm p-2">
        <div>date</div>
        <div>title</div>
      </header>
      <ul>
        <li v-for="post in posts" :key="post._path">
          <NuxtLink
            :to="post._path"
            class="column hover:bg-green-200 dark:hover:bg-gray-800 rounded-sm p-2"
          >
            <p
              :class="[{ invisible: !post.displayYear }]"
              class="text-gray-500 hover:visible"
            >
              {{ post.year }}
            </p>
            <p>{{ post.title }}</p>
          </NuxtLink>
        </li>
      </ul>
    </section>
  </slot>
</template>

<script setup>
const props = defineProps({
  limit: {
    type: Number,
    default: null,
  },
})
const { data } = await useAsyncData('blog-list', () => {
  const query = queryContent('blog')
    .only(['_path', 'title', 'publishedAt'])
    .sort({ publishedAt: -1 })
    .where({ _path: { $ne: '/blog' } })

  if (props.limit) {
    query.limit(props.limit)
  }
  return query.find()
})
const posts = computed(() => {
  if (!data.value) {
    return []
  }
  const result = []

  let lastYear = null
  for (const post of data.value) {
    const year = new Date(post.publishedAt).getFullYear()
    post.year = year
    post.displayYear = year !== lastYear
    lastYear = year
    result.push(post)
  }
  return result
})
</script>

<style scoped>
.column {
  display: flex;
  align-items: center;
  @apply space-x-8 border-b border-gray-200 dark:border-gray-700 py-2;
}
</style>
