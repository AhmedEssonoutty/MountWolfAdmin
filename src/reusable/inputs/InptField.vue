<template>
  <div class="inpt-box">
    <label for="inpt-field" class="style-9 mb-4" v-if="props.label">{{
      label
    }}</label>
    <input
      type="text"
      class="admin-register"
      :placeholder="holder"
      :class="appear"
      :value="modelValue"
      :disabled="disable"
      id="inpt-field"
      @input="updateValue($event.target.value)"
    />
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
const emits = defineEmits(["inptData", "update:modelValue"]);

const props = defineProps({
  modelValue: {
    type: [String, Number],
    required: false,
    default: "",
  },
  holder: {
    type: String,
    required: false,
    default: "",
  },
  appear: {
    type: String,
    required: false,
    default: "",
  },
  disable: {
    type: Boolean,
    required: false,
    default: false,
  },
  label: {
    type: String,
    required: false,
    default: () => "",
  },
});

const updateValue = (value) => {
  emits("update:modelValue", value);
};
</script>

<style lang="scss" scoped>
.inpt-box {
  margin: 2rem 0;
  input {
    padding: 2rem 2rem;
    width: 100%;
    border-radius: var(--brd-radius);
    border: 1px solid var(--col-primary);
  }
}
</style>

<!-- usage 
   <InptField
                style="direction: rtl !important"
                :holder="''"
                @inptData="formData = $event"
                :appear="checkErrName(['formData']) ? 'err-border' : ''"
              ></InptField>
-->
