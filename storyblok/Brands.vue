<template>
  <section v-editable="blok" class="brands">
    <div class="py-16 md:py-20 lg:py-32">
      <HeadingMini :text="blok.heading" />
      <div class="max-w-xs sm:max-w-2xl lg:max-w-6xl layout-full mx-auto">
        <div class="grid grid-cols-3 lg:grid-cols-6 gap-10 sm:gap-12 lg:gap-0 items-center justify-center">
          <NuxtLink
            v-for="brand in brands"
            :key="brand.id"
            :to="brand.url"
            :aria-label="brand.name"
            class="flex items-center justify-center transition-opacity duration-200 hover:opacity-75"
          >
            <span :class="brandSizes[brand.id]" class="block opacity-95">
              <component :is="icons[brand.id]" filled class="text-brand-red" />
            </span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>  
defineProps({ blok: Object })

const brands = [
  {
    id: 'gsk',
    name: 'GSK',
    url: 'https://www.gsk.com',
  },
  {
    id: 'netflix',
    name: 'Netflix',
    url: 'https://www.netflix.com',
  },
  {
    id: 'virgin',
    name: 'Virgin',
    url: 'https://www.virgin.com',
  },
  {
    id: 'mcdonalds',
    name: 'McDonald\'s',
    url: 'https://www.mcdonalds.com',
  },
  {
    id: 'belmond',
    name: 'Belmond',
    url: 'https://www.belmond.com',
  },
  {
    id: 'toyota',
    name: 'Toyota',
    url: 'https://www.toyota.com',
  }
]

const icons = {
  gsk: 'svgo-brand-gsk',
  netflix: 'svgo-brand-netflix',
  virgin: 'svgo-brand-virgin',
  mcdonalds: 'svgo-brand-mcdonalds',
  belmond: 'svgo-brand-belmond',
  toyota: 'svgo-brand-toyota',
}

const brandSizes = {
  gsk: 'w-24 h-18',
  netflix: 'w-28 h-14',
  virgin: 'w-40 h-16',
  mcdonalds: 'w-18 h-18',
  belmond: 'w-32 h-12',
  toyota: 'w-32 h-16',
}
</script>