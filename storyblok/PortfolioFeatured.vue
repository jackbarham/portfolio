<template>
  <section v-editable="blok" class="portfolio-featured">
    <div class="bg-brand-grey-light py-16 md:py-20 lg:py-28">
      <div class="layout-wide">
        <div class="max-w-lg md:max-w-full mx-auto">
          <HeadingSection :heading="blok" />
        </div>
        <PortfolioGrid :posts="resolvedData" />
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