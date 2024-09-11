<template>
  <div>
    <form action="#" @submit.prevent="forgetPassword" class="center-col w-100">
      <span class="row w-100">
        <span class="col-12">
          <InptField
            v-model="formData.new_password"
            :holder="'Enter New Password'"
            :appear="checkErrName(['new_password']) ? 'err-border' : ''"
          ></InptField>
          <span
            class="center-row justify-content-start"
            style="margin-top: -1rem; margin-bottom: 1rem"
            v-for="(err, i) in validationObj.$errors"
            :key="i"
            ><span v-if="err.$property == 'new_password'" class="err-msg">
              {{ err.$message }}
            </span></span
          >
        </span>
        <span class="col-12">
          <InptField
            v-model="formData.confirm_password"
            :holder="'Confirm Password'"
            :appear="checkErrName(['confirm_password']) ? 'err-border' : ''"
          ></InptField>
          <span
            class="center-row justify-content-start"
            style="margin-top: -1rem; margin-bottom: 1rem"
            v-for="(err, i) in validationObj.$errors"
            :key="i"
            ><span v-if="err.$property == 'confirm_password'" class="err-msg">
              {{ err.$message }}
            </span></span
          >
        </span>
      </span>
      <button
        v-if="!btnLoadin"
        class="sign-btn mt-4"
        type="submit"
        style="font-weight: normal !important"
      >
        Send
      </button>
      <button
        v-else
        class="sign-btn mt-4"
        type="submit"
        style="font-weight: normal !important"
      >
        <div class="spinner-grow me-3" role="status"></div>
        <span> Loading...</span>
      </button>
    </form>
  </div>
</template>

<script setup>
import { defineEmits } from "vue";
import InptField from "@/reusable/inputs/InptField.vue";
import { forgetPassStore } from "@/stores/auth/forgetPass";

// emits
const emits = defineEmits(["closeModal", "SucceThree"]);

// Validator
import useVuelidator from "@vuelidate/core";
import {
  required,
  minLength,
  maxLength,
  numeric,
  sameAs,
} from "@vuelidate/validators";
required.$message = "Field is required";

import { ref, computed } from "vue";

const btnLoadin = ref(false);

const formData = ref({
  new_password: "",
  confirm_password: "",
});

const samePass = computed(() => {
  return formData.value.new_password;
});

const validationRules = ref({
  new_password: {
    required,
    minLength: minLength(6),
    maxLength: maxLength(20),
  },
  confirm_password: {
    required,
    minLength: minLength(6),
    maxLength: maxLength(20),
    sameAs: sameAs(samePass),
  },
});

// validation testing
const checkErrName = (key) => {
  return validationObj.value.$errors.find((err) => err.$property == key);
};

// validation testing
const validationObj = useVuelidator(validationRules, formData);

const forgetPassword = async () => {
  const result = await validationObj.value.$validate();
  if (result) {
    btnLoadin.value = true;
    let req = await forgetPassStore().changePassword(
      formData.value.new_password,
      formData.value.confirm_password
    );

    if (req) {
      emits("succeThree");
    }
    btnLoadin.value = false;
    formData.value.email = "";
    validationObj.value.$reset();
  }
};
</script>

<style lang="scss" scoped></style>
