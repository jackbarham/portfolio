<template>
  <section class="portfolio-grid">
    <div class="max-w-lg md:max-w-full mx-auto">
      <div class="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
        <div v-for="(post, index) in posts" :key="post.uuid">
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
    </div>
  </section>
</template>

<script setup>
defineProps({
  posts: {
    type: Object,
    required: true,
  },
})
</script>