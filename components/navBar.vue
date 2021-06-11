<template>
  <header class="header">
    <div class="logo">
      <nuxt-link to="/">
        <Logo />
      </nuxt-link>
    </div>
    <nav class="nav">
      <div class="nav__link">
        <nuxt-link to="/">Home</nuxt-link>
      </div>
      <div class="nav__link">
        <nuxt-link to="/about">About</nuxt-link>
      </div>
      <div class="nav__link">
        <nuxt-link to="/carDashboard">Car dashboard</nuxt-link>
      </div>
      <div class="nav__link">
        <nuxt-link to="/vuexCarDashboard">Car dashboard with Vuex</nuxt-link>
      </div>
    </nav>
  </header>
</template>

<script>
//import Logo from "@/components/Logo";
export default {
  name: "nav-bar",
};
</script>