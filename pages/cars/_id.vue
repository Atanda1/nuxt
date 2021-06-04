<template>
  <section class="cars">
    <h1 class="cars__name">{{ carName }}</h1>
    <img class="vehicle" :src="require(`../../assets/images/${carName}`)"/>
  </section>
</template>

<style>
.vehicle {
  height: 45rem;
}
</style>
<script>
export default {
  data() {
    return {
      carName: this.$route.params.id,
    }
  }  
};
</script>
