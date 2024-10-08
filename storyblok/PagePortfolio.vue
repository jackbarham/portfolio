<template>
  <div v-editable="blok" class="page-portfolio">
    <article class="layout-wide">
      <HeadingLarge />
      <div class="py-8 md:py-28">
        <div class="grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-12">
          <div class="w-full">
            <div v-for="(item, index) in blok.gallery" :key="item._uid" class="mb-4 p-4 pb-0 sm:p-8 sm:pb-0 lg:mb-8 rounded-lg bg-brand-yellow">
              <NuxtImg
                :loading="index === 0 ? 'eager' : 'lazy'"
                :width="getWidth(item.image.filename)"
                :height="getHeight(item.image.filename)"
                sizes="400 sm:600 md:900 lg:650"
                format="webp"
                class="mx-auto rounded rounded-b-none"
                :src="item.image.filename"
                :alt="item.image.alt"
              />
            </div>
          </div>
          <div class="w-full lg:w-[380px]">
            <div class="mb-12">
              <h2 class="text-2xl lg:text-3xl mb-4">Client</h2>
              <div class="prose" v-html="renderRichText(blok.client)"></div>
            </div>
            <div class="">
              <h2 class="text-2xl lg:text-3xl mb-4">Scope</h2>
              <div class="prose" v-html="renderRichText(blok.scope)"></div>
            </div>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>
 
<script setup>
defineProps({ blok: Object })

// Helper function to extract the width from the filename
const getWidth = (filename) => {
  const match = filename.match(/\/(\d+)x(\d+)\//)
  return match ? parseInt(match[1], 10) : null // Return width
}

// Helper function to extract the height from the filename
const getHeight = (filename) => {
  const match = filename.match(/\/(\d+)x(\d+)\//)
  return match ? parseInt(match[2], 10) : null // Return height
}
</script>