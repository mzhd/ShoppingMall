<template>
  <div id="detail">
    <DetailNavbar
      class="detail-nav-bar"
      @detailNavBarClick="detailNavBarClick"
      ref="navbar"
    >

    </DetailNavbar>
    <Scroll @onScroll="onScroll" :probe-type="3" class="content" ref="scroll">
      <DetailSwiper ref="swiper" class="detail-swiper" :top-imgs="topImgs"></DetailSwiper>
<!--      <DetailBaseInfo ref="baseInfo" :goods="goods"></DetailBaseInfo>-->
      <DetailBaseInfo :goods="goods" ref="baseInfo"></DetailBaseInfo>
      <DetailImageInfo ref="imageInfo" @onImgLoad="onImgLoad" :imgs="imgs"></DetailImageInfo>
    </Scroll>
    <BackTop @click="backTopClick" v-show="isShowBackTop"></BackTop>
    <DetailBottomBar @addCart="addToCart"></DetailBottomBar>
  </div>
</template>

<script>
import DetailNavbar from "@/views/detail/components/DetailNavBar.vue";
import {getGoodsDetail, Goods} from "@/network/detail";
import Swiper from "swiper";
import DetailSwiper from "@/views/detail/components/DetailSwiper";
import DetailBaseInfo from "@/views/detail/components/DetailBaseInfo";
import Scroll from "@/components/common/scroll/Scroll";
import DetailImageInfo from "@/views/detail/components/DetailImageInfo";
import DetailTest from "@/views/detail/components/DetailBaseInfo";
import {debounce} from "@/common/utils";
import BackTop from "@/components/common/backtop/BackTop";
import DetailBottomBar from "@/views/detail/components/DetailBottomBar";
import {mapActions} from "vuex";

export default {
  name: "Detail",
  data() {
    return {
      id: null,
      topImgs: [],
      goods: {},
      anchorPoints: [],
      imgs:[],
      getAnchorPoints:null,
      isShowBackTop:false,
      offsetY:0,
      }
  },
  components: {
    DetailNavbar,
    DetailSwiper,
    Scroll,
    DetailImageInfo,
    DetailBaseInfo,
    BackTop,
    DetailBottomBar,
  },
  created() {
    this.id = this.$route.params.id
    this.handlerGetGoodsDetail(this.id)
    this.getAnchorPoints=debounce(()=>{
      console.log("图片加载完成");
      this.anchorPoints=[]
      this.anchorPoints.push(this.$refs.swiper.$el.offsetTop)
      this.anchorPoints.push(this.$refs.baseInfo.$el.offsetTop)
      this.anchorPoints.push(this.$refs.imageInfo.$el.offsetTop)
      console.log(this.anchorPoints);
    },100)
  },
  mounted() {
    this.$refs.scroll.bs.refresh()
  },
  methods: {
    ...mapActions(['addCart']),
    addToCart(){
      // console.log("添加购物车");

      const product={}
      product.title=this.goods.title
      product.imgs=this.topImgs
      product.desc=this.goods.desc
      product.price=this.goods.price
      product.id=this.id
      product.count=0
      product.desc="商品描述"
      //1、普通的actions调用
      // this.$store.dispatch("addCart",product)
      //2、通过mapActions调用
      this.addCart(product).then((res)=>{
        console.log(res);
      })
    },
    backTopClick(){
      this.$refs.scroll.scrollTo(0,0)
    },
    onScroll(position){
      //滚动关联导航栏
      if(-position.y>=this.anchorPoints[0])
      {
        this.$refs.navbar.currentIndex=0
      }
      if(-position.y>=this.anchorPoints[1])
      {
        this.$refs.navbar.currentIndex=1
      }
      if(-position.y>=this.anchorPoints[2])
      {
        this.$refs.navbar.currentIndex=2
      }
      //判断是否显示回到顶部按钮
      this.isShowBackTop=-position.y>=500
    },
    onImgLoad() {
      this.getAnchorPoints()
    },
    detailNavBarClick(index) {
      this.$refs.scroll.scrollTo(0, -this.anchorPoints[index])
    },
    handlerGetGoodsDetail(id) {
      getGoodsDetail(id).then((res) => {
        console.log(res);
        this.topImgs = res.data.top_image.split("|")
        const columns = ["销量1044", "收藏111人", ""]
        const services = ["七天包邮", "退货补运费"]
        this.goods = new Goods(res.data.title, res.data.desc, res.data.price
          , res.data.old_price, res.data.low_price, services, res.data.discount_desc, columns)
        this.imgs=["https://s5.mogucdn.com/mlcdn/c45406/210616_399di34db1j68a74bek01j6899k8i_640x1070.jpg_500x9999.v1c7E.81.webp","https://s5.mogucdn.com/mlcdn/c45406/210616_399di34db1j68a74bek01j6899k8i_640x1070.jpg_500x9999.v1c7E.81.webp","https://s5.mogucdn.com/mlcdn/c45406/210616_399di34db1j68a74bek01j6899k8i_640x1070.jpg_500x9999.v1c7E.81.webp","https://s5.mogucdn.com/mlcdn/c45406/210616_399di34db1j68a74bek01j6899k8i_640x1070.jpg_500x9999.v1c7E.81.webp","https://s5.mogucdn.com/mlcdn/c45406/210616_399di34db1j68a74bek01j6899k8i_640x1070.jpg_500x9999.v1c7E.81.webp","https://s5.mogucdn.com/mlcdn/c45406/210616_399di34db1j68a74bek01j6899k8i_640x1070.jpg_500x9999.v1c7E.81.webp","https://s5.mogucdn.com/mlcdn/c45406/210616_399di34db1j68a74bek01j6899k8i_640x1070.jpg_500x9999.v1c7E.81.webp","https://s5.mogucdn.com/mlcdn/c45406/210616_399di34db1j68a74bek01j6899k8i_640x1070.jpg_500x9999.v1c7E.81.webp","https://s5.mogucdn.com/mlcdn/c45406/210616_399di34db1j68a74bek01j6899k8i_640x1070.jpg_500x9999.v1c7E.81.webp","https://s5.mogucdn.com/mlcdn/c45406/210616_399di34db1j68a74bek01j6899k8i_640x1070.jpg_500x9999.v1c7E.81.webp","https://s5.mogucdn.com/mlcdn/c45406/210616_399di34db1j68a74bek01j6899k8i_640x1070.jpg_500x9999.v1c7E.81.webp"]
      })
    }
  }
}
</script>

<style scoped>
#detail {
  height: 100vh;
  position: relative;
}

.detail-nav-bar {
  background-color: #ffffff;
}

.content {
  overflow: hidden;
  height: calc(100% - 44px - 49px);
  background-color: #ffffff;
}
</style>
