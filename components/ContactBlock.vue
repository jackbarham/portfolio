<template>
  <section class="contact-block">
    <div class="bg-brand-grey-light py-20 md:py-24">
      <div class="layout-wide">
        <div class="max-w-2xl mx-auto">
          <h1 class="text-3xl mb-7">{{ content.contact_heading }}</h1>
          <div class="prose prose-article">
            <article class="!font-medium mb-8" v-html="renderRichText(content.contact_copy)"></article>
            <a class="inline-flex font-semibold items-center text-2xl md:text-xl" :href="`mailto:${content.email}`">{{ content.email }}</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  content: {
    type: Object,
    required: true,
  },
})
</script>