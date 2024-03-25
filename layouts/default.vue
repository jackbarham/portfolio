<template>
  <div class="flex flex-col h-screen justify-between">
    <MainHeader />
    <main role="main" class="mb-auto">
      <div class="overflow-hidden max-w-2xl mx-auto py-16">
        <slot />
      </div>
    </main>
    <MainFooter />
  </div>
</template>

<script setup>
//
</script>
