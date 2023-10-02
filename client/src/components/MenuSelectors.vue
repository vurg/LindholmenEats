<template>
  <div class="menu-links-container">
    <router-link
      v-for="link in links"
      :key="link.pageLink"
      :to="{ name: link.name }"
      class="menu-link"
      @click="activateLink(link)"
      >{{ link.pageLabel }}</router-link
    >
    <router-view />
  </div>
  <!-- Render the content of the current page view -->
</template>

<script>
export default {
  data() {
    return {
      links: [
        { pageLabel: 'Mains', name: 'menu', active: false },
        { pageLabel: 'Deals', name: 'menu', active: false },
        { pageLabel: 'Home', name: 'home', active: true },
        { pageLabel: 'Sides', name: 'menu', active: false },
        { pageLabel: 'Desserts', name: 'menu', active: false }
      ]
    }
  },
  methods: {
    activateLink(clickedLink) {
      this.links.forEach((link) => {
        link.active = false
      })
      clickedLink.active = true
    }
  }
}
</script>

<style>
.menu-links-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 60px;
}
.menu-link {
  text-decoration: none;
  color: black;
  font-size: 23px;
  transition: text-decoration 0.3s, font-size 0.3s;
}
.menu-link:hover {
  text-decoration: underline;
  font-size: 26px;
  color: black;
}
.menu-link.active-link {
  text-decoration: underline;
  font-size: 26px;
}
/* Media query for smaller screens */
@media (max-width: 1100px) {
  .menu-link {
    font-size: 18px;
  }
  .menu-link:hover {
    font-size: 21px;
  }
  .menu-link.active-link {
    font-size: 21px;
  }
}
</style>
