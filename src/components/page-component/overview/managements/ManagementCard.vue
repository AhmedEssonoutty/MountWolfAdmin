<template>
    <div class="management-card p-3 px-5">
        <div class="d-flex flex-row justify-content-between">
            <div class=" d-flex justify-content-arround align-items-center h-100 my-auto flex-column h-100">
                <p>{{ cardTitle }}</p>
                <p class="ps-4 count">{{ cardCount }}</p>
            </div>
            <div>
                <CircleChart :percentage="props.cardPercentage" :circleColor="props.chartColor"></CircleChart>
            </div>
        </div>
    </div>
</template>

<script setup>
import CircleChart from './CircleChart.vue';

const props = defineProps({
    cardTitle: {
        type: String,
    },
    cardCount: {
        type: String,
    },
    cardPercentage: {
        type: String,
    },
    chartColor: {
        type: String
    }
});

</script>

<style lang="scss" scoped></style>