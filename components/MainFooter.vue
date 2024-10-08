<template>
  <footer class="footer">
    <div class="bg-gray-950 py-16 md:py-20">
      <div class="lg:flex justify-between items-center md:flex-row-reverse layout-full">
        <ul class="flex justify-center lg:justify-normal mr-4 lg:mr-0 mb-16 lg:mb-0">
          <li v-for="social in socials" :key="social.id" class="ml-4">
            <NuxtLink :to="social.url" target="_blank" class="block bg-white hover:bg-brand-red p-3 rounded" :aria-label="`Jack Barham on ${social.name}`">
              <span class="block h-8 w-8">
                <component :is="icons[social.id]" filled class="text-black" />
              </span>
            </NuxtLink>
          </li>
        </ul>
        <div class="text-gray-100 text-center lg:text-left">
          <h1 class="text-xl mb-1">
            <NuxtLink to="/" class="hover:text-brand-red">Jack Barham</NuxtLink>
          </h1>
          <p class="text-sm mb-6 max-w-56 md:max-w-full mx-auto">Web development, interface design and consultancy.</p>
          <p class="text-xs text-gray-400">Copyright &copy; 2010 - {{ year }} Airbox Media Ltd</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()

const socials = [
  {
    id: 'x',
    name: 'X / Twitter',
    url: 'https://x.com/jackbarham',
  },
  {
    id: 'youtube',
    name: 'YouTube',
    url: 'https://www.youtube.com/@jackbarham',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/jackbarham',
  },
  {
    id: 'producthunt',
    name: 'Product Hunt',
    url: 'https://www.producthunt.com/@jackbarham',
  }
]

const icons = {
  x: 'svgo-x',
  youtube: 'svgo-youtube',
  linkedin: 'svgo-linkedin',
  producthunt: 'svgo-producthunt'
}
</script>