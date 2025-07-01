<template>
  <section class="portfolio-grid">
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      <div v-for="(post, index) in posts" :key="post.uuid">
        <NuxtLink :to="post.full_slug" class="block mb-4 group">
          <div class="relative aspect-3/2 mb-2">
            <NuxtImg
              :loading="index === 0 ? 'eager' : 'lazy'"
              :src="post.content.preview.filename"
              :alt="post.content.heading"
              sizes="360 sm:600 md:570"
              format="webp"
              class="w-full h-full object-cover rounded bg-gray-100 opacity-100 group-hover:opacity-80 transition-opacity duration-200"
            />
          </div>
          <h2 class="text-2xl/9 md:text-xl/7 group-hover:text-brand-red duration-200">{{ post.content.heading }}</h2>
          <span class="text-base text-gray-700">{{ post.content.type }}</span>
        </NuxtLink>
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