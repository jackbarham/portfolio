<template>
  <section v-editable="blok" class="article">
    <div class="layout-wide">
      <article class="prose mx-auto max-w-[720px]" v-html="renderRichText(blok.copy)"></article>
    </div>
  </section>
</template>

<script setup>
defineProps({ blok: Object })
</script>