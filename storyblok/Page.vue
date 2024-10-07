<template>
  <div v-editable="blok">
    <StoryblokComponent v-if="blok.components" v-for="blok in blok.components" :key="blok._uid" :blok="blok" />
  </div>
</template>
 
<script setup>
defineProps({ blok: Object })
</script>