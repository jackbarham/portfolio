<template>
  <div class="flex flex-col h-screen">
    <MainHeader />
    <main role="main" class="flex-1 pt-16 md:pt-18 relative">
      <div class="relative min-h-full">
        <slot />
        
        <!-- Portfolio Navigation - sticks to bottom of main viewport only -->
        <NavigationBar 
          v-if="isPortfolioItem"
          :current-slug="$route.path.replace('/', '')" 
          class="sticky bottom-0 left-0 right-0 z-50 mt-auto"
        />
      </div>
    </main>
    <MainFooter />
  </div>
</template>

<script setup>
const route = useRoute()

// Check if current page is a portfolio item (not the main portfolio page)
const isPortfolioItem = computed(() => {
  return route.path.startsWith('/portfolio/') && route.path !== '/portfolio'
})
</script>