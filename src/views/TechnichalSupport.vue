<template>
  <div class="m-4">
    <div class="row">
      <div class="col-8 me-0 main-body">
        <SupportMessages></SupportMessages>
      </div>
      <div class="col main-body">
        <Messages></Messages>
      </div>
    </div>
  </div>
</template>

<script setup>
import Messages from "@/components/page-component/Support/UserMessages.vue";
import SupportMessages from "@/components/page-component/Support/SupportMessages.vue";
</script>

<style lang="scss" scoped></style>
