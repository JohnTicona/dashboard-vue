<template>
  <aside class="sidebar min-vh-100">
    <SideHeader />
    <SideBody />
  </aside>
</template>

<script>
import options from "../data/menuData";
import SideBody from "./SideBody.vue";
import SideHeader from "./SideHeader.vue";

export default {
  components: {
    SideHeader,
    SideBody,
  },

  setup() {
    return {
      options,
    };
  },
};
</script>
