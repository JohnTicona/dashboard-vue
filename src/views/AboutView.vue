<template>
  <div class="row mt-3">
    <div class="col-md-10 offset-1">
      <div class="card border border-dark">
        <div class="card-header bg-dark"></div>
        <div class="card-body">

          <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />


        </div>
      </div>

    </div>

  </div>
</template>

<!-- <script>
import { Bar } from 'vue-chartjs'
import axios from 'axios'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  components: { Bar },
  props: {
    chartId: {
      type: String,
      default: 'bar-chart'
    }
  },
  data() {
    return {
      posts: [],
      etiquetas: [], valores: [], chartData: [],
      chartOptions: {
        responsive: true
      }
    }
  },
  async mounted() {

    const getPosts = await axios.get('http://localhost:4000/posts');



    getPosts.data.map((row) => (

      this.etiquetas.push(row.producto),
      this.valores.push(row.total)
    ))
    this.chartData = {
      labels: this.etiquetas,
      datasets: [
        { label: 'Productos', data: this.valores }
      ]
    }
  }
}

</script> -->
<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import axios from 'axios'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

// const getPosts = await axios.get('http://localhost:4000/posts');
// var datos = getPosts.data
// console.log(getPosts.data)
export default {

  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: ["producto 1", "producto 2", "producto 3", "producto 4"],
        datasets: [{ label: 'Productos', data: [1, 7, 5, 2] }]
      },
      chartOptions: {
        responsive: true
      }
    }
  }
}
</script>

<style scoped></style>
