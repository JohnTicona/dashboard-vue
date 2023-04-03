<template>
  <div class="accordion" id="accordionExample">
    <Menu
      v-for="option in options"
      :id="option.id"
      :title="option.title"
      :icon="option.icon"
      :submenu="option.subMenu"
    />
  </div>
</template>

<script>
import options from "../data/menuData";
import Menu from "./Menu.vue";
import SideHeader from "./SideHeader.vue";

export default {
  components: {
    SideHeader,
    Menu,
  },

  setup() {
    return {
      options,
    };
  },
};
</script>

<style scoped></style>
