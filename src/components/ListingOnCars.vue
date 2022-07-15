<template>
  <div>
    <nav>Lista de carros</nav>
    <header><button @click="createNewCar()">Adicionar carro</button></header>

    <section class="container-list">
      <ul class="titles">
        <li>Carro</li>
        <li>Ano</li>
      </ul>
      <ul v-for="car in dataCars" :key="car.id">
        <li>{{ car.nome }}</li>
        <li>{{ car.ano }}</li>
        <li>
          <button class="btn-put" @click="updateCarSelected(car.id, car)">
            Editar carro
          </button>
        </li>
        <li>
          <button class="btn-delete" @click="openConfirmationModal(car.id)">
            Deletar carro
          </button>
        </li>
      </ul>
    </section>
    <ModalForm
      v-show="form_new_car"
      @closeModal="closeFormNewCar()"
      @emitUpdateCar="updateCar"
      @getCars="getCars"
      :carIdProp="carId"
      :isCreateCar="isCreate"
      :carProp="car"
    />
    <ConfirmationModal
      :id="carId"
      @closeModal="closeConfirmationModal"
      @getCars="getCars"
      v-show="confirmationModal"
    />
  </div>
</template>

<script>
import axios from "axios";
import ModalForm from "../components/ModalForm.vue";
import ConfirmationModal from "../components/ConfirmarionModal.vue";

export default {
  name: "ListingOnCars",
  components: {
    ModalForm,
    ConfirmationModal,
  },
  data() {
    return {
      url: "http://localhost:8080/api/cars",
      dataCars: [],
      form_new_car: false,
      confirmationModal: false,
      isCreate: null,
      carId: "",
      car: {
        nome: "",
        marca: "",
        cor: "",
        ano: "",
        portas: "",
        cv: "",
        alarme: "",
        cambio: "",
        tetoSolar: "",
        computadorDeBordo: "",
      },
      
    };
  },
  methods: {
    openFormModal() {
      this.form_new_car = true;
    },
    closeFormNewCar() {
      this.form_new_car = false;
    },
    openConfirmationModal(id) {
      this.confirmationModal = true;
      this.carId = id;
    },
    closeConfirmationModal() {
      this.confirmationModal = false;
    },

    async getCars() {
      try {
        const response = await axios.get(this.url);
        this.dataCars = response.data.cars;
      } catch (error) {
        console.log(error);
      }
    },
    createNewCar() {
      this.car = {
        nome: "",
        marca: "",
        cor: "",
        ano: "",
        portas: "",
        cv: "",
        alarme: "",
        cambio: "",
        tetoSolar: "",
        computadorDeBordo: "",
      };
      this.isCreate = true;
      this.openFormModal();
    },
    async updateCar(car, id) {
      try {
        await axios.put(`${this.url}/${id}`, car);
        this.getCar();
        this.closeFormNewCar();
      } catch (error) {
        console.log(error);
      }
    },
    async updateCarSelected(id, car) {
      this.car = car;
      this.carId = id;
      this.isCreate = false;
      this.openFormModal();
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
        width: 95px;
        padding: 5px 5px;
        margin-left: 10px;
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
}
</style>