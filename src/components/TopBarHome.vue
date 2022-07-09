<template>
  <main>
    <nav><h3>Lista de Carros</h3></nav>
  </main>
</template>

<script>
export default {
  name: "TopBarHome",
};
</script>

<style lang="less" scoped>
@teste: rgb(82, 82, 82);

nav {
  width: 100%;
  height: 44px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  background-color: @teste;
  h3 {
    font-size: 17px;
  }
}
</style>