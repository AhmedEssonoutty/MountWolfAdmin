<template>
  <form
    @submit.prevent="handleAction()"
    class="modal fade modal-xl"
    id="addAdmin"
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
            <!-- Name -->
            <span class="col-6">
              <InptField
                v-model="formData.name"
                :holder="'Name'"
                :appear="checkErrName(['name']) ? 'err-border' : ''"
              ></InptField>
              <span
                class="center-row justify-content-start"
                style="margin-top: -1rem; margin-bottom: 1rem"
                v-for="(err, i) in validationObj.$errors"
                :key="i"
                ><span v-if="err.$property == 'name'" class="err-msg">
                  {{ err.$message }}
                </span></span
              >
            </span>
            <!-- roles -->
            <span class="col-6">
              <MultiSelect
                :select="selectData"
                :appear="checkErrName(['role']) ? 'err-border' : ''"
              />
              <span
                class="center-row justify-content-start"
                style="margin-top: -1rem; margin-bottom: 1rem"
                v-for="(err, i) in validationObj.$errors"
                :key="i"
                ><span v-if="err.$property == 'role'" class="err-msg">
                  {{ err.$message }}
                </span></span
              >
            </span>
          </span>
          <span class="row w-100">
            <!-- email -->
            <span class="col-6">
              <InptField
                v-model="formData.email"
                :holder="'Email'"
                :appear="checkErrName(['email']) ? 'err-border' : ''"
              ></InptField>
              <span
                class="center-row justify-content-start"
                style="margin-top: -1rem; margin-bottom: 1rem"
                v-for="(err, i) in validationObj.$errors"
                :key="i"
                ><span v-if="err.$property == 'email'" class="err-msg">
                  {{ err.$message }}
                </span></span
              >
            </span>
            <!-- password -->
            <span class="col-6">
              <InptField
                v-model="formData.password"
                :holder="'Password'"
                :appear="checkErrName(['password']) ? 'err-border' : ''"
              ></InptField>
              <span
                class="center-row justify-content-start"
                style="margin-top: -1rem; margin-bottom: 1rem"
                v-for="(err, i) in validationObj.$errors"
                :key="i"
                ><span v-if="err.$property == 'password'" class="err-msg">
                  {{ err.$message }}
                </span></span
              >
            </span>
          </span>
          <span class="row w-100">
            <!-- upload -->
            <span class="col">
              <UploadeFile @fileData="formData.img = $event"></UploadeFile>
              <span v-if="formData.img" class="text-success fs-5 fw-bold"
                >Ready</span
              >
              <span
                class="center-row justify-content-start"
                style="margin-top: -1rem; margin-bottom: 1rem"
                v-for="(err, i) in validationObj.$errors"
                :key="i"
                ><span v-if="err.$property == 'name'" class="err-msg">
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
import UploadeFile from "@/reusable/inputs/UploadeFile.vue";
import InptField from "@/reusable/inputs/InptField.vue";
import MultiSelect from "@/reusable/inputs/MultiSelect.vue";
import { storeToRefs } from "pinia";
import { useAdminStore } from "@/stores/admin/adminStore";
import { roleStore } from "@/stores/roles/roleStore";

const { roles } = storeToRefs(roleStore());
const { allAdmins } = storeToRefs(useAdminStore());

// validation
import useVuelidator from "@vuelidate/core";
import { required, numeric, email } from "@vuelidate/validators";
required.$message = "Field is required";
numeric.$message = "Value must be number";

import { ref, watch, defineProps } from "vue";

const emit = defineEmits(["resetAdmin"]);
const isLoading = ref(false);

const props = defineProps({
  admin: {
    type: Object,
    required: false,
    default: () => ({}),
  },
});

const formData = ref({
  name: "",
  email: "",
  password: "",
  role: "",
  img: "",
});

watch(
  () => props.admin,
  () => {
    if (!props.admin.id) {
      return;
    }
    console.log(props.admin.name);
    formData.value.name = props.admin.name;
    formData.value.email = props.admin.email;
    formData.value.password = props.admin.password;
    formData.value.role = props.admin.role;
    formData.value.img = "";
  }
);

const validationRules = ref({
  name: { required },
  email: { required, email },
  password: { required },
  role: { required },
});

const checkErrName = (key) => {
  return validationObj.value.$errors.find((err) => err.$property == key);
};

const validationObj = useVuelidator(validationRules, formData);

const closeModal = () => {
  resetFormData();
  emit("resetAdmin");
  document.querySelector("#close-modal").click();
};

const resetFormData = () => {
  // reset form
  formData.value = {
    name: "",
    email: "",
    password: "",
    role: "",
    img: "",
  };
  validationObj.value.$reset();
  document.getElementById("addAdmin").reset();
  selectData.value.value = "";
};

const addAdmin = async () => {
  isLoading.value = true;
  const result = await validationObj.value.$validate();
  if (result) {
    const res = await useAdminStore().addAdmin({
      name: formData.value.name,
      email: formData.value.email,
      password: formData.value.password,
      role: formData.value.role,
      image: formData.value.img,
    });
    if (res) {
      closeModal();
    }
  }
  isLoading.value = false;
};

const updateAdmin = async () => {
  isLoading.value = true;
  const result = await validationObj.value.$validate();
  if (result) {
    const res = await useAdminStore().updateAdmin({
      name: formData.value.name,
      email: formData.value.email,
      password: formData.value.password,
      role: formData.value.role,
      image: formData.value.img,
      id: props.meal.id,
    });
    if (res) {
      closeModal();
    }
  }
  isLoading.value = false;
};

// multiselect
const selectData = ref({
  value: null,
  label: "name",
  placeholder: "Select Role",
  key: "id",
  options: "roles.value",
  groups: true,
  options: roles.value,
  searchable: true,
  mode: "single",
  valueProp: "id",
  labelProp: "name",
  closeOnSelect: true,
  disabled: false,
  change: (val) => {
    if (val) formData.value.role = val;
  },
  clear: async () => {
    formData.value.role = "";
  },
});

const handleAction = () => {
  if (props.admin.id) {
    updateAdmin();
  } else {
    addAdmin();
  }
};
</script>

<style lang="scss" scoped></style>
