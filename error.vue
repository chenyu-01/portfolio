<template>
  <NuxtLayout>
    <section class="prose max-w-none">
      <h1>Opps {{ error.statusCode }}</h1>
      <p class="text-xl">{{ error.statusMessage }}</p>
      <h2>Details</h2>
      <pre>{{ error }}</pre>
    </section>
  </NuxtLayout>
</template>
<script setup>
defineProps({
  error: {
    type: Object,
    required: true,
  },
})
</script>
