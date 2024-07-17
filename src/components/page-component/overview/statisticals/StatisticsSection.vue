<template>
    <div class=" bg-white my-5">

        <div>
            <h3 class="management-title">Statistics</h3>
            <div class="row">
                <div class="col-12 col-xl-9 my-3">
                    <AreaChart></AreaChart>

                </div>
                <div class="col-12 col-xl-3 my-3">

                    <poolarChart></poolarChart>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import AreaChart from './AreaChart.vue';
import poolarChart from './PolarChart.vue'

</script>

<style lang="scss" scoped></style>