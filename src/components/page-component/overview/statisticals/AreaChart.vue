<template>
  <div class="area-chart">
    <apexchart type="area" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const series = ref([
  {
    name: "series1",
    data: [31, 40, 28, 51, 42, 109, 100],
  },
  {
    name: "series2",
    data: [11, 32, 45, 32, 34, 52, 41],
  },
  {
    name: "series3",
    data: [15, 40, 60, 20, 30, 60, 35],
  },
]);

const chartOptions = ref({
  chart: {
    type: "area",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    type: "datetime",
    categories: [
      "2018-09-19T00:00:00.000Z",
      "2018-09-19T01:30:00.000Z",
      "2018-09-19T02:30:00.000Z",
      "2018-09-19T03:30:00.000Z",
      "2018-09-19T04:30:00.000Z",
      "2018-09-19T05:30:00.000Z",
      "2018-09-19T06:30:00.000Z",
    ],
  },
  tooltip: {
    x: {
      format: "dd/MM/yy HH:mm",
    },
  },
});
</script>

<style lang="scss" scoped>
.area-chart {
  width: 100%;
}
</style>
