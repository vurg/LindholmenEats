<template>
  <div class="main-content">
    <div class="menu-links-container">
      <router-link
        v-for="link in links"
        :key="link.pageLink"
        :to="link.pageLink"
        class="menu-link"
        @click="activateLink(link)"
        >{{ link.pageLabel }}</router-link
      >
    </div>
    <!-- Render the content of the current page view -->
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { pageLabel: 'Meals', pageLink: '/MealsPage.vue', active: false },
        { pageLabel: 'Burgers', pageLink: '/BurgersPage.vue', active: false },
        { pageLabel: 'Deals', pageLink: '/DealsPage.vue', active: false },
        { pageLabel: 'Sides', pageLink: '/SidesPage.vue', active: false },
        { pageLabel: 'Desserts', pageLink: '/DessertsPage.vue', active: false }
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
.main-content {
  box-shadow: 10px 10px 10px rgba(12, 167, 137, 1);
  border: 2px solid black;
  margin: 0px 20px 20px 60px;
  padding: 20px;
  max-width: 1800px;
  height: auto;
}
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
@media (max-width: 1700px) {
  .main-content {
    margin: 0px 20px 20px 20px;
  }
}
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
