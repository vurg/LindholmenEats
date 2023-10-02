<template>
  <div>
    <MenuSelectors />
    <div class="slider-frame">
      <div class="slide-images">
        <div class="img-container" v-for="(coupon, index) in coupons" :key="index">
          <img :src="coupon.image" alt="Coupon" />
        </div>
      </div>
    </div>
    <div class="app-banner">
      <img :src="appBanner" alt="App Banner" />
    </div>
  </div>
</template>

<script>
import MenuSelectors from '@/components/MenuSelectors.vue'
import coupon1 from '@/assets/images/coupons/coupon1.png'
import coupon2 from '@/assets/images/coupons/coupon2.png'
import coupon3 from '@/assets/images/coupons/coupon3.png'
import appBanner from '@/assets/images/banners/appBanner.png'

export default {
  components: {
    MenuSelectors
  },
  data() {
    return {
      coupons: [
        { image: coupon1 },
        { image: coupon2 },
        { image: coupon3 }
      ],
      appBanner
    }
  }
}
</script>

<style>
.slider-frame {
  overflow: hidden;
  height: 500px;
  width: 1000px;
  margin: 20px auto;
  transition: all 0.3s;
}
.slide-images {
  width: 3000px;
  height: 500px;
  margin: 0 0 0 0px;
  position: relative;
  animation-name: slide_animation;
  animation-duration: 35s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-play-state: running;
}
.img-container {
  height: 500px;
  width: 1000px;
  position: relative;
  float: right;
}
.img-container img {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
}
.app-banner {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.app-banner img {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
}
/* Animation for slide show */
@keyframes slide_animation {
  0% { right: 0px; }
  12.5% { right: 0px; }
  25% { right: 1000px; }
  37.5% { right: 1000px; }
  50% { right: 2000px; }
  62.5% { right: 2000px; }
  75% { right: 1000px; }
  87.5% { right: 1000px; }
  100% { right: 0px; }
}
/* Media query for smaller screens */
@media (max-width: 1100px) {
  .slider-frame,
  .img-container {
    width: 500px;
    height: 250px;
  }
  .slide-images {
    width: 1500px;
    height: 250px;
  }
  .app-banner {
    width: 500px;
    height: 190px;
  }
  @keyframes slide_animation {
    0% { right: 0px; }
    11.11% { right: 0px; }
    22.22% { right: 500px; }
    33.33% { right: 500px; }
    44.44% { right: 1000px; }
    55.55% { right: 1000px; }
    66.66% { right: 500px; }
    77.77% { right: 500px; }
    88.88% { right: 0px; }
    100% { right: 0px; }
  }
}
@media (max-width: 585px) {
  .slider-frame,
  .img-container {
    width: 400px;
    height: 200px;
  }
  .slide-images {
    width: 1200px;
    height: 200px;
  }
  .app-banner {
    width: 400px;
  }
  @keyframes slide_animation {
    0% { right: 0px; }
    11.11% { right: 0px; }
    22.22% { right: 400px; }
    33.33% { right: 400px; }
    44.44% { right: 800px; }
    55.55% { right: 800px; }
    66.66% { right: 400px; }
    77.77% { right: 400px; }
    88.88% { right: 0px; }
    100% { right: 0px; }
  }
}
</style>
