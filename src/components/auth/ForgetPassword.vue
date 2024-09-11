<template>
  <div class="singBox">
    <p class="head-btn mx-auto">Forget password</p>
    <!-- phase one -->
    <span v-if="phase == 1" class="w-100">
      <PhaseOne @SucceOne="(phase = 2), (email = $event)"></PhaseOne>
    </span>

    <!-- phase two -->
    <span v-if="phase == 2" class="w-100">
      <PhaseTwo @SucceTwo="phase = 3" :mail="email"></PhaseTwo>
    </span>
    <!-- phase two -->
    <span v-if="phase == 3" class="w-100">
      <PhaseThree @succeThree="emits('login')"></PhaseThree>
    </span>
  </div>
</template>

<script setup>
import PhaseOne from "./PhaseOne.vue";
import PhaseTwo from "./PhaseTwo.vue";
import PhaseThree from "./PhaseThree.vue";
import { defineEmits } from "vue";

const emits = defineEmits(["login"]);

import { ref } from "vue";
const phase = ref(1);
const email = ref("");
</script>

<style lang="scss" scoped>
.head-btn {
  font-size: var(--fs-18);
  font-weight: var(--fw-bold);
  margin-inline-start: 5rem;
  color: var(--col-primary) !important;
}
</style>
