<template>
  <div>
    <apexchart
      width="200"
      type="radialBar"
      :options="options"
      :series="series"
    ></apexchart>
  </div>
</template>

<script setup>
import VueApexCharts from "vue3-apexcharts";
import { ref } from "vue";

const options = ref({
  chart: {
    height: 350,
    type: "radialBar",
  },
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 135,

      hollow: {
        size: "60%",
        margin: 0,
      },
      dataLabels: {
        showOn: "always",
        name: {
          offsetY: -10,
          show: true,
          color: "#888",
          fontSize: "17px",
        },
      },
      value: {
        color: "#111",
        fontSize: "36px",
        show: true,
      },
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "horizontal",
      shadeIntensity: 0.5,
      gradientToColors: ["#ABE5A1"],
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100],
    },
  },
  stroke: {
    lineCap: "round",
  },
  labels: [""],
});

const series = ref([70]);
</script>

<style lang="scss" scoped></style>
