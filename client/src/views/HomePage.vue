<template>
  <div>
    <MenuSelectors />
    <div class="slider-frame">
      <div class="slide-images">
        <div class="img-container" v-for="(image, index) in images" :key="index">
          <img :src="image.image" alt="Coupon" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MenuSelectors from '@/components/MenuSelectors.vue'
import coupon1 from '@/assets/images/coupons/coupon1.png'
import coupon2 from '@/assets/images/coupons/coupon2.png'
import coupon3 from '@/assets/images/coupons/coupon3.png'

export default {
  components: {
    MenuSelectors
  },
  data() {
    return {
      images: [
        { image: coupon1 },
        { image: coupon2 },
        { image: coupon3 }
      ]
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
  .slider-frame {
    height: 250px;
    width: 500px;
  }
}
@media (max-width: 585px) {
  .slider-frame {
    width: 400px;
  }
}
</style>
