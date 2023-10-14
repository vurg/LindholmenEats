<template>
    <div class>
        <h2 class="heading">Admin Login</h2>
        <form @submit.prevent="adminLogin" class="login-form">
            <div class="form-group">
                <label for="username" class="form-label">Username:</label><br>
                <input type="text" v-model="username" required class="form-input" />
            </div>
            <div class="form-group">
                <label for="password" class="form-label">Password:</label><br>
                <input type="password" v-model="password" required class="form-input" />
            </div>
            <div v-if="error" class="error-message">{{ error }}</div>
            <button type="submit" class="submit-button">Login</button>
        </form>
    </div>
</template>

<script>
import { Api } from '@/Api'

export default {
  data() {
    return {
      username: '',
      password: '',
      error: null
    }
  },
  methods: {
    adminLogin() {
      console.log('Username:', this.username)
      console.log('Password:', this.password)

      Api.post('/admin/login', {
        username: this.username,
        password: this.password
      })
        .then((response) => {
          const token = response.data.token
          console.log('Token:', token)
          this.error = null

          // Store the token in sessionStorage
          sessionStorage.setItem('token', token)
          console.log(sessionStorage.getItem(token))

          // Optionally, you can redirect the user to another page after successful login
          this.$router.push('/admin') // Assuming you are using Vue Router
        })
        .catch((error) => {
          console.error('Error:', error.response.data.message)
          this.error = error.response.data.message
        })
    }
  }
}
</script>

<style scoped>
/* Global styles */
body {
    font-family: Arial, sans-serif;
}

/* Class selectors */
.heading {
    font-size: 24px;
    color: #333;
}

.form-group {
    margin-bottom: 20px;
}

.form-label {
    font-weight: bold;
    font-size: 16px;
}

.form-input {
    font-family: 'Roboto', monospace;
    padding: 10px;
    width: 500px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
}

.submit-button {
    background-color: #4caf50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
}

/* Media query for responsiveness */
@media screen and (max-width: 768px) {
    .form-input {
        width: 70%;
    }

    .submit-button {
        font-size: 16px;
    }
}

/* ID selectors */
#username-input {
    font-weight: bold;
}

#password-input {
    font-style: italic;
}

.error-message {
  color: red;
  margin-bottom: 10px;
}

/* Additional selector */
button[type="submit"]:hover {
    background-color: #45a049;
}
</style>
