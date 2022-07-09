<template>
  <main>
    <TopBarHome />
    <ListingOnCars />
  </main>
</template>

<script>
import TopBarHome from "../components/TopBarHome.vue";
import ListingOnCars from "../components/ListingOnCars.vue";
export default {
  name: "HomeView",
  components: {
    TopBarHome,
    ListingOnCars
  },
};
</script>
