<template>
  <div class="container-list">
    <ul class="titles">
      <li>Carro</li>
      <li>Ano</li>
    </ul>
    <ul v-for="car in dataCars" :key="car.id">
      <li>{{ car.nome }}</li>
      <li>{{ car.ano }}</li>
      <li><button class="btn-put">PUT</button></li>
      <li><button class="btn-delete" @click="deleteCar()">DELETE</button></li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ListingOnCars",
  data() {
    return {
      url: "https://my-json-server.typicode.com/willianWarren/backendAPI/cars",
      dataCars: [],
    };
  },
  methods: {
    async getCars() {
      try {
        const response = await axios.get(this.url);
        this.dataCars = response.data;
        console.log(this.dataCars);
      } catch (error) {
        console.log(error);
      }
    },
    async teste() {
      try {
        const ddd = {
          nome: "Corsa",
          marca: "Fiat",
          cor: "vermelho",
          ano: "2001",
        };
        await axios.post(this.url, ddd);
        console.log(this.dataCars);
      } catch (error) {
        console.log(error);
      }
    },
    async deleteCar() {
      try {
        await axios.delete(
          "https://my-json-server.typicode.com/willianWarren/backendAPI/cars",
          console.log(this.dataCars)
        );
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
@border-color: rgba(105, 105, 105, 0.542);

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
}
</style>