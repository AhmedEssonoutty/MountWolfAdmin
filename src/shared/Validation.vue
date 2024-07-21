<template>
  <div>
    <span v-for="(err, i) in validationObj.$errors" :key="i"
      ><span v-if="err.$property == fieldId" class="err-msg">
        <i class="fe fe-x"></i>
        {{ err.$message }}
      </span></span
    >
  </div>
</template>

<script setup>
// Validator
import useVuelidator from "@vuelidate/core";
import { required, minLength, maxLength, email } from "@vuelidate/validators";
required.$message = "Field is required";
import { defineEmits, watch } from "vue";

const emits = defineEmits(["validate"]);

const props = defineProps({
  fieldId: {
    type: String,
  },
  Rules: {
    type: Object,
  },
  reference: {
    type: Object,
  },
});

// validation testing
// const checkErrName = (fieldId) => {
//   return validationObj.value.$errors.find((err) => err.$property == fieldId);
// };

// const validationRules = ref(Rules);
// const validationRules = ref({
//   email: {
//     required,
//   },
//   password: {
//     required,
//     minLength: minLength(6),
//     maxLength: maxLength(20),
//   },
// });

const validationObj = useVuelidator(props.Rules, props.reference);

watch(
  () => {
    props.fieldId;
  },
  async (newVal) => {
    const result = await validationObj.value.$validate();
    if (newVal) {
      // emits("validate", true) : emits("validate", false);
    }
  },
  { deep: true }
);
</script>

<style lang="scss" scoped></style>
