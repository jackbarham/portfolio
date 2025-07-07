<template>
  <div class="flex flex-col h-screen justify-between">
    <MainHeader />
    <main role="main" class="mb-auto pt-16 md:pt-18">
      <div class="relative overflow-hidden">
        <slot />
        <!-- <NavigationBar class="fixed bottom-0 w-full " /> -->
      </div>
    </main>
    <MainFooter />
  </div>
</template>

<script setup>
//
</script>
