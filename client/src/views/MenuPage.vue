<template>
    <div>
      <b-jumbotron header="Menu" lead="Here is a selection of items from our menu.">
        <b-button class="btn_message" variant="primary" v-on:click="getProducts()">Get Products from Server</b-button>
        <b-alert v-if="products.length" show variant="success">{{ 'Success' }}</b-alert>
        <div class="row" v-if="products.length">
          <div class="col-md-4" v-for="product in products" :key="product._id">
            <div class="card mb-4">
              <img :src="getProductImagePath(product)" class="card-img-top" alt="Product Image">
              <div class="card-body">
                <h5 class="card-title">{{ product.name }}</h5>
                <p class="card-text">${{ product.price }} - {{ product.description }}</p>
              </div>
            </div>
          </div>
        </div>
        <b-alert v-if="error" show variant="danger">{{ error }}</b-alert>
      </b-jumbotron>
    </div>
  </template>

<script>
// @ is an alias to /src
import { Api } from '@/Api'

export default {
  name: 'MenuPage',
  data() {
    return {
      products: [],
      error: null
    }
  },
  methods: {
    getProducts() {
      Api.get('/products')
        .then(response => {
          this.products = response.data
          this.error = null
        })
        .catch(error => {
          this.products = []
          this.error = 'Error fetching products: ' + error.message
        })
    },
    getProductImagePath(product) {
      const filename = product.name.replace(/ /g, '-').toLowerCase()
      return require(`@/assets/images/${filename}.jpg`)
    }
  }
}
</script>

  <style>
  .btn_message {
    margin-bottom: 1em;
  }

  /* No need for specific image width here, Bootstrap will handle it */
  </style>
