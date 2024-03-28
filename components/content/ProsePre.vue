<template>
  <pre
    ref="preTag"
    :class="$props.class"
    class="relative overflow-hidden h-[200px]"
  >
    <header 
    v-show="language"
    class="absolute w-full h-8 text-lg bg-gray-400 dark:bg-gray-800 top-0 left-0 flex items-center justify-between px-2">
      <div class="flex" >
        <span class="mr-2">#</span>
        <span class="">{{ language }}</span>
      </div>
      <button class=" flex dark:text-green-400 hover:text-gray-700 dark:hover:text-gray-300" @click.prevent="copyCode">
          {{ copyStatus || 'Copy' }}
      </button>
    </header>
    <div ref="container" class="absolute px-3 overflow-x-auto overflow-y-hidden  top-0 bottom-0 left-0 right-0 ">
      <slot />
    </div>
  </pre>
</template>

<script setup lang="ts">
import { ref, defineProps, onMounted } from 'vue'
const copyStatus = ref('')
const container = ref()
const preTag = ref()
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
const adjustHeight = () => {
  if (container.value) {
    // This example assumes you want to directly use the scrollHeight of the container.
    // For specific content within the slot, you'd measure that element specifically.
    container.value.style.height = `${container.value.scrollHeight}px`
    // Set the height of the pre tag to the height of the container
    preTag.value.style.height = `${container.value.scrollHeight}px`
  }
  // The default height of the pre tag is 200px already set in the template
}
onMounted(adjustHeight)
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
