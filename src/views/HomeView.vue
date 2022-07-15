<template>
  <main>
    <ListingOnCars />
  </main>
</template>

<script>
import ListingOnCars from "../components/ListingOnCars.vue";
export default {
  name: "HomeView",
  components: {
    ListingOnCars,
  },
};
</script>

<style lang="less" scoped>
main {
  height: 100vh;
  background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
  background-repeat: no-repeat;
}
</style>
