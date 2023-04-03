<script setup>
import SideBar from "./components/SideBar.vue";
</script>

<template>
  <div class="d-flex">
    <SideBar />
    <main class="main vh-100 overflow-auto">
      <router-view></router-view>
    </main>
  </div>
</template>

<style></style>
