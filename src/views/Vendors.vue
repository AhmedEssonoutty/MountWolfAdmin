<template>
  <div class="main-body m-3">
    <p class="style-3">
      {{ route.name }}
    </p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute()
</script>

<style lang="scss" scoped></style>
