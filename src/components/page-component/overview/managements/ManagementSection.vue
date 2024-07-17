<template>
    <div class=" management">
        <div>
            <div class="d-flex justify-content-between align-items-center">
                <h3 class="management-title">Vendors management</h3>
                <div class=" d-flex">
                    <button class="horiz-btn mx-5" style="width: 5.2rem">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8 12L3 7L4.4 5.55L7 8.15V0H9V8.15L11.6 5.55L13 7L8 12ZM2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V11H2V14H14V11H16V14C16 14.55 15.8042 15.0208 15.4125 15.4125C15.0208 15.8042 14.55 16 14 16H2Z"
                                fill="#464A61" />
                        </svg>
                    </button>
                    <button>
                        <img src="/src/assets/media/icons/Frame 4.png" alt="">
                    </button>
                </div>
            </div>

            <div class="d-flex flex-wrap gap-4">
                <ManagementCard class="col" :card-title="'All Vendors'" :card-count="'0000'" :card-percentage="'58'"
                    :chart-color="'#7AD3FF'">
                </ManagementCard>
                <ManagementCard class="col" :card-title="'Active Vendors'" :card-count="'0000'" :card-percentage="'70'"
                    :chart-color="'#FFD169'">
                </ManagementCard>
                <ManagementCard class="col" :card-title="'New Vendors'" :card-count="'0000'" :card-percentage="'90'"
                    :chart-color="'#FF7A7A'">
                </ManagementCard>
            </div>
        </div>
    </div>
</template>

<script setup>
import ManagementCard from "@/components/page-component/overview/managements/ManagementCard.vue";
</script>

<style lang="scss" scoped></style>
