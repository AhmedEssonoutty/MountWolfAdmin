<template>
  <div>
    <HeaderCom v-if="route.name !== 'signin'"></HeaderCom>
    <div class="row content">
      <SideBar
        class="col-2"
        style="height: 100% !important"
        v-if="route.name !== 'signin'"
      ></SideBar>

      <main
        :class="`${
          route.name == 'signin' ? 'col-12' : 'col-10'
        } min-vh-100 p-0 border-top  `"
      >
        <Hint></Hint>
        <slot></slot>
      </main>
    </div>
    <!-- footer -->
  </div>
</template>

<script setup>
import HeaderCom from "./HeaderCom.vue";
import SideBar from "./SideBar.vue";
import Hint from "./Hint.vue";
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<style lang="scss" scoped></style>
