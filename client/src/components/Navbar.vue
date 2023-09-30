<template>
    <nav class="navbar">
      <p class="logo">{{ logoText }}</p>
      <p class="logo-text">{{ tagText }}</p>
      <div>
        <ul class="social-icons">
            <li><a :href="socialLinks[0]" class="social-link"><i class="fab fa-facebook"></i></a></li>
            <li><a :href="socialLinks[1]" class="social-link"><i class="fab fa-instagram"></i></a></li>
            <li><a :href="socialLinks[2]" class="social-link"><i class="fab fa-twitter"></i></a></li>
            <li><a :href="socialLinks[3]" class="social-link"><i class="fab fa-youtube"></i></a></li>
        </ul>
        <ul class="utility-icons">
            <li><a href="#" class="app-function"><i class="fas fa-shopping-cart"></i></a></li>
            <li><a href="#" class="app-function"><i class="fas fa-user"></i></a></li>
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
      socialLinks: [
        'https://www.facebook.com',
        'https://www.instagram.com',
        'https://www.twitter.com',
        'https://www.youtube.com'
      ]
    }
  }
}
</script>

<style scoped>
div {
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
  width: 40%;
  height: 12px;
  background-color: #0CA789;
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
}
.utility-icons li {
  margin-right: 10px;
}
.utility-icons li:last-child {
  margin-right: 35px;
}
.social-link, .app-function {
  display: flex;
  color: #000000;
  font-size: 30px;
  margin: 10px 8px;
  text-decoration: none;
}
/* Media query for smaller screens */
@media (max-width: 1700px) {
  .navbar::before,
  .navbar::after {
    width: 20%;
    height: 4%;
  }
  .logo {
    font-size: 25px;
  }
  .logo-text {
    font-size: 10px;
  }
}
</style>
