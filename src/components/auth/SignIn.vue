<template>
  <div class="center-col" style="min-height: 100vh">
    <form action="#" @submit.prevent="submitLogin" class="singBox">
      <!-- email -->
      <div class="center-col">
        <input
          type="text"
          name="email"
          class="sign-field"
          v-model="formData.email"
          placeholder="Email"
          :disabled="btnLoadin"
          :class="checkErrName(['email']) ? 'err-border' : ''"
        />
        <span
          class="center-col"
          v-for="(err, i) in validationObj.$errors"
          :key="i"
          ><span v-if="err.$property == 'email'" class="err-msg">
            <vue-feather size="1.2rem" type="alert-circle"></vue-feather>
            {{ err.$message }}
          </span></span
        >
      </div>

      <!-- password -->
      <div class="center-col">
        <input
          :type="`${showPass ? 'text' : 'password'}`"
          name="Password"
          placeholder="Password"
          v-model="formData.password"
          class="sign-field"
          :disabled="btnLoadin"
          :class="checkErrName(['password']) ? 'err-border' : ''"
        />

        <span
          class="center-col"
          v-for="(err, i) in validationObj.$errors"
          :key="i"
          ><span v-if="err.$property == 'password'" class="err-msg">
            <vue-feather size="1.2rem" type="alert-circle"></vue-feather>

            {{ err.$message }}
          </span></span
        >
      </div>
      <i class="fe fe-activity"></i>

      <button v-if="!btnLoadin" class="sign-btn" type="submit">Login</button>
      <button v-else class="sign-btn" type="submit">
        <vue-feather
          type="rotate-cw"
          animation="spin"
          animation-speed="slow"
        ></vue-feather>
      </button>
    </form>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
// Validator
import useVuelidator from "@vuelidate/core";
import { required, minLength, maxLength, email } from "@vuelidate/validators";
required.$message = "Field is required";

import { onMounted, ref } from "vue";

const router = useRouter();

const formData = ref({
  email: "",
  password: "",
});

// validation testing
const checkErrName = (key) => {
  return validationObj.value.$errors.find((err) => err.$property == key);
};
// Validation
const validationRules = ref({
  email: {
    required,
    email,
  },
  password: {
    required,
    minLength: minLength(6),
    maxLength: maxLength(20),
  },
});
// validation testing
const validationObj = useVuelidator(validationRules, formData);

// validation testing

const btnLoadin = ref(false);
const showPass = ref(false);

const submitLogin = async () => {
  const result = await validationObj.value.$validate();

  btnLoadin.value = true;

  if (result) {
    localStorage.setItem("loggedin", true);
    setTimeout(() => {
      btnLoadin.value = false;
    }, 1000);
    router.push({ name: "overview" });
  } else {
    localStorage.setItem("loggedin", false);
    setTimeout(() => {
      btnLoadin.value = false;
    }, 500);
  }
};
</script>

<style lang="scss" scoped></style>
