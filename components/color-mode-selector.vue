<template>
  <div class="flex space-x-2 items-center">
    <div :class="{ invisible: !showNextModeLabel }" class="text-xs">
      Change to {{ nextMode }}
    </div>
    <button
      class="p-5"
      @click.prevent="toggleMode"
      @mouseenter="showNextModeLabel = true"
      @mouseleave="showNextModeLabel = false"
    >
      {{ nextModeIcon }}
    </button>
  </div>
</template>

<script setup>
const showNextModeLabel = ref(false)
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
