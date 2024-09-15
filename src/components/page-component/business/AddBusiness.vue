<template>
  <form
    @submit.prevent="handleAction()"
    class="modal fade modal-xl"
    id="addBusiness"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
  >
    <div
      class="modal-dialog"
      style="margin-top: calc(100vh / 2); transform: translateY(-50%)"
    >
      <div class="modal-content add-admin-modal">
        <div class="modal-header pt-0" style="border: none !important">
          <button
            @click="closeModal()"
            type="button"
            class="btn-close fs-3 m-3 mt-0 ms-auto"
            data-bs-dismiss="modal"
            aria-label="Close"
            id="close-modal"
          ></button>
        </div>
        <div class="modal-body d-flex flex-wrap justify-content-between">
          <span class="row w-100">
            <span class="col-6">
              <InptField
                v-model="formData.name.ar"
                :holder="'Arabic Name'"
                :appear="checkErrName(['ar']) ? 'err-border' : ''"
              ></InptField>
              <span
                class="center-row justify-content-start"
                style="margin-top: -1rem; margin-bottom: 1rem"
                v-for="(err, i) in validationObj.$errors"
                :key="i"
                ><span v-if="err.$property == 'ar'" class="err-msg">
                  {{ err.$message }}
                </span></span
              >
            </span>
            <span class="col-6">
              <InptField
                v-model="formData.name.en"
                :holder="'English name'"
                :appear="checkErrName(['en']) ? 'err-border' : ''"
              ></InptField>
              <span
                class="center-row justify-content-start"
                style="margin-top: -1rem; margin-bottom: 1rem"
                v-for="(err, i) in validationObj.$errors"
                :key="i"
                ><span v-if="err.$property == 'en'" class="err-msg">
                  {{ err.$message }}
                </span></span
              >
            </span>
          </span>
        </div>

        <div class="modal-footer mx-auto gap-4" style="border: none">
          <button v-if="!isLoading" type="submit" class="modal-add-btn mx-auto">
            Add
          </button>
          <button v-else class="modal-add-btn mx-auto">
            <div class="spinner-grow me-3" role="status"></div>
            <span> Loading...</span>
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup>
import InptField from "@/reusable/inputs/InptField.vue";
import { storeToRefs } from "pinia";
import { businessStore } from "@/stores/business_type/businessStore";

// validation
import useVuelidator from "@vuelidate/core";
import { required, numeric, email } from "@vuelidate/validators";
required.$message = "Field is required";

import { ref, watch } from "vue";

const isLoading = ref(false);

const formData = ref({
  name: {
    ar: "",
    en: "",
  },
});

const validationRules = ref({
  name: {
    ar: {
      required,
    },
    en: {
      required,
    },
  },
});

const checkErrName = (key) => {
  return validationObj.value.$errors.find((err) => err.$property == key);
};

const validationObj = useVuelidator(validationRules, formData);

const closeModal = () => {
  resetFormData();
  document.querySelector("#close-modal").click();
};

const resetFormData = () => {
  // reset form
  formData.value = {
    name: {
      ar: "",
      en: "",
    },
  };
  validationObj.value.$reset();
  document.getElementById("addBusiness").reset();
};

const addBusiness = async () => {
  isLoading.value = true;
  const result = await validationObj.value.$validate();
  if (result) {
    const res = await businessStore().addBusiness({
      "name[ar]": formData.value.name.ar,
      "name[en]": formData.value.name.en,
    });
    if (res) {
      closeModal();
    }
  }
  isLoading.value = false;
};

const handleAction = () => {
  addBusiness();
};
</script>

<style lang="scss" scoped></style>
