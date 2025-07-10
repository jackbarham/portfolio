<template>
  <header class="mb-16 md:mb-20 text-center max-w-3xs xs:max-w-full mx-auto">
    <h1 class="text-3xl/10 sm:text-4xl font-[800]">{{ text }}</h1>
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