<template>
  <header class="mb-14 md:mb-16 text-center max-w-xs sm:max-w-full mx-auto">
    <h1 class="text-2xl md:text-4xl font-[800]">{{ text }}</h1>
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