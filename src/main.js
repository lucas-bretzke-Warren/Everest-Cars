import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { createServer, Model } from 'miragejs'

createServer({
  models: {
    car: Model
  },
  seeds(server) {
    server.create("car", {
      nome: "Palio",
      marca: "Fiat",
      cor: "vermelho",
      ano: "2010",
      portas: "2",
      cv: "70",
      cambio: "manual",
      alarme: "não tem",
      tetoSolar: "não tem",
      computadorDeBordo: "não tem"
    })
    server.create("car", {
      nome: "Gol g5",
      marca: "volkswagen",
      cor: "preto",
      ano: "2012",
      portas: "4",
      cv: "75",
      cambio: "manual",
      alarme: "tem",
      tetoSolar: "não tem",
      computadorDeBordo: "não tem"
    })
    server.create("car", {
      nome: "Mercedes c180",
      marca: "mercedes",
      cor: "cinza",
      ano: "2022",
      portas: "4",
      cv: "130",
      cambio: "manual",
      alarme: "tem",
      tetoSolar: "tem",
      computadorDeBordo: "tem"
    })
  },
  routes() {
    this.namespace = 'api'

    this.get('/cars', (schema) => {
      return schema.cars.all()
    }, { timing: 2000 })

    this.post('/cars', (schema, request) => {
      let car = JSON.parse(request.requestBody)
      return schema.cars.create(car)
    })
    this.put("/cars/:id", (schema, request) => {
      let data = JSON.parse(request.requestBody)
      let id = request.params.id
      return schema.cars.find(id).update(data)
    })

    this.delete('/cars/:id', (schema, request) => {
      let id = request.params.id
      return schema.cars.find(id).destroy()
    }, { timing: 2000 })
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
