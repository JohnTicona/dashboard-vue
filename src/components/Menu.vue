<template>
  <div class="accordion-item my-3">
    <h2 class="accordion-header">
      <button
        class="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        :data-bs-target="`#${id}`"
        aria-expanded="false"
        :aria-controls="id"
      >
        <i :class="`${icon} mx-2`"></i>
        {{ title }}
      </button>
    </h2>
    <div
      :id="id"
      class="accordion-collapse collapse"
      data-bs-parent="#accordionExample"
    >
      <div class="accordion-body">
        <SubMenu
          v-for="item in submenu"
          :subtitle="item.subtitle"
          :url="item.url"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SubMenu from "./SubMenu.vue";
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    submenu: {
      type: Array,
      required: true,
    },
  },
  components: {
    SubMenu,
  },
};
</script>

<style scoped></style>
