<script>
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
export default {
  name: 'BarChart',
  components: { Line },
  setup() {
    return {
      chartData: {
        labels: ["producto 1", "producto 2", "producto 3", "producto 4"],
        datasets: [{ label: 'Productos', data: [1, 7, 5, 2] }]
      },
      chartOptions: {
        responsive: true,
        animations: {
          tension: {
            duration: 1000,
            easing: 'linear',
            from: 1,
            to: 0,
            loop: true
          }
        },
      }
    }
  }
}
</script>

<template>
  <div class="card shadow">
    <div class="card-body">
      <h2 class="fs-4 text-center">Gráfica de Líneas</h2>

      <Line :options="chartOptions" :data="chartData" />
    </div>
  </div>
</template>

<style scoped></style>