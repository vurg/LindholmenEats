<template>
  <div>
    <b-jumbotron header="Lindholmen Eats" lead="Welcome to our DIT342 Frontend Vue.js App">
      <b-button class="btn_message" variant="primary" v-on:click="getMessage()" >Get Message from Server</b-button>
      <!-- BootstrapVue b-alert component -->
      <div  v-if="message">
        <p>Message from the server:<br/>
      </p>
      <b-alert show variant="success">{{ message }}</b-alert>
      </div>
    </b-jumbotron>
  </div>
</template>

<script>
// @ is an alias to /src
import { Api } from '@/Api'

export default {
  name: 'Home',
  data() {
    return {
      message: ''
    }
  },
  methods: {
    getMessage() {
      Api.get('/')
        .then(response => {
          this.message = response.data.message
        })
        .catch(error => {
          this.message = error
        })
    }
  }
}
</script>

<style>
.btn_message {
  margin-bottom: 1em;
}
</style>
