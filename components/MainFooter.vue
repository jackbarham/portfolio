<template>
  <footer class="footer">
    <div class="bg-gray-950">
      <div class="h-20 flex justify-between items-center max-w-7xl layout-w-normal">
        <p class="text-white">Copyright &copy; 2010 - {{ year }} Airbox Media Ltd</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>