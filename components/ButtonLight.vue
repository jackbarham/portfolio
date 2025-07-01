<template>
  <NuxtLink
    :to="url"
    class="text-xl text-brand-red font-medium mt-2 inline-flex items-center group"
  >
    <span class="inline-block">{{ text }}</span>
    <span class="inline-block h-10 w-10 ml-0.5 mt-[1px] transition-transform duration-200 group-hover:translate-x-1">
      <svgo-button-arrow filled class="text-brand-red opacity-90" />
    </span>
  </NuxtLink>
</template>

<script setup>
defineProps({
  url: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
})
</script>