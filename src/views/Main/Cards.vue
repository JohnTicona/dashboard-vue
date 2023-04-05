<script setup>
const data = [{
  id: 1,
  title: "Total Orders",
  total: 15.6,
  description: "22.5% desde la semana pasada",
  icon: "bi bi-pie-chart-fill",
  color: "#48b3fa"
},
{
  id: 2,
  title: "Total Income",
  total: 9542,
  description: "34.7% desde la semana pasada",
  icon: "bi bi-wrench-adjustable-circle-fill",
  color: "#2353d6"
},
{
  id: 3,
  title: "Total Views",
  total: 7432,
  description: "99.5% desde la semana pasada",
  icon: "bi bi-trello",
  color: "#24c23e"
},
{
  id: 4,
  title: "New Clients",
  total: 12.4,
  description: "11.2% desde la semana pasada",
  icon: "bi bi-wordpress",
  color: "#dd7c2c"
},
]


</script>

<template>
  <div class="d-flex" height="300px">
    <div class="col-4 col-md-6 col-lg-3 p-3" v-for="item in data" :key="item.id">
      <div class="card shadow">
        <div class="card-body">
          {{ item.title }}
          <h2>
            {{ item.total }}<i :class="`${item.icon} icono`" :style="{ color: item.color }"></i>
          </h2>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.icono {
  margin-left: 80px;
  font-size: 50px;
}
</style>