<template>
  <section class="cars">
    <h1 class="cars__name">{{ carName.name }}</h1>
    <img class="vehicle" :src="require(`../../assets/images/${carName.type}`)"/>
  </section>
</template>

<style>
.vehicle {
  height: 45rem;
}
</style>

<script>
//import { mapGetters } from "vuex";
export default {
  computed: {
    carName() {
      return this.$store.getters.getCarById(this.$route.params.id);
    }
  },
};
</script>