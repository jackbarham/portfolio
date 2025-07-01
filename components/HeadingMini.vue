<template>
  <header class="mb-12 lg:mb-16 text-center">
    <h1 class="text-3xl md:text-4xl font-[800]">{{ text }}</h1>
  </header>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
})
</script>