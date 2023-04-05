<script setup>
import Chart from 'chart.js/auto';
import LineGraph from './VueChart/LineGraph.vue';
import CircleGraph from './VueChart/CircleGraph.vue'
import CircleGraphFor from './VueChart/CircleGraphFor.vue';
import CircleGraphOne from './VueChart/CircleGraphOne.vue'
import CircleGraphTwo from './VueChart/CircleGraphTwo.vue';
import CircleGraphThree from './VueChart/CircleGraphThree.vue';
import BarGraph from './VueChart/BarGraph.vue';

</script>

<template>
  <section class="container d-grid gap-3 p-3">

    <div class="row">
      <div class="col-12 col-md-12 col-lg-8 p-3">
        <LineGraph />
      </div>

      <div class="col-12 col-md-12 col-lg-4 p-3">
        <CircleGraph />
      </div>
    </div>

    <div class="row">
      <div class="col-12 col-md-6 col-lg-3 p-3">
        <CircleGraphOne />
      </div>
      <div class="col-12 col-md-6 col-lg-3 p-3">
        <CircleGraphTwo />
      </div>
      <div class="col-12 col-md-6 col-lg-3 p-3">
        <CircleGraphThree />
      </div>
      <div class="col-12 col-md-6 col-lg-3 p-3">
        <CircleGraphFor />
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-12 col-lg-6 p-3">
        <div class="card shadow">
          <div class="card-body">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.304470565369!2d-68.14195850601169!3d-16.51071956150961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f207f6cf589f1%3A0x33b3c36401ef55eb!2sJes%C3%BAs%20del%20Gran%20Poder%20S.A.!5e0!3m2!1ses!2sbo!4v1680729250721!5m2!1ses!2sbo"
              width="430" height="430" style="border:0;" allowfullscreen="" loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-12 col-lg-6 p-3">
        <BarGraph />
      </div>
    </div>

  </section>
</template>

<style scoped></style>