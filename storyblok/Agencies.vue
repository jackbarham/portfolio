<template>
  <section v-editable="blok" class="agencies">
    <div class="py-18 md:py-22 lg:py-36">
      <HeadingMini :text="blok.heading" />
      <div class="max-w-xs sm:max-w-md lg:max-w-7xl layout-full mx-auto">
        <div class="grid grid-cols-2 lg:grid-cols-6 gap-x-14 gap-y-12 sm:gap-12 md:gap-16 lg:gap-4 items-center justify-center">
          <a
            v-for="brand in brands"
            :key="brand.id"
            :href="brand.url"
            :aria-label="brand.name"
            target="_blank"
            class="flex items-center justify-center lg:px-6 transition-opacity duration-200 hover:opacity-75"
          >
            <span class="block opacity-95">
              <component :is="icons[brand.id]" filled class="text-black w-full h-full" />
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>  
defineProps({ blok: Object })

const brands = [
    {
    id: 'mccann',
    name: 'McCann',
    url: 'https://www.mccann.com',
  },
  {
    id: 'mcsaatchi',
    name: 'M&C Saatchi',
    url: 'https://www.mccsaatchi.com',
  },
  {
    id: 'mof',
    name: 'Matter of Form',
    url: 'https://www.matterofform.com',
  },
  {
    id: 'stellar',
    name: 'Stellar',
    url: 'https://www.stellar.agency',
  },
  {
    id: 'sectorlight',
    name: 'Sectorlight',
    url: 'https://www.sectorlight.com',
  },
  {
    id: 'foolproof',
    name: 'foolproof',
    url: 'https://www.foolproof.com',
  }
]

const icons = {
  foolproof: 'svgo-agency-foolproof',
  mccann: 'svgo-agency-mccann',
  mcsaatchi: 'svgo-agency-mcsaatchi',
  mof: 'svgo-agency-mof',
  stellar: 'svgo-agency-stellar',
  sectorlight: 'svgo-agency-sectorlight',
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