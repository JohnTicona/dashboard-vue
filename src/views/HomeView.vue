<template>
  <div>
    <Navigation />
    <Cards />
    <Section></Section>
  </div>
</template>

<script>
import Navigation from './Main/Navigation.vue';
import Cards from './Main/Cards.vue';
import Section from './Main/Section.vue';

export default { components: { Navigation, Cards, Section } };


</script>

<style scoped></style>
