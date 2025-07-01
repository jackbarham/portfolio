<template>
  <div v-editable="blok" class="page-portfolio">
    <article class="layout-wide">
      <div class="max-w-lg md:max-w-4xl lg:max-w-full mx-auto">
        <HeadingLarge :heading="blok.heading" :intro="blok.intro" />
        <div class="pb-8 md:pb-28">
          <PortfolioGrid :posts="posts" />
        </div>
      </div>
    </article>
  </div>
</template>
 
<script setup>
defineProps({ blok: Object })

const posts = ref(null)

const storyblokApi = useStoryblokApi()
const { data } = await storyblokApi.get('cdn/stories', {
  starts_with: 'portfolio',
  is_startpage: false,
  sort_by: 'first_published_at:desc'
})
posts.value = data.stories
</script>