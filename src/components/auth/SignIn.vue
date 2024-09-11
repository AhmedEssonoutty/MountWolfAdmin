<template>
  <div class="center-col" style="min-height: 100vh">
    <div v-if="state == 'login'">
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
        <button type="button" @click="state = 'forget'" class="forget-btn">
          Forget Password
        </button>

        <button v-if="!btnLoadin" class="sign-btn" type="submit">Login</button>
        <button v-else class="sign-btn" type="submit">
          <span
            class="spinner-border spinner-border-sm fs-3"
            aria-hidden="true"
          ></span>
          <span role="status fs-3" class="mx-2">Loading...</span>
        </button>
      </form>
    </div>
    <div v-if="state == 'forget'">
      <ForgetPassword @login="state = 'login'"></ForgetPassword>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
import ForgetPassword from "./ForgetPassword.vue";
// Validator
import { useAuthStore } from "@/stores/auth/auth";
import { storeToRefs } from "pinia";
import useVuelidator from "@vuelidate/core";
import { required, minLength, maxLength, email } from "@vuelidate/validators";
required.$message = "Field is required";

import { onMounted, ref } from "vue";

const state = ref("login");

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
    let req = await useAuthStore().doLogin(formData.value);
    if (req) {
      router.push({ name: "overview" });
    }
  }
  btnLoadin.value = false;
};
</script>

<style lang="scss" scoped>
.forget-btn {
  font-size: var(--fs-18);
  font-weight: var(--fw-bold);
  margin-inline-start: 5rem;
  margin-inline-end: auto;
  color: #afb0b9 !important;
  margin-block-start: -1.5rem;
  &:hover {
    color: var(--col-primary) !important;
  }
}
</style>
