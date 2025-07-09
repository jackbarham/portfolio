<template>
  <div v-editable="blok" class="page-about">
    <article class="layout-wide">
      <div class="py-10 md:py-16 lg:py-24">
        <div class="max-w-2xl lg:max-w-4xl mx-auto bg-gray-100 mb-10 md:mb-16 rounded md:rounded-xl overflow-hidden">
          <NuxtImg
            :width="imageWidth(blok.image.filename)"
            :height="imageHeight(blok.image.filename)"
            :src="blok.image.filename"
            :alt="blok.image.alt"
            sizes="260 sm:420 md:560 lg:500 xl:700"
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

const { imageWidth, imageHeight } = useImageDimensions()
</script>