<template>
  <div>
    <HeaderCom v-if="route.name !== 'signin'"></HeaderCom>
    <div class="row content">
      <SideBar v-if="route.name !== 'signin' && !navResponse" @collapse="navResponse = true" class="col-2"
        style="height: 100% !important"></SideBar>

      <SideBarCollapse @collapse="navResponse = false" :collapse="navResponse" class="col-1"
        style="height: 100% !important; " v-if="route.name !== 'signin' && navResponse">
      </SideBarCollapse>

      <main :class="`${route.name == 'signin' ? 'col-12' : 'col'
        } min-vh-100 p-0 border-top `">
        <Hint v-if="route.name !== 'signin'"></Hint>
        <div>
          <slot></slot>
        </div>
      </main>

    </div>
    <!-- footer -->
  </div>
</template>

<script setup>
import HeaderCom from "./HeaderCom.vue";
import SideBar from "./SideBar.vue";
import SideBarCollapse from "./SideBarCollapse.vue";
import Hint from "./Hint.vue";
import { useRoute } from "vue-router";
import { ref, onMounted, watch } from "vue";

const route = useRoute();
const navResponse = ref(false)
const viewWidth = ref(window.innerWidth)

const handleResize = () => {
  viewWidth.value = window.innerWidth;
};


onMounted(() => {
  window.addEventListener('resize', handleResize);
})


watch(viewWidth, (newVal) => {
  window.innerWidth <= 992 ? navResponse.value = true : navResponse.value = false

});
</script>

<style lang="scss" scoped></style>
