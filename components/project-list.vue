<template>
  <p class="mb-10">My Github Projects</p>
  <section v-if="pending">Loading...</section>
  <section v-else-if="error">Something went wrong... Try Again</section>
  <section v-else>
    <ul class="grid grid-cols-1 gap-4">
      <li
        v-for="repo in repos"
        :key="repo.id"
        class="border border-green-200 rounded-sm p-4 hover:bg-green-100 font-mono"
      >
        <a :href="repo.html_url" target="_blank">
          <div class="flex items-center justify-between text-sm">
            <div class="font-semibold">
              {{ repo.name }}
            </div>
            <div>{{ repo.stargazers_count }} ⭐</div>
          </div>
          <p class="text-sm">{{ repo.description }}</p>
        </a>
      </li>
    </ul>
  </section>
</template>
<script setup>
import { useFetch } from 'nuxt/app'

const { error, pending, data } = await useFetch(
  'https://api.github.com/users/chenyu-01/repos'
)
const repos = computed(() =>
  data.value.filter((repo) => repo.description !== null)
)
</script>
