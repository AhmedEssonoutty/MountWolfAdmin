<template>
    <div v-if="show" class="area-chart w-100 h-100 d-flex align-items-center justify-content-center">
        <apexchart type="polarArea" width="250" :options="chartOptions" :series="series"></apexchart>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const color = ref('')
const show = ref(false)

const series = ref([14, 23, 21,])

const chartOptions = ref({
    chart: {
        type: 'polarArea',
        width: 250,

    },
    stroke: {
        curve: 'smooth',
        colors: ['#fff']
    },
    fill: {
        opacity: 0.8
    },
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            },
            legend: {
                position: 'bottom'
            }
        }
    }]
})


onMounted(() => {
    setTimeout(() => {
        show.value = true
    }, 1000)
})

</script>

<style lang="scss" scoped></style>
