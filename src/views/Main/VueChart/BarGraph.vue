<script>
import { ref } from 'vue'
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
export default {
  name: 'BarChart',
  components: { Bar },
  setup() {
    return {
      chartData: {
        labels: ["products", "prints", "tablets", "phones"],
        datasets: [{ label: 'Articulos', data: [10, 20, 30, 40] }]
      },

      chartOptions: {
        responsive: true,
        backgroundColor: ['#FF9A85', "#ABFAB7", "#EDF56C", "#90D5F7"],
      }
    }
  }
}

const cards = ["Total Orders", "Total", "Subtotal", "General"];

</script>

<template>
  <div class="card shadow divs">
    <div class="card-body">
      <h2 class="fs-5 text-center">Ejemplo - Gráfica de Barras</h2>
      <Bar :options="chartOptions" :data="chartData" />
    </div>
  </div>
</template>
