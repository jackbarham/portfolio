<template>
  <section v-editable="blok" class="article">
    <div class="layout-wide">
      <article class="prose prose-article" v-html="renderRichText(blok.copy)"></article>
    </div>
  </section>
</template>

<script setup>
defineProps({ blok: Object })
</script>