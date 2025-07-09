<template>
  <div v-editable="blok" class="page-about">
    <article class="layout-wide">
      <div class="py-10 md:py-16 lg:py-24">
        <div class="prose prose-article">
          <h1>{{ blok.heading }}</h1>
          <article class="" v-html="renderRichText(blok.copy)"></article>
          <a class="font-family-heading font-bold text-2xl" href="mailto:jack@airboxmedia.com">{{ blok.email }}</a>
        </div>
      </div>
    </article>
  </div>
</template>
 
<script setup>
defineProps({ blok: Object })
</script>