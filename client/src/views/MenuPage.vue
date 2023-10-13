<template>
  <div>
    <MenuSelectors v-model="category" :category.sync="category" @link-clicked="handleLinkClick" />
    <div id="head-space"></div>
    <div class="row" v-if="filteredProducts.length > 0">
      <div class="col-md-4" v-for="product in filteredProducts" :key="product._id">
        <product-card v-model="isDisabled" :isDisabled.sync="isDisabled" :product="product" @add-to-cart="addToCart"
          :disabled="isDisabled" :transactionId="transactionId" />
      </div>
    </div>
    <b-alert v-if="error" show variant="danger">{{ error }}</b-alert>
    <shopping-cart v-model="isDisabled" :isDisabled.sync="isDisabled" :is-open="isCartOpen" @remove="removeItemFromCart"
      @close="closeCart" :cart="cart" :customerId="customerId" :transactionId="transactionId" />
    <b-button v-b-toggle.sidebar-right>Open Cart {{ cart.length > 0 ? '(' + cart.length + ')' : '' }}</b-button>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'
import ShoppingCart from '@/components/ShoppingCart.vue'
import MenuSelectors from '@/components/MenuSelectors.vue'
import { Api } from '@/Api'

export default {
  props: {
    selectedCategory: String
  },
  name: 'MenuPage',
  components: {
    ProductCard,
    ShoppingCart,
    MenuSelectors
  },
  data() {
    return {
      category: 'Mains', // Set a default active link
      customerId: '651f1219c1748be12d41410c', // replace with customer (or move to parent)
      restaurantId: '651ae7241cb3c2b6546160c9', // replace with restaurant (or move to parent)
      transactionId: null, // Set your transactionId here or retrieve it from the API response
      products: [],
      error: null,
      isCartOpen: false,
      cart: [],
      isDisabled: false
    }
  },
  computed: {
    filteredProducts() {
      // Use computed property to filter products based on category
      return this.products.filter(product => product.category === this.category)
    }
  },
  methods: {
    handleLinkClick(selectedCategory) {
      if (selectedCategory !== 'Home') {
        this.category = selectedCategory
      }
    },
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
    this.handleLinkClick(this.selectedCategory)
  },
  beforeRouteLeave(to, from, next) {
    // Show a confirmation dialog before leaving the menu page
    if (confirm('Are you sure you want to leave the menu page? Any unsaved changes will be lost.')) {
      // If the user confirms, proceed with the navigation
      this.category = 'Home'
      next()
    } else {
      // If the user cancels, prevent navigation
      next(false)
    }
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

/* No need for specific image width here, Bootstrap will handle it */</style>
