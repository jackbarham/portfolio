<template>
  <section class="heading-large">
    <div class="py-8 md:py-24">
      <h1 class="max-w-4xl font-heading font-black text-4xl md:text-5xl lg:text-6xl">{{ heading }}</h1>
      <div v-if="intro" class="max-w-3xl text-base font-medium lg:text-xl/8 mt-6" v-html="renderRichText(intro)"></div>
    </div>
  </section>
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