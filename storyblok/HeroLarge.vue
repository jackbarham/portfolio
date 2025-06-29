<template>
  <section v-editable="blok" class="hero-large">
    <div class="bg-brand-purple py-16 md:py-24 lg:py-32">
      <div class="px-8 lg:px-12 xl:px-20 mb-10 md:mb-12">
        <div class="text-white text-center max-w-[480px] md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto">
          <h1 class="text-5xl/14 md:text-6xl/18 lg:text-7xl/22 xl:text-8xl/28 mb-8">{{ blok.heading }}</h1>
          <p class="text-xl/7 md:text-2xl/8 lg:text-3xl/10 font-normal px-2 sm:px-8 md:px-16 lg:px-20 xl:px-20 antialiased">{{ blok.intro }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({ blok: Object })
</script>