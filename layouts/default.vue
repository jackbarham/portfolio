<template>
  <div class="flex flex-col h-screen">
    <MainHeader />
    <main 
      role="main" 
      class="flex-1 pt-16 md:pt-18 relative shadow"
      :class="{ 'pb-6 md:pb-8': isPortfolioItem }"
    >
      <div class="relative min-h-full">
        <slot />
        
        <Transition
          name="slide-up"
          enter-active-class="transition-transform duration-200 ease-out"
          leave-active-class="transition-transform duration-200 ease-in"
          enter-from-class="transform translate-y-full"
          enter-to-class="transform translate-y-0"
          leave-from-class="transform translate-y-0"
          leave-to-class="transform translate-y-full"
        >
          <NavigationBar 
            v-if="isPortfolioItem"
            :current-slug="$route.path.replace('/', '')" 
            class="sticky bottom-4 left-0 right-0 z-50 mx-8"
          />
        </Transition>
      </div>
    </main>
    <MainFooter />
  </div>
</template>

<script setup>
const route = useRoute()

const isPortfolioItem = computed(() => {
  return route.path.startsWith('/portfolio/') && route.path !== '/portfolio'
})
</script>