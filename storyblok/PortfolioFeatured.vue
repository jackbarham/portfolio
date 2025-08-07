<template>
  <section v-editable="blok" class="portfolio-featured">
    <div class="bg-brand-grey-light py-16 md:py-20 lg:py-28">
      <div class="layout-wide">
        <div class="max-w-lg md:max-w-full mx-auto">
          <!-- <HeadingSection :heading="blok" /> -->
          <header class="md:flex items-center justify-between md-8 md:mb-12">
            <h1 class="text-4xl md:text-5xl font-black">{{ blok.heading }}</h1>
            <ButtonLight
              v-if="blok.cta_link"
              :url="blok.cta_link"
              :text="blok.cta_text"
              class="invisible md:visible"
            />
          </header>
          <PortfolioGrid :posts="resolvedData" />
          <ButtonLight
            v-if="blok.cta_link"
            :url="blok.cta_link"
            :text="blok.cta_text"
            class="visible md:invisible mt-8"
          />
        </div>
        
        
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({ blok: Object })

const { resolvedData } = useResolveRelations(
  computed(() => props.blok.featured_projects), 
  'portfolio-featured.featured_projects'
)
</script>