<script setup>
import { RouterView } from "vue-router";
import MainLayout from "@/components/global/MainLayout.vue";
import { useRoute } from "vue-router";
import { onMounted } from "vue";
const route = useRoute();
</script>

<template>
  <MainLayout className="light">
    <div :class="`${route.name == 'signin' ? 'main-body' : 'content'}`">
      <RouterView />
    </div>
  </MainLayout>
</template>

<style scoped></style>
