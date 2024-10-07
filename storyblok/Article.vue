<template>
  <section v-editable="blok" class="article">
    <article class="prose" v-html="renderRichText(blok.copy)"></article>
  </section>
</template>

<script setup>
defineProps({ blok: Object })
</script>