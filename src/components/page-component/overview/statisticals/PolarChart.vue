<template>
    <div v-if="show" class="area-chart d-flex align-items-center w-100 h-100 justify-content-center">
        <!-- <apexchart type="polarArea" :options="chartOptions" :series="series"></apexchart> -->
        <div id="chart">
            <apexchart type="polarArea" style="width: 45rem;height: 100% " :options="chartOptions" :series="series">
            </apexchart>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const color = ref('')
const show = ref(false)

// const series = ref([14, 23, 21,])

// const chartOptions = ref({
//     chart: {
//         type: 'polarArea',
//     },
//     stroke: {
//         curve: 'smooth',
//         colors: ['#fff']
//     },
//     fill: {
//         opacity: 0.8
//     },
//     responsive: [{
//         breakpoint: 480,
//         options: {
//             chart: {
//                 width: 200
//             },
//             legend: {
//                 position: 'bottom'
//             }
//         }
//     }]
// })
const series = ref([42, 47, 52])
const chartOptions = ({
    chart: {
        type: 'polarArea'
    },
    labels: ['Rose A', 'Rose B', 'Rose C'],
    fill: {
        opacity: 1
    },
    stroke: {
        width: 1,
        colors: undefined
    },
    yaxis: {
        show: false
    },
    legend: {
        position: 'bottom'
    },
    plotOptions: {
        polarArea: {
            rings: {
                strokeWidth: 0
            },
            spokes: {
                strokeWidth: 0
            },
        }
    },
    theme: {
        monochrome: {
            enabled: false,
            shadeTo: 'dark',
            shadeIntensity: 0.6
        }
    }
})


onMounted(() => {
    setTimeout(() => {
        show.value = true
    }, 1000)
})

</script>

<style lang="scss" scoped>
@media only screen and (max-width: 1016px) {
    #chart {
        width: 100%;
    }
}
</style>