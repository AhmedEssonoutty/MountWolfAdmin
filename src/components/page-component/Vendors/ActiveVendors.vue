<template>
  <div>
    <div class="vendors-table">
      <ReusTable
        :header="[
          '',
          'Name Vendor',
          'Status',
          'Plan',
          'Email',
          'Phone',
          'Menu Items',
          'Business Type',
          'Location',
          'Action',
        ]"
      >
        <template #table>
          <tr v-for="(vendor, i) in activeVendors" :key="i">
            <td>
              <input
                :checked="!vendor.deleted_at"
                @change="toggleStatus(vendor.id, $event)"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
            </td>
            <td
              class="name-field"
              @click="router.push({ name: 'about', query: { id: vendor.id } })"
            >
              {{ vendor.name }}
            </td>
            <td
              :class="
                vendor.status == 'active' ? 'text-success' : 'text-danger'
              "
            >
              {{ vendor.status }}
            </td>
            <td>{{ vendor.plan_id ? vendor.plan_id : "..." }}</td>
            <td>{{ vendor.email }}</td>
            <td>{{ vendor.phone }}</td>
            <td>{{ vendor.menus ? vendor.menus : "..." }}</td>
            <td>{{ vendor.type }}</td>
            <td>{{ vendor.location ? vendor.location : "..." }}</td>

            <!-- actions -->
            <td>
              <a :href="`mailto:${vendor.email}`" target="_blank">
                <svg
                  style="width: 2rem; height: 2rem"
                  class="edit-btn"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Mail">
                    <path
                      id="Icon (Stroke)"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.10658 5.55395L12 11.7793L20.8934 5.55395C20.728 5.22692 20.388 5 20 5H4C3.61204 5 3.27196 5.22692 3.10658 5.55395ZM21 7.92066L12.5735 13.8192C12.2291 14.0603 11.7709 14.0603 11.4265 13.8192L3 7.92066V18C3 18.5477 3.45228 19 4 19H20C20.5477 19 21 18.5477 21 18V7.92066ZM1 6C1 4.34772 2.34772 3 4 3H20C21.6523 3 23 4.34772 23 6V18C23 19.6523 21.6523 21 20 21H4C2.34772 21 1 19.6523 1 18V6Z"
                      fill="#464A61"
                    />
                  </g>
                </svg>
              </a>

              <button type="button" class="btn border-0">
                <svg
                  class="edit-btn"
                  style="width: 2rem; height: 2rem"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="Icon (Stroke)"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.36364 1.09091C4.36364 0.488417 4.85205 0 5.45455 0H18.5455C19.1479 0 19.6364 0.488417 19.6364 1.09091V7.63636H20.7273C21.5953 7.63636 22.4277 7.98117 23.0414 8.59492C23.6552 9.20868 24 10.0411 24 10.9091V16.3636C24 17.2316 23.6552 18.064 23.0414 18.6778C22.4277 19.2916 21.5953 19.6364 20.7273 19.6364H19.6364V22.9091C19.6364 23.5116 19.1479 24 18.5455 24H5.45455C4.85205 24 4.36364 23.5116 4.36364 22.9091V19.6364H3.27273C2.40475 19.6364 1.57231 19.2916 0.95856 18.6778C0.344804 18.064 0 17.2316 0 16.3636V10.9091C0 10.0411 0.344804 9.20868 0.95856 8.59492C1.57231 7.98117 2.40475 7.63636 3.27273 7.63636H4.36364V1.09091ZM3.27273 9.81818C2.9834 9.81818 2.70592 9.93312 2.50134 10.1377C2.29675 10.3423 2.18182 10.6198 2.18182 10.9091V16.3636C2.18182 16.653 2.29675 16.9304 2.50134 17.135C2.70592 17.3396 2.9834 17.4545 3.27273 17.4545H4.36364V14.1818C4.36364 13.5793 4.85205 13.0909 5.45455 13.0909H18.5455C19.1479 13.0909 19.6364 13.5793 19.6364 14.1818V17.4545H20.7273C21.0166 17.4545 21.2941 17.3396 21.4987 17.135C21.7032 16.9304 21.8182 16.653 21.8182 16.3636V10.9091C21.8182 10.6198 21.7032 10.3423 21.4987 10.1377C21.2941 9.93312 21.0166 9.81818 20.7273 9.81818H3.27273ZM17.4545 7.63636H6.54545V2.18182H17.4545V7.63636ZM17.4545 15.2727H6.54545V21.8182H17.4545V15.2727Z"
                    fill="#464A61"
                  />
                </svg>
              </button>
              <button
                type="button"
                class="btn border-0"
                @click="
                  router.push({ name: 'about', query: { id: vendor.id } })
                "
              >
                <svg
                  class="edit-btn"
                  style="width: 2rem; height: 2rem"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Eye">
                    <path
                      id="Icon (Stroke)"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.14074 12C2.25003 12.1889 2.39492 12.4296 2.57441 12.7075C3.03543 13.4213 3.71817 14.3706 4.60454 15.3161C6.39552 17.2264 8.89951 19 12 19C15.1005 19 17.6045 17.2264 19.3955 15.3161C20.2818 14.3706 20.9646 13.4213 21.4256 12.7075C21.6051 12.4296 21.75 12.1889 21.8593 12C21.75 11.8111 21.6051 11.5704 21.4256 11.2925C20.9646 10.5787 20.2818 9.6294 19.3955 8.68394C17.6045 6.77356 15.1005 5 12 5C8.89951 5 6.39552 6.77356 4.60454 8.68394C3.71817 9.6294 3.03543 10.5787 2.57441 11.2925C2.39492 11.5704 2.25003 11.8111 2.14074 12ZM23 12C23.8944 11.5528 23.8943 11.5524 23.8941 11.5521L23.8925 11.5489L23.889 11.542L23.8777 11.5198C23.8681 11.5013 23.8546 11.4753 23.8372 11.4424C23.8025 11.3767 23.752 11.2832 23.686 11.166C23.5542 10.9316 23.3601 10.6015 23.1057 10.2075C22.5979 9.42131 21.8432 8.3706 20.8545 7.31606C18.8955 5.22644 15.8995 3 12 3C8.10049 3 5.10448 5.22644 3.14546 7.31606C2.15683 8.3706 1.40207 9.42131 0.894336 10.2075C0.63985 10.6015 0.445792 10.9316 0.313971 11.166C0.248023 11.2832 0.19754 11.3767 0.162753 11.4424C0.145357 11.4753 0.131875 11.5013 0.122338 11.5198L0.11099 11.542L0.107539 11.5489L0.10637 11.5512L0.105925 11.5521C0.105741 11.5524 0.105573 11.5528 1 12L0.105573 11.5528C-0.0351909 11.8343 -0.0351909 12.1657 0.105573 12.4472L1 12C0.105573 12.4472 0.105741 12.4475 0.105925 12.4479L0.107539 12.4511L0.11099 12.458L0.122338 12.4802C0.131875 12.4987 0.145357 12.5247 0.162753 12.5576C0.19754 12.6233 0.248023 12.7168 0.313971 12.834C0.445792 13.0684 0.63985 13.3985 0.894336 13.7925C1.40207 14.5787 2.15683 15.6294 3.14546 16.6839C5.10448 18.7736 8.10049 21 12 21C15.8995 21 18.8955 18.7736 20.8545 16.6839C21.8432 15.6294 22.5979 14.5787 23.1057 13.7925C23.3601 13.3985 23.5542 13.0684 23.686 12.834C23.752 12.7168 23.8025 12.6233 23.8372 12.5576C23.8546 12.5247 23.8681 12.4987 23.8777 12.4802L23.889 12.458L23.8925 12.4511L23.8941 12.4479C23.8943 12.4475 23.8944 12.4472 23 12ZM23 12L23.8944 12.4472C24.0352 12.1657 24.0352 11.8343 23.8944 11.5528L23 12ZM12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10ZM8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12Z"
                      fill="#464A61"
                    />
                  </g>
                </svg>
              </button>
            </td>
          </tr>
        </template>
      </ReusTable>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import ReusTable from "@/reusable/components/ReusTable.vue";
import { onMounted } from "vue";
import { vendorStore } from "@/stores/vendors/vendorStore";
import { storeToRefs } from "pinia";

const { activeVendors } = storeToRefs(vendorStore());

onMounted(async () => {
  await vendorStore().getActiveVendors();
});

const props = defineProps({
  searched: {
    title: Object,
    required: false,
    default: () => ({}),
  },
});

watch(
  () => props.searched,
  (newVal) => {
    if (newVal.length) {
      activeVendors.value = newVal.forEach((element) => {
        element.status == "active";
      });
    }
  }
);

const router = useRouter();

const toggleStatus = async (id, e) => {
  if (e.target.checked) {
    const res = await vendorStore().restoreVendor({ id: id });
    if (!res) {
      e.target.checked = !e.target.checked;
    }
  } else {
    const res = await vendorStore().destroyVendor({ id: id });
    if (!res) {
      e.target.checked = !e.target.checked;
    }
  }
  await vendorStore().getActiveVendors();
};
</script>

<style lang="scss" scoped>
.dropdown-toggle {
  &::after {
    display: none;
  }
}

.name-field {
  &:hover {
    background-color: var(--col-hover);
  }
}
</style>
