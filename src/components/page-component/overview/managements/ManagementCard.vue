<template>
    <div class="management-card ">
        <div class="center w-50  ">
            <p>{{ cardTitle }}</p>
            <p class=" ps-4 count">{{ cardCount }}</p>
        </div>
        <div style="height: 100% ; width: 50% ;" class="center">
            <CircleChart :percentage="props.cardPercentage" :circleColor="props.chartColor"></CircleChart>
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