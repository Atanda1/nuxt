<template>
  <section class="home">
    <h1 class="home__heading">Car dashboard example</h1>
    <div>
      <div v-for="car in cars" :key="car.capacity">
        <p>
          <nuxt-link :to="{ path: `/vuexcars/${car.type}` }">{{
            car.name
          }}</nuxt-link>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "carDashboard",
  data() {
		return {
			cars: this.$store.state.cars
		}
}
};
</script>
