<template>
  <div class="flex items-center">
    <div class="text-xs hidden md:flex">Change to {{ nextMode }}</div>
    <button class="p-0 md:p-5" @click.prevent="toggleMode">
      {{ nextModeIcon }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { useColorMode } from '#imports'
const colorMode = useColorMode()
const modes = ['light', 'dark', 'system']
const nextModeIcons = {
  light: '🌞',
  dark: '🌙',
  system: '🌐',
}
const nextMode = computed(() => {
  const currentIndex = modes.indexOf(colorMode.preference)
  return modes[(currentIndex + 1) % modes.length]
})

const nextModeIcon = computed(() => nextModeIcons[nextMode.value])

const toggleMode = () => {
  colorMode.preference = nextMode.value
}
</script>
