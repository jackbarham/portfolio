<template>
  <div v-editable="blok">
    <div class="layout-block">
      <article class="max-w-[768px] mx-auto py-16 md:py-28">
        <p>Portfolio</p>
      </article>
    </div>
  </div>
</template>
 
<script setup>
defineProps({ blok: Object })
</script>