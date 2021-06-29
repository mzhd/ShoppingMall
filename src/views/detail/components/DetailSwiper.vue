<template>
  <Swiper
    :autoplay="swiperOptions.autoPlay"
    :loop="swiperOptions.loop"
    :speed="swiperOptions.speed"
    :slides-per-view="swiperOptions.slidesPerView"
    :space-between="swiperOptions.spaceBetween"
  >
    <swiper-slide v-for="(img,index) in topImgs" :key="index">
      <a >
        <img :src="img" alt="">
      </a>
    </swiper-slide>
  </Swiper>
</template>

<script>
import {Swiper, SwiperSlide} from 'swiper/vue';
import SwiperCore, {Autoplay, Navigation, Pagination, Scrollbar, A11y} from 'swiper';
import {reactive} from "vue";

SwiperCore.use([Navigation, Pagination, Autoplay])
export default {
  name: "DetailSwiper",
  props:{
    topImgs:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    Swiper,
    SwiperSlide,
  },
  setup(props,context){
    const swiperOptions=reactive({
      autoPlay: {
        delay: 300000,
        //当用户点击（或触摸）后是否停止播放
        disableOnInteraction: false
      },
      loop: true,
      speed: 1000,
      slidesPerView: 1,
      spaceBetween: 0
    })
    return {
      swiperOptions
    }
  }
}
</script>

<style scoped>
.swiper-container {
  width: 100%;
  height: 375px;
}

.swiper-container img {
  width: 100%;
}

</style>
