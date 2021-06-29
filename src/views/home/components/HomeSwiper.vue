<template>
  <div class="home-swiper">
    <swiper
      :autoplay="swiperOptions.autoPlay"
      :loop="swiperOptions.loop"
      :speed="swiperOptions.speed"

      :pagination="swiperOptions.pagination"
      :slides-per-view="swiperOptions.slidesPerView"
      :space-between="swiperOptions.spaceBetween"
    >
      <swiper-slide v-for="(item,index) in banner" :key="index">
        <a ><img alt="" :src="item.image">
        </a>
      </swiper-slide>
      <div style="{height: 20px;width:20px;background-color:red}" class="swiper-pagination">这里是分页</div><!--分页器。如果放置在swiper-container外面，需要自定义样式。-->
    </swiper>
  </div>
</template>

<script>
import {reactive} from 'vue'
// import Swiper core and required modules
import SwiperCore, {Autoplay, Navigation, Pagination, Scrollbar, A11y} from 'swiper';
// Import Swiper Vue.js components
import {Swiper, SwiperSlide} from 'swiper/vue';
// Import Swiper styles
import 'swiper/swiper.min.css';

SwiperCore.use([Navigation, Pagination, Autoplay])

export default {
  name:"HomeSwiper",
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    banner: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  setup(props, context) {
    const swiperOptions = reactive({
      autoPlay: {
        delay: 3000,
        //当用户点击（或触摸）后是否停止播放
        disableOnInteraction: false
      },
      loop: true,
      speed: 1000,
      //分页器
      pagination: {
        // clickable: true,
        el: '.swiper-pagination',
        // type: 'custom',
        // renderCustom: function ( swiper, current, total ) {
        //   var _html = '';
        //   for ( var i = 1; i <= total; i++ ) {
        //     if ( current == i ) {
        //       _html += '<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>';
        //     } else {
        //       _html += '<span class="swiper-pagination-customs"></span>';
        //     }
        //   }
        //   return _html; //返回所有的页码html
        // },
        // onReachEnd: function ( swiper ) {
        //   console.log( '到了最后一个slide' );
        // }

      },
      slidesPerView: 1,
      spaceBetween: 0
    })
    return {
      swiperOptions
    }
  },
  methods: {},
};
</script>

<style scoped>
.swiper-container {
  width: 100%;
  height: 375px;
}

.swiper-container img {
  width: 100%;
}

/*.swiper-pagination-custom {*/
/*  bottom: 10px;*/
/*  left: 0;*/
/*  width: 100%;*/
/*}*/

/*.swiper-container .swiper-pagination-custom .swiper-pagination-customs {*/
/*  width: 10px;*/
/*  height: 10px;*/
/*  border-radius: 50%;*/
/*  display: inline-block;*/
/*  background: #000;*/
/*  opacity: .3;*/
/*  margin: 0 5px;*/
/*}*/

/*.swiper-container .swiper-pagination-custom .swiper-pagination-customs-active {*/
/*  opacity: 1;*/
/*  background-color: #F78E00;*/
/*}*/
</style>
