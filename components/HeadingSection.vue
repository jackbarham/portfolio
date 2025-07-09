<template>
  <header class="mb-8">
    <h1 class="text-4xl md:text-5xl font-black">{{ heading.heading }}</h1>
    <ButtonLight
      v-if="heading.cta_link.cached_url"
      :url="heading.cta_link.cached_url"
      :text="heading.cta_text"
      class=" mt-3"
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