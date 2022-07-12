<template>
  <section>
    <nav><h3>Lista de Carros</h3></nav>
    <header><button @click="openModal()">POST</button></header>
    <ModalForm v-show="form_new_car" @closeModal="closeModal"/>
  </section>
</template>

<script>
import ModalForm from "../components/ModalForm.vue";

export default {
  name: "TopBarHome",
  components: {
    ModalForm,
  },
  data() {
    return {
      form_new_car: false,
    };
  },
  methods: {
    openModal() {
      this.form_new_car = true;
    },
    closeModal() {
      this.form_new_car = false;
    },

  },
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

header {
  width: 100%;
  height: 150px;

  padding: 10px 395px;

  display: flex;
  align-items: flex-end;
  justify-content: left;

  button {
    padding: 7px 36px;

    border: none;
    border-radius: 3px;
    color: white;
    background-color: green;
    cursor: pointer;
  }
  button:hover {
    transition: 0.3s;
    transform: translateZ(10px) scale(1.1);
  }
}
</style>