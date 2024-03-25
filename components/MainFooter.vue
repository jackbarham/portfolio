<template>
  <footer class="footer">
    <p>Footer - &copy; {{ year }}</p>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>