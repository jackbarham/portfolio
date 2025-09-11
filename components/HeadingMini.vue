<template>
  <header class="mb-12 md:mb-16 text-center max-w-2xs xs:max-w-full mx-auto">
    <h1 class="text-4xl/12 md:text-5xl/14 font-[800]">{{ text }}</h1>
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