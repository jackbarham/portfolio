<template>
  <section v-editable="blok" class="agencies">
    <div class="py-18 md:py-22 lg:py-36">
      <HeadingMini :text="blok.heading" />
      <div class="lg:max-w-7xl layout-full mx-auto">
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4 items-center justify-center">
          <a
            v-for="brand in brands"
            :key="brand.id"
            :href="brand.url"
            :aria-label="brand.name"
            target="_blank"
            class="flex items-center justify-center transition-opacity duration-200 border border-gray-200 hover:border-brand-red rounded-lg px-10 py-8 md:px-14 md:py-12"
          >
            <span class="block w-24 md:w-36 h-12">
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
    url: 'https://www.foolproof.co.uk',
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