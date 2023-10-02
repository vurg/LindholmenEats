<template>
  <div>
    <div id="head-space"></div>
      <div class="row" v-if="products.length">
        <div class="col-md-4" v-for="product in products" :key="product._id">
          <product-card v-model="isDisabled" :isDisabled.sync="isDisabled" :product="product" @add-to-cart="addToCart" :disabled="isDisabled" :transactionId="transactionId"/>
        </div>
      </div>
      <b-alert v-if="error" show variant="danger">{{ error }}</b-alert>
    <shopping-cart v-model="isDisabled" :isDisabled.sync="isDisabled" :is-open="isCartOpen" @remove="removeItemFromCart" @close="closeCart" :cart="cart" :transactionId="transactionId"/>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'
import ShoppingCart from '@/components/ShoppingCart.vue'
import { Api } from '@/Api'

export default {
  name: 'MenuPage',
  components: {
    ProductCard,
    ShoppingCart
  },
  data() {
    return {
      customerId: '650d7cff19b27a88f50509e9',
      restaurantId: '650d7cff19b27a88f50509e1',
      transactionId: null, // Set your transactionId here or retrieve it from the API response
      products: [],
      error: null,
      isCartOpen: false,
      cart: [],
      isDisabled: false
    }
  },
  methods: {
    postTransaction() {
      const transactionData = {
        customer: this.customerId, // Replace with the actual customer ID
        restaurant: this.restaurantId, // Replace with the actual restaurant ID
        products: [], // Empty products array as per your requirement
        totalAmount: 0, // Initial totalAmount set to 0
        transactionStatus: 'Pending' // Initial transactionStatus set to 'Pending'
      }

      Api.post('/transactions', transactionData)
        .then((response) => {
          this.transactionId = response.data._id
          // Do something with the transactionId, e.g., store it in a Vuex store or component data
          this.error = null
        })
        .catch((error) => {
          this.error = 'Error creating transaction: ' + error.message
          console.error(error)
        })
    },
    getProducts() {
      Api.get('/products')
        .then((response) => {
          this.products = response.data
          this.error = null
        })
        .catch((error) => {
          this.products = []
          this.error = 'Error fetching products: ' + error.message
        })
    },
    addToCart(product) {
      this.cart.push(product)
      this.isCartOpen = true
    },
    // Method to remove item from the cart
    removeItemFromCart(index) {
      if (index >= 0 && index < this.cart.length) {
        this.cart.splice(index, 1) // Remove the item from the cart array at the specified index
      }
    },
    // Method to close the cart
    closeCart() {
      this.isCartOpen = false
    }
  },
  created() {
    this.postTransaction() // Call postTransaction when the page is created
    this.getProducts()
  }
}
</script>

<style>
.btn_message {
  margin-bottom: 1em;
}
#head-space {
  margin-bottom: 20px;
}
/* No need for specific image width here, Bootstrap will handle it */
</style>
