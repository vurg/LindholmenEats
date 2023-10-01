<template>
    <div class="card mb-4" @click="addToCart">
      <div class="image-container">
        <img :src="getProductImagePath(product)" class="card-img-top" alt="Product Image">
        <div class="overlay">
          <span class="message">Add to Order</span>
        </div>
      </div>
      <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5>
        <p class="card-text">${{ product.price }} - {{ product.description }}</p>
      </div>
    </div>
  </template>

<script>
import { Api } from '@/Api'

export default {
  props: {
    product: Object,
    transactionId: String,
    isDisabled: Boolean
  },
  methods: {
    addToCart() {
      console.log(this.transactionId)
      if (!this.isDisabled) {
        // Emit the 'add-to-cart' event with the product data
        this.$emit('add-to-cart', this.product)

        // Make a POST request to add the product to the transaction
        Api.post(`/transactions/${this.transactionId}/products`, {
          product: this.product._id, // Assuming this.product contains the product details including _id,
          quantity: 1
        })
          .then((response) => {
          // Handle success
            this.products = response.data
            this.error = null
          })
          .catch((error) => {
          // Handle error
            this.products = []
            this.error = 'Error adding product to cart: ' + error.message
          })
      }
    },
    getProductImagePath(product) {
      const filename = product.name.replace(/ /g, '-').toLowerCase()
      return require(`@/assets/images/${filename}.jpg`)
    }
  }
}
</script>

  <style scoped>
  /* Add styles specific to ProductCard component here */
  .card-img-top {
    transition: opacity 0.1s ease; /* Add a smooth transition effect */
    width: 100%;
    height: auto;
  }

  .image-container {
    position: relative;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black background */
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease; /* Add a smooth transition effect for the overlay */
  }

  .overlay:hover {
    opacity: 1; /* Set the overlay opacity to 1 when hovered over */
  }

  .message {
    color: white;
    font-size: 18px;
  }
  </style>
