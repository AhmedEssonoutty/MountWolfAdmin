<template>
  <div class="main-body" style="padding: 2rem 3rem">
    <ShowVendor></ShowVendor>

    <Transactions></Transactions>
    <!-- <MultiSelect class="user-login" :field="userSelectField" /> -->
  </div>
</template>

<script setup>
import { ref } from "vue";
import ShowVendor from "@/components/page-component/AboutVendor/ShowVendor.vue";
import Transactions from "@/components/page-component/AboutVendor/Transactions.vue";
// import MultiSelect from "@/shared/GenericMultiSelect/MultiSelect.vue";

// const userSelectField = ref({
//   value: null,
//   label: "name",
//   placeholder: "Login As",
//   key: "id",
//   options: "arrOfObjects",
//   groups: true,
//   options: arrOfObjects,
//   searchable: true,
//   mode: "single",
//   valueProp: "id",
//   labelProp: "label",
//   closeOnSelect: true,
//   disabled: false,
// });
</script>

<style lang="scss" scoped></style>
