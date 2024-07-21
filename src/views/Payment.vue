<template>
  <div class="main-body" style="padding: 1rem 3rem   ">
    <div>
      <BoxRow :row-title="''"
        :btns-data="[{ name: 'All payments', data: '00', records: '234 records' }, { name: 'Succeeded', data: '00', records: '234 records' }, { name: 'Pending', data: '00', records: '234 records' }, { name: 'Failed', data: '00', records: '234 records' }]">
      </BoxRow>
    </div>


    <div class="d-flex justify-content-between align-items-center flex-wrap mt-5 mb-3">

      <button class="vendor-btn" style="width: 30rem;">
        <div style="display: inline-block;justify-self: center !important;">Show all Completed</div>
        <svg style="width: 0.6rem;height: 1rem;" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5.77635 2.03715L2.80969 5.00382L5.77635 7.97048C6.07455 8.26868 6.07455 8.75038 5.77635 9.04857C5.47816 9.34677 4.99646 9.34677 4.69826 9.04857L1.18873 5.53904C0.890532 5.24084 0.890532 4.75914 1.18873 4.46095L4.69826 0.951415C4.99646 0.653219 5.47816 0.653219 5.77635 0.951415C6.0669 1.24961 6.07455 1.73896 5.77635 2.03715Z"
            fill="#464A61" />
        </svg>

      </button>
      <button class="vendor-btn" style="width: 15.2rem;">
        <div style="display: inline-block;justify-self: center !important;">Export</div>
        <svg style="width: 1.6rem;height: 1.6rem;" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8 12L3 7L4.4 5.55L7 8.15V0H9V8.15L11.6 5.55L13 7L8 12ZM2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V11H2V14H14V11H16V14C16 14.55 15.8042 15.0208 15.4125 15.4125C15.0208 15.8042 14.55 16 14 16H2Z"
            fill="#464A61" />
        </svg>

      </button>

      <button class="vendor-btn" style="width: 23.4rem;">
        <span>To</span>
        <span>
          <div style="display: inline-block;justify-self: center !important;" class="me-3">July 12, 2024</div>
          <svg style="width: 2.2rem ;height: 2.4rem;" viewBox="0 0 22 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M6.54545 0C7.14795 0 7.63636 0.488417 7.63636 1.09091V2.18182H14.1818V1.09091C14.1818 0.488417 14.6702 0 15.2727 0C15.8752 0 16.3636 0.488417 16.3636 1.09091V2.18182H18.5455C20.3529 2.18182 21.8182 3.64707 21.8182 5.45455V20.7273C21.8182 22.5348 20.3529 24 18.5455 24H3.27273C1.46525 24 0 22.5348 0 20.7273V5.45455C0 3.64707 1.46525 2.18182 3.27273 2.18182H5.45455V1.09091C5.45455 0.488417 5.94296 0 6.54545 0ZM5.45455 4.36364H3.27273C2.67023 4.36364 2.18182 4.85205 2.18182 5.45455V8.72727H19.6364V5.45455C19.6364 4.85205 19.1479 4.36364 18.5455 4.36364H16.3636V5.45455C16.3636 6.05704 15.8752 6.54545 15.2727 6.54545C14.6702 6.54545 14.1818 6.05704 14.1818 5.45455V4.36364H7.63636V5.45455C7.63636 6.05704 7.14795 6.54545 6.54545 6.54545C5.94296 6.54545 5.45455 6.05704 5.45455 5.45455V4.36364ZM19.6364 10.9091H2.18182V20.7273C2.18182 21.3298 2.67023 21.8182 3.27273 21.8182H18.5455C19.1479 21.8182 19.6364 21.3298 19.6364 20.7273V10.9091Z"
              fill="#464A61" />
          </svg>
        </span>
      </button>

      <button class="vendor-btn" style="width: 23.4rem;">
        <span>From</span>
        <span>
          <div style="display: inline-block;justify-self: center !important;" class="me-3">July 12, 2024</div>
          <svg style="width: 2.2rem ;height: 2.4rem;" viewBox="0 0 22 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M6.54545 0C7.14795 0 7.63636 0.488417 7.63636 1.09091V2.18182H14.1818V1.09091C14.1818 0.488417 14.6702 0 15.2727 0C15.8752 0 16.3636 0.488417 16.3636 1.09091V2.18182H18.5455C20.3529 2.18182 21.8182 3.64707 21.8182 5.45455V20.7273C21.8182 22.5348 20.3529 24 18.5455 24H3.27273C1.46525 24 0 22.5348 0 20.7273V5.45455C0 3.64707 1.46525 2.18182 3.27273 2.18182H5.45455V1.09091C5.45455 0.488417 5.94296 0 6.54545 0ZM5.45455 4.36364H3.27273C2.67023 4.36364 2.18182 4.85205 2.18182 5.45455V8.72727H19.6364V5.45455C19.6364 4.85205 19.1479 4.36364 18.5455 4.36364H16.3636V5.45455C16.3636 6.05704 15.8752 6.54545 15.2727 6.54545C14.6702 6.54545 14.1818 6.05704 14.1818 5.45455V4.36364H7.63636V5.45455C7.63636 6.05704 7.14795 6.54545 6.54545 6.54545C5.94296 6.54545 5.45455 6.05704 5.45455 5.45455V4.36364ZM19.6364 10.9091H2.18182V20.7273C2.18182 21.3298 2.67023 21.8182 3.27273 21.8182H18.5455C19.1479 21.8182 19.6364 21.3298 19.6364 20.7273V10.9091Z"
              fill="#464A61" />
          </svg>
        </span>
      </button>

      <span style="position: relative  ">
        <input type="search" class="vendor-btn" style="width: 37.4rem !important;height: 5.2rem;" placeholder="Search">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
          style="position: absolute;top: 50%;right: 10px;transform: translateY(-50%);width: 2.2rem ;height: 2.4rem; ">
          <path fill-rule=" evenodd" clip-rule="evenodd"
            d="M10.8 2.4C6.16081 2.4 2.4 6.16081 2.4 10.8C2.4 15.4392 6.16081 19.2 10.8 19.2C13.0631 19.2 15.1172 18.305 16.6277 16.8497C16.6593 16.8086 16.6939 16.7691 16.7315 16.7315C16.7691 16.6939 16.8086 16.6593 16.8497 16.6277C18.305 15.1172 19.2 13.0631 19.2 10.8C19.2 6.16081 15.4392 2.4 10.8 2.4ZM19.2383 17.5412C20.7162 15.6936 21.6 13.35 21.6 10.8C21.6 4.83532 16.7647 0 10.8 0C4.83532 0 0 4.83532 0 10.8C0 16.7647 4.83532 21.6 10.8 21.6C13.35 21.6 15.6936 20.7162 17.5412 19.2383L21.9515 23.6485C22.4201 24.1172 23.1799 24.1172 23.6485 23.6485C24.1172 23.1799 24.1172 22.4201 23.6485 21.9515L19.2383 17.5412Z"
            fill="#464A61" />
        </svg>
      </span>
    </div>


    <div class="paymen-table">
      <table class="table table-hover table-st-1">
        <thead>
          <tr>
            <th scope="col"><input style="width: 1.5rem;height: 1.5rem" type="checkbox"></th>
            <th scope="col">ID</th>
            <th scope="col">Vendor</th>
            <th scope="col">Payment Method</th>
            <th scope="col">Plans</th>
            <th scope="col">Email</th>
            <th scope="col">Date</th>
            <th scope="col">Amount</th>
            <th scope="col">Statues</th>
            <th style="width: 7%;" scope="col">Action</th>
          </tr>
        </thead>
        <tbody>

          <tr>
            <div class="d-flex justify-content-center">
              <input style="width: 2rem;height: 2rem" type="checkbox" checked disabled>
            </div>
            <td>65165651</td>
            <td>Name</td>
            <td>
              <div class="center-row">
                <vue-feather class="me-2 " style="width: 2rem;height:2.3rem" type="credit-card"></vue-feather>
                <span>****67836</span>
              </div>
            </td>
            <td>Free</td>
            <td>menus@gmail.com</td>
            <td>DD/MM/YYYY</td>
            <td>54 LE</td>
            <td class="success-msg">Completed</td>
            <td>
              <vue-feather class="me-4" style="width: 2rem;height:2.3rem" type="mail"></vue-feather>
              <vue-feather class="me-4" style="width: 2rem;height:2.3rem" type="printer"></vue-feather>
              <vue-feather class="me-4" style="width: 2rem;height:2.3rem" type="eye"></vue-feather>
            </td>
          </tr>
          <tr>
            <div class="d-flex justify-content-center">
              <input style="width: 2rem;height: 2rem" type="checkbox" checked disabled>
            </div>
            <td>65165651</td>
            <td>Name</td>
            <td>
              <div class="center-row">
                <vue-feather class="me-2 " style="width: 2rem;height:2.3rem" type="credit-card"></vue-feather>
                <span>****67836</span>
              </div>
            </td>
            <td>Free</td>
            <td>menus@gmail.com</td>
            <td>DD/MM/YYYY</td>
            <td>54 LE</td>
            <td class="success-msg">Completed</td>
            <td>
              <vue-feather class="me-4" style="width: 2rem;height:2.3rem" type="mail"></vue-feather>
              <vue-feather class="me-4" style="width: 2rem;height:2.3rem" type="printer"></vue-feather>
              <vue-feather class="me-4" style="width: 2rem;height:2.3rem" type="eye"></vue-feather>
            </td>
          </tr>
          <tr>
            <div class="d-flex justify-content-center">
              <input style="width: 2rem;height: 2rem" type="checkbox" checked disabled>
            </div>
            <td>65165651</td>
            <td>Name</td>
            <td>
              <div class="center-row">
                <vue-feather class="me-2 " style="width: 2rem;height:2.3rem" type="credit-card"></vue-feather>
                <span>****67836</span>
              </div>
            </td>
            <td>Free</td>
            <td>menus@gmail.com</td>
            <td>DD/MM/YYYY</td>
            <td>54 LE</td>
            <td class="success-msg">Completed</td>
            <td>
              <vue-feather class="me-4" style="width: 2rem;height:2.3rem" type="mail"></vue-feather>
              <vue-feather class="me-4" style="width: 2rem;height:2.3rem" type="printer"></vue-feather>
              <vue-feather class="me-4" style="width: 2rem;height:2.3rem" type="eye"></vue-feather>
            </td>
          </tr>
          <tr>
            <div class="d-flex justify-content-center">
              <input style="width: 2rem;height: 2rem" type="checkbox" checked disabled>
            </div>
            <td>65165651</td>
            <td>Name</td>
            <td>
              <div class="center-row">
                <vue-feather class="me-2 " style="width: 2rem;height:2.3rem" type="credit-card"></vue-feather>
                <span>****67836</span>
              </div>
            </td>
            <td>Free</td>
            <td>menus@gmail.com</td>
            <td>DD/MM/YYYY</td>
            <td>54 LE</td>
            <td class="success-msg">Completed</td>
            <td>
              <vue-feather class="me-4" style="width: 2rem;height:2.3rem" type="mail"></vue-feather>
              <vue-feather class="me-4" style="width: 2rem;height:2.3rem" type="printer"></vue-feather>
              <vue-feather class="me-4" style="width: 2rem;height:2.3rem" type="eye"></vue-feather>
            </td>
          </tr>
          <tr>
            <div class="d-flex justify-content-center">
              <input style="width: 2rem;height: 2rem" type="checkbox" checked disabled>
            </div>
            <td>65165651</td>
            <td>Name</td>
            <td>
              <div class="center-row">
                <vue-feather class="me-2 " style="width: 2rem;height:2.3rem" type="credit-card"></vue-feather>
                <span>****67836</span>
              </div>
            </td>
            <td>Free</td>
            <td>menus@gmail.com</td>
            <td>DD/MM/YYYY</td>
            <td>54 LE</td>
            <td class="success-msg">Completed</td>
            <td>
              <vue-feather class="me-4" style="width: 2rem;height:2.3rem" type="mail"></vue-feather>
              <vue-feather class="me-4" style="width: 2rem;height:2.3rem" type="printer"></vue-feather>
              <vue-feather class="me-4" style="width: 2rem;height:2.3rem" type="eye"></vue-feather>
            </td>
          </tr>
          <tr>
            <div class="d-flex justify-content-center">
              <input style="width: 2rem;height: 2rem" type="checkbox" checked disabled>
            </div>
            <td>65165651</td>
            <td>Name</td>
            <td>
              <div class="center-row">
                <vue-feather class="me-2 " style="width: 2rem;height:2.3rem" type="credit-card"></vue-feather>
                <span>****67836</span>
              </div>
            </td>
            <td>Free</td>
            <td>menus@gmail.com</td>
            <td>DD/MM/YYYY</td>
            <td>54 LE</td>
            <td class="success-msg">Completed</td>
            <td>
              <vue-feather class="me-4" style="width: 2rem;height:2.3rem" type="mail"></vue-feather>
              <vue-feather class="me-4" style="width: 2rem;height:2.3rem" type="printer"></vue-feather>
              <vue-feather class="me-4" style="width: 2rem;height:2.3rem" type="eye"></vue-feather>
            </td>
          </tr>
          <tr>
            <div class="d-flex justify-content-center">
              <input style="width: 2rem;height: 2rem" type="checkbox" checked disabled>
            </div>
            <td>65165651</td>
            <td>Name</td>
            <td>
              <div class="center-row">
                <vue-feather class="me-2 " style="width: 2rem;height:2.3rem" type="credit-card"></vue-feather>
                <span>****67836</span>
              </div>
            </td>
            <td>Free</td>
            <td>menus@gmail.com</td>
            <td>DD/MM/YYYY</td>
            <td>54 LE</td>
            <td class="success-msg">Completed</td>
            <td>
              <vue-feather class="me-4" style="width: 2rem;height:2.3rem" type="mail"></vue-feather>
              <vue-feather class="me-4" style="width: 2rem;height:2.3rem" type="printer"></vue-feather>
              <vue-feather class="me-4" style="width: 2rem;height:2.3rem" type="eye"></vue-feather>
            </td>
          </tr>
          <tr>
            <div class="d-flex justify-content-center">
              <input style="width: 2rem;height: 2rem" type="checkbox" checked disabled>
            </div>
            <td>65165651</td>
            <td>Name</td>
            <td>
              <div class="center-row">
                <vue-feather class="me-2 " style="width: 2rem;height:2.3rem" type="credit-card"></vue-feather>
                <span>****67836</span>
              </div>
            </td>
            <td>Free</td>
            <td>menus@gmail.com</td>
            <td>DD/MM/YYYY</td>
            <td>54 LE</td>
            <td class="success-msg">Completed</td>
            <td>
              <vue-feather class="me-4" style="width: 2rem;height:2.3rem" type="mail"></vue-feather>
              <vue-feather class="me-4" style="width: 2rem;height:2.3rem" type="printer"></vue-feather>
              <vue-feather class="me-4" style="width: 2rem;height:2.3rem" type="eye"></vue-feather>
            </td>
          </tr>
          <tr>
            <div class="d-flex justify-content-center">
              <input style="width: 2rem;height: 2rem" type="checkbox" checked disabled>
            </div>
            <td>65165651</td>
            <td>Name</td>
            <td>
              <div class="center-row">
                <vue-feather class="me-2 " style="width: 2rem;height:2.3rem" type="credit-card"></vue-feather>
                <span>****67836</span>
              </div>
            </td>
            <td>Free</td>
            <td>menus@gmail.com</td>
            <td>DD/MM/YYYY</td>
            <td>54 LE</td>
            <td class="success-msg">Completed</td>
            <td>
              <vue-feather class="me-4" style="width: 2rem;height:2.3rem" type="mail"></vue-feather>
              <vue-feather class="me-4" style="width: 2rem;height:2.3rem" type="printer"></vue-feather>
              <vue-feather class="me-4" style="width: 2rem;height:2.3rem" type="eye"></vue-feather>
            </td>
          </tr>



        </tbody>
      </table>
    </div>
  </div>

</template>

<script setup>
import BoxRow from "@/components/page-component/payment/BoxData/BoxRow.vue";

</script>

<style lang="scss" scoped></style>
