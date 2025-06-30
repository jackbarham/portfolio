<template>
  <section class="portfolio-grid">
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      <div v-for="(post, index) in posts" :key="post.uuid">
        <NuxtLink :to="post.full_slug" class="block mb-4">
          <div class="aspect-3/2">
            <NuxtImg
              :loading="index === 0 ? 'eager' : 'lazy'"
              :src="post.content.preview.filename"
              :alt="post.content.heading"
              sizes="360 sm:600 md:570"
              format="webp"
              class="w-full h-full object-cover rounded bg-gray-100 mb-2"
            />
            <h2 class="text-2xl/10 md:text-xl/7">{{ post.content.heading }}</h2>
            <span class="text-base text-gray-700">{{ post.content.type }}</span>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
const posts = ref(null)

const storyblokApi = useStoryblokApi()
const { data } = await storyblokApi.get('cdn/stories', {
  starts_with: 'portfolio',
  is_startpage: false,
  sort_by: 'first_published_at:desc'
})
posts.value = data.stories
</script>