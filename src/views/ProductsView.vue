<template>
  <div class="row mt-3">
    <div class="col-md-10 offset-1">
      <div class="card border border-dark">
        <div class="card-header bg-dark"></div>
        <div class="card-body">
          <Line id="my-chart-id" :options="chartOptions" :data="chartData" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Line },
  data() {
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

<style scoped></style>
