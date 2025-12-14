<template>
    <section class="portfolio-grid">
    <div class="max-w-lg md:max-w-full mx-auto">
      <ClientOnly>
        <div class="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
          <div 
            v-for="(post, index) in posts" 
            :key="post.uuid"
            ref="gridItems"
            class="portfolio-item"
          >
            <NuxtLink :to="post.full_slug" class="block group">
              <div class="relative aspect-3/2 mb-2 bg-gray-100 rounded-md overflow-hidden">
                <NuxtImg
                  :loading="index === 0 ? 'eager' : 'lazy'"
                  :src="post.content.preview.filename"
                  :alt="post.content.heading"
                  sizes="260 sm:440 md:360 lg:470 xl:340"
                  format="webp"
                  class="w-full h-full object-cover opacity-100 group-hover:opacity-80 transition-opacity duration-200"
                />
              </div>
              <h2 class="text-2xl/9 md:text-xl/7 group-hover:text-brand-red duration-200">{{ post.content.heading }}</h2>
              <span class="text-gray-600">{{ post.content.type }}</span>
            </NuxtLink>
          </div>
        </div>
        <template #fallback>
          <!-- Loading state for SSR -->
          <div class="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
            <div v-for="n in 6" :key="n" class="animate-pulse">
              <div class="aspect-3/2 mb-2 bg-gray-200 rounded-md"></div>
              <div class="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div class="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
          </div>
        </template>
      </ClientOnly>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  posts: {
    type: Object,
    required: true,
  },
})

const gridItems = ref([])
</script>