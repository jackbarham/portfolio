<template>
  <div v-editable="blok" class="page-portfolio">
    <div class="layout-wide">
      <div class="container">
        <HeadingLarge />
      <article class="py-16 md:py-28">
        <p>Portfolio</p>
      </article>
      </div>
    </div>
  </div>
</template>
 
<script setup>
defineProps({ blok: Object })
</script>