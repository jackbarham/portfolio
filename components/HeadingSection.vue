<template>
  <header class="flex items-center justify-between mb-12">
    <h1 class="text-4xl md:text-5xl font-black">{{ heading.heading }}</h1>
    <ButtonLight
      v-if="heading.cta_link"
      :url="heading.cta_link"
      :text="heading.cta_text"
      class="hidden lg:block"
    />
  </header>
</template>

<script setup>
defineProps({
  heading: {
    type: Object,
    required: true,
  },
})
</script>