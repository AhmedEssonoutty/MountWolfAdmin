<template>
    <div class=" management">
        <div>
            <div class="d-flex justify-content-between align-items-center">
                <h3 class="management-title">Vendors management</h3>
                <div class=" d-flex">
                    <button class="horiz-btn mx-5" style="width: 5.2rem">
                        <svg style="width: 1.6rem;height: 1.6rem;" viewBox="0 0 16 16" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8 12L3 7L4.4 5.55L7 8.15V0H9V8.15L11.6 5.55L13 7L8 12ZM2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V11H2V14H14V11H16V14C16 14.55 15.8042 15.0208 15.4125 15.4125C15.0208 15.8042 14.55 16 14 16H2Z"
                                fill="#464A61" />
                        </svg>
                    </button>

                    <button class="vendor-btn" style="width: 23.4rem;">
                        <svg style="width: 2.2rem ;height: 2.4rem;" viewBox="0 0 22 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M6.54545 0C7.14795 0 7.63636 0.488417 7.63636 1.09091V2.18182H14.1818V1.09091C14.1818 0.488417 14.6702 0 15.2727 0C15.8752 0 16.3636 0.488417 16.3636 1.09091V2.18182H18.5455C20.3529 2.18182 21.8182 3.64707 21.8182 5.45455V20.7273C21.8182 22.5348 20.3529 24 18.5455 24H3.27273C1.46525 24 0 22.5348 0 20.7273V5.45455C0 3.64707 1.46525 2.18182 3.27273 2.18182H5.45455V1.09091C5.45455 0.488417 5.94296 0 6.54545 0ZM5.45455 4.36364H3.27273C2.67023 4.36364 2.18182 4.85205 2.18182 5.45455V8.72727H19.6364V5.45455C19.6364 4.85205 19.1479 4.36364 18.5455 4.36364H16.3636V5.45455C16.3636 6.05704 15.8752 6.54545 15.2727 6.54545C14.6702 6.54545 14.1818 6.05704 14.1818 5.45455V4.36364H7.63636V5.45455C7.63636 6.05704 7.14795 6.54545 6.54545 6.54545C5.94296 6.54545 5.45455 6.05704 5.45455 5.45455V4.36364ZM19.6364 10.9091H2.18182V20.7273C2.18182 21.3298 2.67023 21.8182 3.27273 21.8182H18.5455C19.1479 21.8182 19.6364 21.3298 19.6364 20.7273V10.9091Z"
                                fill="#464A61" />
                        </svg>
                        <div style="display: inline-block;justify-self: center !important;">July 12, 2024</div>

                    </button>
                </div>
            </div>

            <div class="w-100">

                <div class="center justify-content-between flex-row flex-wrap flex-sm-nowrap">
                    <ManagementCard :card-title="'All Vendors'" :card-count="'0000'" :card-percentage="'58'"
                        :chart-color="'#7AD3FF'">
                    </ManagementCard>
                    <ManagementCard :card-title="'Active Vendors'" :card-count="'0000'" :card-percentage="'70'"
                        :chart-color="'#FFD169'">
                    </ManagementCard>
                    <ManagementCard :card-title="'Active Vendors'" :card-count="'0000'" :card-percentage="'60'"
                        :chart-color="'#FF7A7A'">
                    </ManagementCard>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import ManagementCard from "@/components/page-component/overview/managements/ManagementCard.vue";
</script>

<style lang="scss" scoped></style>
