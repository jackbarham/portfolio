<template>
  <div v-editable="blok" class="page-about">
    <article class="layout-wide">
      <div class="py-10 md:py-16 lg:py-24">
        <div class="max-w-2xl lg:max-w-4xl mx-auto mb-16 rounded-xl overflow-hidden">
          <NuxtImg
            :src="blok.image.filename"
            :alt="blok.image.alt"
            sizes="360 sm:620 md:760 lg:900 xl:1200"
            format="webp"
            class="w-full"
          />
        </div>
        <article class="prose prose-article" v-html="renderRichText(blok.article)"></article>
      </div>
    </article>
  </div>
</template>
 
<script setup>
defineProps({ blok: Object })
</script>