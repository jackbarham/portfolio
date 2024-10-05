<template>
  <header class="header">
    <div class="bg-brand-primary">
      <div class="h-20 flex justify-between items-center max-w-7xl layout-w-normal">
        <h1 class="text-3xl text-white font-bold">Jack Barham</h1>
        <ul class="hidden md:flex space-x-16">
          <li v-for="page in pages" :key="page.url">
            <NuxtLink :to="page.url" class="relative group text-white text-lg font-medium tracking-wide">
              <span class="block">{{ page.title }}</span>
              <span class="absolute h-[2px] bg-white w-0 group-hover:w-full transition-all opacity-80"></span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup>
const pages = [
  {
    title: 'Home',
    url: '/'
  },
  {
    title: 'About',
    url: '/about'
  },
  {
    title: 'Portfolio',
    url: '/portfolio'
  }
]
</script>