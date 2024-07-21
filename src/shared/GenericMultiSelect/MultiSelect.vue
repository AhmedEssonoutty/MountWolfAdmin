<template>
  <div class="input_field center-col">
    <div class="input_container">
      <span
        class="feild_icon"
        v-html="field.icon"
        v-if="field.showLabel"
      ></span>
      <multiselect
        :searchable="field.searchable"
        :placeholder="field.placeholder"
        :v-model="field.value"
        :groups="true"
        :options="field.options"
        :taggable="field.taggable"
        :mode="field.mode"
        :label="field.label"
        :valueProp="field.valueProp"
        @change="field.change"
        @clear="field.clear"
        :disabled="field.disabled"
        class="select-users"
      />
    </div>
  </div>
</template>

<script setup>
import Multiselect from "vue-multiselect";
import { defineProps, onMounted } from "vue";

const { field } = defineProps({
  field: {
    type: Object,
    required: true,
    default: () => ({}),
  },
});
</script>

<style lang="scss" scoped>
// .multiselect {
//   .select-users input::placeholder {
//     font-size: var(--fs-14) !important;
//   }
//   min-width: 150px;
//   border: none !important;
//   .multiselect-wrapper {
//     align-items: center;
//     box-sizing: border-box;
//     cursor: pointer;
//     display: flex;
//     justify-content: flex-end;
//     margin: 0 auto;
//     outline: none;
//     position: relative;
//     width: 100%;
//     font-size: var(--fs-14) !important;
//     .multiselect-search {
//       position: absolute;
//       right: 0;
//       top: 0;
//       width: 100%;
//       height: 3.8rem;
//       min-height: 20px;
//       border-radius: 10px;
//     }
//   }
// }
</style>
