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
      alarme: "false",
      tetoSolar: "false",
      computadorDeBordo: "false"
    })
    server.create("car", {
      nome: "Gol g5",
      marca: "volkswagen",
      cor: "preto",
      ano: "2012",
      portas: "4",
      cv: "75",
      cambio: "manual",
      alarme: "true",
      tetoSolar: "false",
      computadorDeBordo: "false"
    })
    server.create("car", {
      nome: "Mercedes c180",
      marca: "mercedes",
      cor: "cinza",
      ano: "2022",
      portas: "4",
      cv: "130",
      cambio: "manual",
      alarme: "true",
      tetoSolar: "true",
      computadorDeBordo: "true"
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
    this.patch("/cars/:id", (schema, request) => {
      let id = request.params.id
      let attrs = this.normalizedRequestAttrs()
      return schema.contacts.find(id).update(attrs)
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
