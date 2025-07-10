<template>
  <div v-editable="blok" class="page-portfolio">
    <article class="layout-wide">
      <div class="max-w-2xl lg:max-w-full mx-auto">
        <HeadingLarge :heading="blok.heading" :intro="blok.intro" />
        <div class="pb-4 md:pb-0">
          <div class="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 lg:gap-10 xl:gap-14">
            <div class="w-full">
              <div v-for="(item, index) in blok.gallery" :key="item._uid" class="mb-4 lg:mb-8 bg-gray-100 rounded-lg overflow-hidden">
                <NuxtImg
                  :loading="index === 0 ? 'eager' : 'lazy'"
                  :width="imageWidth(item.image.filename)"
                  :height="imageHeight(item.image.filename)"
                  :src="item.image.filename"
                  :alt="item.image.alt"
                  sizes="340 sm:550 md:620 lg:680 xl:800"
                  format="webp"
                  class="w-full"
                />
              </div>
            </div>
            <div class="w-full lg:w-[320px] xl:w-[440px]">
              <div class="mb-12">
                <h2 class="text-2xl lg:text-3xl mb-4">Client</h2>
                <div class="prose" v-html="renderRichText(blok.client)"></div>
              </div>
              <div class="mb-8">
                <h2 class="text-2xl lg:text-3xl mb-4">Scope</h2>
                <div class="prose mb-8" v-html="renderRichText(blok.scope)"></div>
                <ul class="">
                  <li class="mb-1"><strong>Stack:</strong> {{ blok.technology }}</li>
                  <li class="mb-1"><strong>Role:</strong> {{ blok.role }}</li>
                  <li><strong>Published:</strong> {{ blok.published }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>
 
<script setup>
defineProps({ blok: Object })

const { imageWidth, imageHeight } = useImageDimensions()
</script>