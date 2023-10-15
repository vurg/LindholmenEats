<template>
  <div>
    <MenuSelectors />

    <!-- For screens larger than sm (576px) -->
    <div class="d-none d-sm-block">
      <p class="page-title">ABOUT US</p>
      <div v-for="(section, index) in sections" :key="index" class="section-container">
        <p class="section-title">{{ section.sectionTitle }}</p>
        <p class="section-content">{{ section.sectionContent }}</p>
      </div>
      <img src="@/assets/images/backgrounds/lindholmen-eats-background.jpg" alt="Restaurant Interior"  class="img-fluid" />
    </div>

    <!-- For screens smaller than sm (576px) using Bootstrap components -->
    <div class="d-block d-sm-none">
      <div class="card-body">
      <img src="@/assets/images/backgrounds/lindholmen-eats-background.jpg" alt="Restaurant Interior" class="img-fluid" />
    </div>
    <p class="page-title text-center">ABOUT US</p>
      <div v-for="(section, index) in sections" :key="index" class="card m-2">
        <div class="card-body">
          <h5 class="section-title">{{ section.sectionTitle }}</h5>
          <p class="section-text">{{ section.sectionContent }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MenuSelectors from '@/components/MenuSelectors.vue'
export default {
  components: {
    MenuSelectors
  },
  data() {
    return {
      sections: [
        { sectionTitle: 'Delightful Ingredients, Locally Sourced', sectionContent: 'At Lindholmen Eats, we believe in crafting a culinary experience that starts with the finest ingredients sourced locally, ensuring each bite is a delightful explosion of flavor.' },
        { sectionTitle: 'Flavorful Results', sectionContent: "We're committed to ethical sourcing, ensuring our chicken comes from farms that adhere to rigorous animal care standards and Swedish animal welfare legislation, creating healthy, happy birds for our flavorful dishes." },
        { sectionTitle: 'Transparency in Every Bite', sectionContent: 'Explore the exact contents of our food on our Product Information page, so you can enjoy Lindholmen Eats with confidence, knowing that each bite is a reflection of our dedication to responsible dining.' },
        { sectionTitle: 'Seasonal, Sustainable, and Delicious Vegetables', sectionContent: 'We source our vegetables seasonally from trusted growers who prioritize environmental responsibility and quality, ensuring that every dish is not just flavorful but also ethically sourced.' }
      ]
    }
  }
}
</script>

<style>
.page-title {
  font-size: 52px;
  text-align: center;
  text-decoration: underline;
}

.section-container {
  margin: 0px 40px;
}

.section-title {
  font-size: 18px;
  font-weight: bold;
  text-align: left;
}

.section-content {
  font-size: 15px;
  text-align: left;
}

/* Media query for smaller screens */
@media (max-width: 1100px) {
  .page-title {
    font-size: 32px;
  }
}</style>
