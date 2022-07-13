<template>
  <div>
    <nav>Lista de carros</nav>
    <header><button @click="openFormNewCar()">POST</button></header>

    <section class="container-list">
      <ul class="titles">
        <li>Carro</li>
        <li>Ano</li>
      </ul>
      <ul v-for="car in dataCars" :key="car.id">
        <li>{{ car.nome }}</li>
        <li>{{ car.ano }}</li>
        <li><button class="btn-put" @click="patchCar()">PUT</button></li>
        <li>
          <button class="btn-delete" @click="deleteCar(car.id)">DELETE</button>
        </li>
      </ul>
      <ModalForm v-show="form_new_car" @closeModal="closeFormNewCar()" />
      <!-- <section v-show="confirm_delete" class="modal-confirm-delete">
        <h4>Tem certeza</h4>
        <h4>que deseja deletar este item?</h4>
        <div>
          <button @click="closeModal()">Cancelar</button
          ><button @click="deleteCar()">Sim</button>
        </div>
      </section> -->
    </section>
  </div>
</template>

<script>
import axios from "axios";

import ModalForm from "../components/ModalForm.vue";

export default {
  name: "ListingOnCars",
  components: {
    ModalForm,
  },
  data() {
    return {
      url: "http://localhost:8080/api/cars",
      dataCars: [],
      confirm_delete: false,
      form_new_car: false,
    };
  },
  methods: {
    openFormNewCar() {
      this.form_new_car = true;
    },
    closeFormNewCar() {
      this.form_new_car = false;
      this.getCars();
    },
    openModal() {
      this.confirm_delete = true;
    },
    closeModal() {
      this.confirm_delete = false;
    },

    async getCars() {
      try {
        const response = await axios.get(this.url);
        this.dataCars = response.data.cars;
        console.log(this.dataCars);
      } catch (error) {
        console.log(error);
      }
    },

    async patchCar() {
      const editItemsTo = {
        name: "Virou uma carroça",
      };
      try {
        await axios.patch(this.url, editItemsTo);
      } catch (error) {
        console.log(error);
      }
    },

    async deleteCar(id) {
      try {
        await axios.delete(`${this.url}/${id}`);
        this.getCars();
        this.confirm_delete = false;
      } catch (error) {
        console.log(error);
      }
    },
  },
  async mounted() {
    this.getCars();
  },
};
</script>

<style lang="less" scoped>
@teste: rgb(82, 82, 82);
@border-color: rgba(105, 105, 105, 0.542);

nav {
  width: 100%;
  height: 44px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  background-color: @teste;
  font-size: 17px;
}
header {
  width: 100%;
  height: 150px;

  display: flex;
  align-items: center;
  justify-content: center;

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

.container-list {
  width: 770px;
  height: 420px;

  margin: 10px auto;
  padding: 20px;

  border-radius: 5px;
  background-color: #02343f;
  border-bottom: 1px solid @border-color;
  overflow-y: scroll;
  ul.titles {
    border-top: 1px solid @border-color;
    border-bottom: 1px solid @border-color;
    margin-bottom: 40px;
    font-weight: bold;
  }
  ul {
    padding: 10px 10px;

    display: grid;
    grid-template-columns: 5fr 5fr 1fr 1fr;
    align-items: center;

    list-style: none;
    color: #f0edcc;
    li {
      font-size: 14px;

      .btns {
        padding: 5px 10px;
        font-size: 14px;
        border: none;
        border-radius: 3px;
        cursor: pointer;
        color: #f0edcc;
        background-color: transparent;
      }
      .btns:hover {
        transform: translateZ(10px) scale(1.1);
      }

      .btn-put {
        .btns();
        background-color: #f2aa4c;
      }
      .btn-put:hover {
        transform: translateZ(10px) scale(1.1);
      }
      .btn-delete {
        .btns();
        background-color: #a4193d;
      }
      .btn-delete:hover {
        transform: translateZ(10px) scale(1.1);
      }
    }
  }
  .modal-confirm-delete {
    width: 300px;
    height: 100px;

    display: grid;
    align-items: center;
    justify-content: center;
    border-radius: 5px;

    position: fixed;
    top: 50%;
    left: 50%;
    right: -50%;
    transform: translate(-50%, -50%);

    background-color: white;
    color: black;
    box-shadow: 0px 0px 1px 1100px rgba(77, 77, 77, 0.151);
    div {
      display: flex;
      align-items: center;
      justify-content: center;

      button {
        padding: 7px 13px;
        margin: 0px 3px;
        border: none;
        border-radius: 3px;
        cursor: pointer;
        color: white;
        background-color: #02343fd2;
      }
      button:hover {
        transform: translateZ(5px) scale(1.1);
        background-color: #02343f;
        border-radius: 3px;
      }
    }
  }
}
</style>