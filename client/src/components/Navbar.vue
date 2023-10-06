<template>
  <nav class="navbar">
    <p class="logo">{{ logoText }}</p>
    <p class="logo-text">{{ tagText }}</p>
    <div class="icon-list">
      <ul class="social-icons">
        <li v-for="(item, index) in socialItems" :key="index">
          <a :href="item.link" class="social-link">
            <i :class="item.icon"></i>
          </a>
        </li>
      </ul>
      <ul class="utility-icons">
        <li>
          <b-button v-b-toggle.sidebar-right>
            <i class="fas fa-shopping-cart"></i> Cart
          </b-button>
        </li>
        <li>
          <b-button v-b-modal.login-modal class="btn btn-primary">
            <i class="fas fa-user"></i> Login
          </b-button>
          <b-modal id="login-modal" title="Login">
            <form>
              <div class="form-group">
                <label for="username">Username:</label>
                <input type="text" class="form-control" id="username" placeholder="Enter your username" required>
              </div>
              <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" class="form-control" id="password" placeholder="Enter your password" required>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </b-modal>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      logoText: 'Lindholmen Eats',
      tagText: 'ALL RIGHTS RESERVED 2023©',
      socialItems: [
        { link: 'https://www.facebook.com', icon: 'fab fa-facebook' },
        { link: 'https://www.instagram.com', icon: 'fab fa-instagram' },
        { link: 'https://www.twitter.com', icon: 'fab fa-twitter' },
        { link: 'https://www.youtube.com', icon: 'fab fa-youtube' }
      ],
      utilityItems: [
        { link: '#', icon: 'fas fa-shopping-cart' },
        { link: '#', icon: 'fas fa-user' }
      ]
    }
  }
}
</script>

<style>
.icon-list {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.navbar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  position: relative;
}

.navbar::before,
.navbar::after {
  content: '';
  position: absolute;
  top: 25%;
  width: 37%;
  height: 12px;
  background-color: #0ca789;
  border-radius: 5px;
  transition: width 0.3s, height 0.3s;
}

.navbar::before {
  left: 0;
  transform: translateX(20px);
}

.navbar::after {
  right: 0;
  transform: translateX(-20px);
}

.logo {
  font-family: 'Graduate';
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 0px;
}

.logo-text {
  font-family: 'Graduate';
  font-size: 16px;
  text-align: center;
  margin-bottom: 0;
}

.utility-icons,
.social-icons {
  list-style-type: none;
  padding: 20;
  display: flex;
  margin-bottom: -8px;
}

.utility-icons li {
  margin-right: 10px;
}

.utility-icons li:last-child {
  margin-right: 35px;
}

.social-link,
.app-function {
  display: flex;
  font-size: 30px;
  margin: 10px 8px;
  transition: font-size 0.3s;
  color: #000000 !important;
  text-decoration: none !important;
}

/* Media query for smaller screens */
</style>
