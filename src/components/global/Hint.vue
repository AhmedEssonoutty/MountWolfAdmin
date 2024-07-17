<template>
  <div class="hint p-4">
    <p class="style-3 m-0">
      {{ route.name }}
    </p>
    <div class="child" v-if="route.name == 'vendors'">
      <div class="vr mx-3"></div>
      <p class="m-0 my-auto">{{ route.query.title }}</p>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<style lang="scss" scoped></style>
