  <template>
    <div v-if="show">
      <apexchart height="100" type="radialBar" :options="options" :series="series"></apexchart>
    </div>
  </template>

<script setup>
import VueApexCharts from "vue3-apexcharts";
import { onMounted, ref } from "vue";
const color = ref('')
const show = ref(false)

const options = ref({
  chart: {
    height: 100,
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
        showOn: 'always',
        name: {
          offsetY: -17,
          show: true,
          color: '#FFFFFF',
          fontSize: '20px',
        },
        value: {
          color: '#FFFFFF',
          fontSize: '20px',
          show: true,
        },
      },
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      type: 'horizontal',
      shadeIntensity: 0.1,
      gradientToColors: [color.value],
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100]
    }
  },
  stroke: {
    lineCap: "round",
  },
  labels: [""],
});

const series = ref([70]);


const props = defineProps({
  percentage: {
    type: String,
  },
  circleColor: {
    type: String
  }
});
onMounted(() => {
  series.value = [props.percentage]
  setTimeout(() => {
    show.value = true
  }, 1000)
})

</script>

<style lang="scss" scoped></style>
