<template>
  <div
    v-show="language"
    class="w-full text-lg bg-gray-400 dark:bg-gray-800 flex items-center justify-between px-2"
  >
    <div class="flex">
      <span class="mr-2">#</span>
      <span class="">{{ language }}</span>
    </div>
    <button class="flex hover:text-green-300" @click.prevent="copyCode">
      {{ copyStatus || 'Copy' }}
    </button>
  </div>
  <pre :class="$props.class" class="mt-0" v-bind="$attrs"><slot /></pre>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const copyStatus = ref('')
const props = defineProps({
  code: {
    type: String,
    default: '',
  },
  language: {
    type: String,
    default: null,
  },
  filename: {
    type: String,
    default: null,
  },
  highlights: {
    type: Array as () => number[],
    default: () => [],
  },
  meta: {
    type: String,
    default: null,
  },
  class: {
    type: String,
    default: null,
  },
})
const copyCode = async () => {
  try {
    await navigator.clipboard.writeText(props.code)
    copyStatus.value = 'Copied!'
    setTimeout(() => (copyStatus.value = ''), 2000) // Reset status after 2 seconds
  } catch (err) {
    console.error('Failed to copy text: ', err)
    copyStatus.value = 'Failed to copy'
    setTimeout(() => (copyStatus.value = ''), 2000)
  }
}
</script>

<style>
pre code .line {
  display: block;
}
</style>
