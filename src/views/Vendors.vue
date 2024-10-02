<template>
  <div class="main-body" style="padding: 2rem 3rem">
    <!-- buttons -->
    <div class="d-flex justify-content-between align-items-center mb-5 row">
      <h3 class="admin-title col-3">View All Vendors</h3>

      <div class="d-flex gap-3 gap-sm-5 col-9">
        <button class="vendor-btn ms-auto">
          <div style="display: inline-block; justify-self: center !important">
            Locations
          </div>
          <svg
            style="width: 0.6rem; height: 1rem"
            viewBox="0 0 6 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.77635 2.03715L2.80969 5.00382L5.77635 7.97048C6.07455 8.26868 6.07455 8.75038 5.77635 9.04857C5.47816 9.34677 4.99646 9.34677 4.69826 9.04857L1.18873 5.53904C0.890532 5.24084 0.890532 4.75914 1.18873 4.46095L4.69826 0.951415C4.99646 0.653219 5.47816 0.653219 5.77635 0.951415C6.0669 1.24961 6.07455 1.73896 5.77635 2.03715Z"
              fill="#464A61"
            />
          </svg>
        </button>

        <button class="vendor-btn">
          <div style="display: inline-block; justify-self: center !important">
            Category
          </div>
          <svg
            style="width: 0.6rem; height: 1rem"
            viewBox="0 0 6 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.77635 2.03715L2.80969 5.00382L5.77635 7.97048C6.07455 8.26868 6.07455 8.75038 5.77635 9.04857C5.47816 9.34677 4.99646 9.34677 4.69826 9.04857L1.18873 5.53904C0.890532 5.24084 0.890532 4.75914 1.18873 4.46095L4.69826 0.951415C4.99646 0.653219 5.47816 0.653219 5.77635 0.951415C6.0669 1.24961 6.07455 1.73896 5.77635 2.03715Z"
              fill="#464A61"
            />
          </svg>
        </button>

        <button class="vendor-btn" @click="exportVendors">
          <div style="display: inline-block; justify-self: center !important">
            Export
          </div>
          <svg
            style="width: 1.6rem; height: 1.6rem"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 12L3 7L4.4 5.55L7 8.15V0H9V8.15L11.6 5.55L13 7L8 12ZM2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V11H2V14H14V11H16V14C16 14.55 15.8042 15.0208 15.4125 15.4125C15.0208 15.8042 14.55 16 14 16H2Z"
              fill="#464A61"
            />
          </svg>
        </button>
        <span style="position: relative">
          <input
            type="search"
            class="vendor-btn"
            style="width: 31.5rem !important; height: 5.2rem"
            placeholder="Search"
            v-model="searchVe"
          />
          <button
            v-if="searchVe"
            @click="searchVendor"
            :disabled="!searchVe"
            style="
              position: absolute;
              top: 50%;
              right: 10px;
              transform: translateY(-50%);
              cursor: pointer;
              padding: 10px;
            "
            class="search-btn"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style="width: 2.4rem; height: 2.4rem"
            >
              <path
                fill-rule=" evenodd"
                clip-rule="evenodd"
                d="M10.8 2.4C6.16081 2.4 2.4 6.16081 2.4 10.8C2.4 15.4392 6.16081 19.2 10.8 19.2C13.0631 19.2 15.1172 18.305 16.6277 16.8497C16.6593 16.8086 16.6939 16.7691 16.7315 16.7315C16.7691 16.6939 16.8086 16.6593 16.8497 16.6277C18.305 15.1172 19.2 13.0631 19.2 10.8C19.2 6.16081 15.4392 2.4 10.8 2.4ZM19.2383 17.5412C20.7162 15.6936 21.6 13.35 21.6 10.8C21.6 4.83532 16.7647 0 10.8 0C4.83532 0 0 4.83532 0 10.8C0 16.7647 4.83532 21.6 10.8 21.6C13.35 21.6 15.6936 20.7162 17.5412 19.2383L21.9515 23.6485C22.4201 24.1172 23.1799 24.1172 23.6485 23.6485C24.1172 23.1799 24.1172 22.4201 23.6485 21.9515L19.2383 17.5412Z"
                fill="#464A61"
              />
            </svg>
          </button>
        </span>
      </div>
    </div>

    <!-- tabs -->
    <div
      class="border-bottom w-100 ps-3 d-flex gap-5"
      style="position: relative"
    >
      <div
        class="nav-indicator"
        :style="{ left: slideTo, width: slideWidth }"
      ></div>

      <button class="tabs-btn" @click="handleSwip" :data-val="1">All</button>
      <button class="tabs-btn" @click="handleSwip" :data-val="2">Active</button>
      <button class="tabs-btn" @click="handleSwip" :data-val="3">
        Suspended
      </button>
    </div>

    <Transition>
      <AllVendors :searched="serchData" v-if="showSection == 1"></AllVendors>
    </Transition>

    <Transition>
      <ActiveVendors
        :searched="serchData"
        v-if="showSection == 2"
      ></ActiveVendors>
    </Transition>

    <Transition>
      <SuspendedVendors
        :searched="serchData"
        v-if="showSection == 3"
      ></SuspendedVendors>
    </Transition>
  </div>
</template>

<script setup>
import AllVendors from "@/components/page-component/Vendors/AllVendors.vue";
import ActiveVendors from "@/components/page-component/Vendors/ActiveVendors.vue";
import SuspendedVendors from "@/components/page-component/Vendors/SuspendedVendors.vue";
import { vendorStore } from "@/stores/vendors/vendorStore";
const { serchData } = storeToRefs(vendorStore());

import { ref, computed, watch } from "vue";
import { storeToRefs } from "pinia";

const sliderPosition = ref(0);
const sliderWidth = ref(0);
const showSection = ref(1);
const searchVe = ref("");

const handleSwip = (e) => {
  const all = document.querySelectorAll(".tabs-btn");
  all.forEach((e) => (e.style.color = "var(--col-text)"));
  showSection.value = e.currentTarget.dataset.val;
  const el = document.querySelector(
    `.tabs-btn[data-val="${showSection.value}"]`
  );

  sliderPosition.value = el.offsetLeft;
  sliderWidth.value = el.offsetWidth;
};

//  computed
const slideTo = computed(() => {
  return sliderPosition.value + "px";
});
const slideWidth = computed(() => {
  return sliderWidth.value + "px";
});

const searchVendor = () => {
  let res = vendorStore().searchVendor(searchVe.value);
};
watch(searchVe, (newVal) => {
  setTimeout(() => {
    if (!newVal.length) {
      vendorStore().getAllVendors();
    }
  }, 200);
});

const exportVendors = () => {
  vendorStore().doExportVendors();
};
</script>

<style lang="scss" scoped>
.admin-title {
  font-size: var(--fs-24);
  font-weight: var(--fw-bold);
  padding: 2rem 0 1rem;
  color: var(--col-text);
}

.dropdown-toggle {
  &::after {
    display: none;
  }
}

.tabs-btn {
  background-color: var(--col-white);
  border: none;
  font-weight: var(--fw-bold);
  font-size: var(--fs-14);
  padding: 1rem;
  color: var(--col-text);
}

.nav-indicator {
  position: absolute;
  height: 0.5rem;
  background-color: var(--col-primary);
  left: 0;
  top: 100%;
  margin: auto;
  transition: all ease 0.5s;
}

.v-enter-active,
.v-leave-active {
  transform: translateX(0%);
  transition: 0.2s;
  opacity: 1;
}

.v-enter-from,
.v-leave-to {
  transform: translateX(-5%);
  opacity: 0;
  transition: 0.2s;
  position: absolute;
}
</style>
