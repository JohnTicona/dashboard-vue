<script>
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
export default {
  name: 'BarChart',
  components: { Doughnut },
  setup() {
    return {
      chartData: {
        labels: ["Gráfica de dona"],
        datasets: [{ label: 'Articulos', data: [2] }]
      },

      chartOptions: {
        responsive: true,
        backgroundColor: '#FF9A85',
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
      <h2 class="fs-4 text-center">Gráfica de rosca simple 2</h2>
      <Doughnut :options="chartOptions" :data="chartData" />
    </div>
  </div>
</template>