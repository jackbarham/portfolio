<template>
  <footer class="footer">
    <div class="bg-gray-950 py-16 md:py-20">
      <div class="lg:flex justify-between items-center md:flex-row-reverse layout-full">
        <ul class="flex justify-center lg:justify-normal lg:mr-0 mb-12 lg:mb-0">
          <li v-for="social in socials" :key="social.id" class="px-1 md:p-0 md:ml-3">
            <NuxtLink :to="social.url" target="_blank" class="block bg-white hover:bg-brand-red p-4 rounded-full" :aria-label="`${appTitle} on ${social.name}`">
              <span class="block h-9 w-9">
                <component :is="icons[social.id]" filled class="text-black" />
              </span>
            </NuxtLink>
          </li>
        </ul>
        <div class="text-gray-100 text-center lg:text-left">
          <h1 class="text-3xl lg:text-2xl font-heading mb-1">
            <NuxtLink to="/" class="hover:text-brand-red">{{ appTitle }}</NuxtLink>
          </h1>
          <p class="text-sm mb-12 lg:mb-6 max-w-60 lg:max-w-full mx-auto tracking-wide">Web development, interface design and digital consultancy.</p>
          <p class="text-xs text-gray-400 tracking-wide">Copyright &copy; 2010 - {{ year }} Airbox Media Ltd</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const appTitle = useRuntimeConfig().public.appTitle

const year = new Date().getFullYear()

const socials = [
  {
    id: 'x',
    name: 'X / Twitter',
    url: 'https://x.com',
  },
  {
    id: 'youtube',
    name: 'YouTube',
    url: 'https://www.youtube.com',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com',
  },
  {
    id: 'producthunt',
    name: 'Product Hunt',
    url: 'https://www.producthunt.com',
  }
]

const icons = {
  x: 'svgo-x',
  youtube: 'svgo-youtube',
  linkedin: 'svgo-linkedin',
  producthunt: 'svgo-producthunt'
}
</script>