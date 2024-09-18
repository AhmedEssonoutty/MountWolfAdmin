<template>
  <div v-if="show">
    <div id="chart" style="position: relative">
      <apexchart
        type="radialBar"
        style="width: 100%; height: 100%"
        :options="chartOptions"
        :series="series"
      >
      </apexchart>
      <div
        style="
          position: absolute;
          top: 50%;
          right: 50%;
          transform: translate(50%, -50%);
          font-size: 2rem;
        "
      >
        {{ props.percentage }}%
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
const color = ref("");
const show = ref(false);

const props = defineProps({
  percentage: {
    type: String,
  },
  circleColor: {
    type: String,
  },
});

const series = ref([75]);

const chartOptions = ref({
  chart: {
    type: "radialBar",
    toolbar: {
      show: false,
    },
  },
  colors: [props.circleColor],
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 225,
      hollow: {
        margin: 0,
        size: "70%",
        background: "",
        image: undefined,
        imageOffsetX: 0,
        imageOffsetY: 0,
        position: "front",
        dropShadow: {
          enabled: false,
          top: 3,
          left: 0,
          blur: 4,
          opacity: 0.24,
        },
      },
      track: {
        background: "#4a5770",
        strokeWidth: "60%",
        margin: 0,
        dropShadow: {
          enabled: true,
          top: -3,
          left: 0,
          blur: 4,
          opacity: 0.35,
        },
      },

      dataLabels: {
        show: false,
        name: {
          offsetY: 20,
          show: true,
          color: "#888",
          fontSize: "17px",
        },
        value: {
          formatter: function (val) {
            return parseInt(val);
          },
          color: "#111",
          fontSize: "36px",
          show: true,
        },
      },
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "horizontal",
      shadeIntensity: 0.5,
      gradientToColors: [props.circleColor],
      inverseColors: false,
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

onMounted(() => {
  series.value = [props.percentage];
  setTimeout(() => {
    show.value = true;
  }, 1000);
});
</script>
<style lang="scss" scoped>
#chart {
  .apexcharts-menu-icon {
    display: none !important;
  }
}
</style>
