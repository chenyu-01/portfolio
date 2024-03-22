<template>
  <button
    class="flex items-center menu-hover md:p-5 p-0"
    @click.prevent="toggleMode"
  >
    <p class="md:text-lg font-normal hidden md:flex">Toggle Theme:</p>
    <p>
      {{ currentModeIcon }}
    </p>
  </button>
</template>

<script setup lang="ts">
import { useColorMode } from '#imports'
const colorMode = useColorMode()
const modes = ['light', 'dark', 'system']
const ThemeIcons = {
  light: '🌞',
  dark: '🌙',
  system: '🌐',
}
const nextMode = computed(() => {
  const currentIndex = modes.indexOf(colorMode.preference)
  return modes[(currentIndex + 1) % modes.length]
})

const currentModeIcon = computed(() => {
  return ThemeIcons[colorMode.preference]
})

const toggleMode = () => {
  colorMode.preference = nextMode.value
}
</script>
