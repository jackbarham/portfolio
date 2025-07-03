<template>
  <section v-editable="blok" class="testimonials">
    <div class="relative bg-brand-yellow pt-16 pb-24">

      <carousel 
        ref="testimonyCarousel" 
        :items-to-show="1" 
        :wrap-around="true" 
        :touch-drag="{ threshold: 0.1 }"
        :mouse-drag="{ threshold: 0.1 }"
      >
        <slide v-for="testimony in blok.testimonials" :key="testimony._uid">
          <div class="relative z-50 text-center px-8 sm:px-12 lg:px-12 xl:px-20">
            <p class="text-2xl/9 font-medium">{{ testimony.quote }}</p>
          </div>
        </slide>

        <template #addons>
          <Pagination />
        </template>

      </carousel>

      <button @click="testimonyCarousel.prev()" class="hidden absolute left-12 bottom-12 w-8 h-8 md:w-10 md:h-10 rounded-full cursor-pointer">
        <svgo-arrow-left filled class="text-brand-red" />
      </button>
      <button @click="testimonyCarousel.next()" class="hidden absolute right-12 bottom-12 w-8 h-8 md:w-10 md:h-10 rounded-full cursor-pointerr">
        <svgo-arrow-right filled class="text-brand-red" />
      </button>
    </div>
  </section>
</template>

<script setup>
defineProps({ blok: Object })

const testimonyCarousel = ref(null)
</script>