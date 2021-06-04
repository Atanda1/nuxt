<template>
  <section class="home">
    <h1 class="home__heading">Car dashboard example</h1>
    <div>
      <div v-for="car in cars" :key="car.capacity">
        <p>
          <nuxt-link
            :to="{path: `/cars/${car.type}`}"
          >{{ car.name }}</nuxt-link>
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
      cars : [
        {
          "color": "purple",
          "name": "minivan",
          "type": "minivan.jpg",
          "registration": new Date('2017-01-03'),
          "capacity": 7
        },
        {
          "color": "red",
          "name": "moving truck",
          "type": "movingtruck.jpg",
          "registration": new Date('2018-03-03'),
          "capacity": 5
        },
        {
          "color": "red",
          "name": "station wagon",
          "type": "stationwagon.jpg",
          "registration": new Date('2018-03-03'),
          "capacity": 4
        },
        {
          "color": "red",
          "name": "lambogini",
          "type": "lambogini.jpg",
          "registration": new Date('2018-03-03'),
          "capacity": 2
        },
        {
          "color": "red",
          "name": "truck",
          "type": "truck.jpg",
          "registration": new Date('2018-03-03'),
          "capacity": 11
        }
      ]
    }
  }
}
</script>