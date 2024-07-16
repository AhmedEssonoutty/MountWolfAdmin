<template>
  <div class="main-body">
    <p class="style-3">
      {{ route.name }}
    </p>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<style lang="scss" scoped></style>
