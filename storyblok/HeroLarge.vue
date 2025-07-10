<template>
  <section v-editable="blok" class="hero-large">
    <div class="bg-brand-purple py-16 md:py-24 lg:py-28">
      <div class="px-4 lg:px-12 xl:px-20 mb-10">
        <div class="text-white text-center max-w-[340px] sm:max-w-xl md:max-w-2xl lg:max-w-[700px] xl:max-w-4xl mx-auto">
          <h1 class="text-5xl/14 md:text-6xl/18 lg:text-7xl/22 xl:text-[88px]/26 mb-8">{{ blok.heading }}</h1>
          <p class="text-xl/7 lg:text-3xl/10 font-normal px-2 sm:px-8 md:px-16 lg:px-12 xl:px-20 opacity-95">{{ blok.intro }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({ blok: Object })
</script>