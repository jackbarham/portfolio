<template>
  <header class="header">
    <div class="h-20 flex justify-between items-center max-w-7xl layout-w-normal">
      <h1 class="text-3xl">Jack Barham</h1>
      <ul class="hidden md:flex space-x-16">
        <li v-for="page in pages" :key="page.url">
          <NuxtLink :to="page.url" class="relative group font-transducer font-medium tracking-wide">
            <span class="block">{{ page.title }}</span>
            <!-- Pseudo-element underline effect -->
            <span class="relative block">
              <span class="absolute left-0 bottom-0 h-[2px] bg-black w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-in-out origin-left opacity-80"></span>
            </span>
          </NuxtLink>
        </li>
      </ul>
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
