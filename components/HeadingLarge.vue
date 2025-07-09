<template>
  <header class="heading-large">
    <div class="py-10 md:py-16 lg:py-24">
      <h1 class="max-w-4xl font-heading font-black text-4xl md:text-5xl lg:text-6xl">{{ heading }}</h1>
      <div v-if="intro" class="max-w-xl md:max-w-3xl font-medium text-lg md:text-xl/7 lg:text-2xl/9 mt-4 md:mt-6" v-html="renderRichText(intro)"></div>
    </div>
  </header>
</template>

<script setup>
defineProps({
  heading: {
    type: String,
    required: true,
  },
  intro: {
    type: Object,
    required: false,
  },
})
</script>