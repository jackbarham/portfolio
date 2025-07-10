<template>
  <div v-editable="blok" class="page-about">
    <article class="layout-wide">
      <div class="py-10 md:py-16 lg:py-24">
        <div class="max-w-2xl mx-auto">
          <h1 class="max-w-4xl font-heading font-black text-4xl md:text-5xl lg:text-6xl mb-10">{{ blok.heading }}</h1>
          <div class="prose prose-article">      
            <article class="" v-html="renderRichText(blok.copy)"></article>
            <a 
              class="text-lg font-semibold inline-flex justify-center items-center gap-2 mt-8 border border-brand-red hover:bg-brand-red h-14 px-12 rounded-full group" 
              href="mailto:jack@airboxmedia.com"
            >
              <span class="text-brand-red group-hover:text-white">{{ blok.email }}</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>
 
<script setup>
defineProps({ blok: Object })
</script>