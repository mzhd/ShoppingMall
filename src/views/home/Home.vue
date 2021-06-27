<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template #center>
        <div>购物车</div>
      </template>
    </nav-bar>
    <TabController
      :titles="['流行','新款','精选']"
      @tabClick="tabClick"
      class="home-tab-controller"
      v-show="isShowTabController"
      ref="tabController2">

    </TabController>

    <Scroll class="content" :probe-type="3"
            :pull-down-refresh="true"
            :pull-up-load="true"
            :observe-image="true"
            @pullingDown="pullingDown"
            @pullingUp="pullingUp"
            @onScroll="onContentScroll"
            ref="scroll" >
      <swiper :banner="banner"></swiper>
      <HomeRecommend :recommend="recommend"/>
      <HomeFeature></HomeFeature>
      <TabController
        :titles="['流行','新款','精选']"
        @tabClick="tabClick"
        ref="tabController1">

      </TabController>
      <GoodsList :goodsList="showGoods"/>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
        <li>11</li>
        <li>12</li>
        <li>13</li>
        <li>14</li>
        <li>15</li>
        <li>16</li>
        <li>17</li>
        <li>18</li>
        <li>19</li>
        <li>20</li>
        <li>10</li>
        <li>11</li>
        <li>12</li>
        <li>13</li>
        <li>14</li>
        <li>15</li>
        <li>16</li>
        <li>17</li>
        <li>18</li>
        <li>19</li>
        <li>20</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
        <li>11</li>
        <li>12</li>
        <li>13</li>
        <li>14</li>
        <li>15</li>
        <li>16</li>
        <li>17</li>
        <li>18</li>
        <li>19</li>
        <li>20</li>
      </ul>
    </Scroll>

    <BackTop @click="topClick" v-show="isShowBackTop">

    </BackTop>

  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import {getHomeData, getMultiData} from "@/network/home";
import Swiper from "@/views/home/components/HomeSwiper";
import HomeRecommend from "@/views/home/components/HomeRecommend";
import HomeFeature from "@/views/home/components/HomeFeature";
import TabController from "@/components/common/tabcontroller/TabController";
import GoodsList from "@/components/content/goodslist/GoodsList";
import Scroll from "@/components/common/scroll/Scroll";
import BackTop from "@/components/common/backtop/BackTop";

export default {
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
      goods_type:'pop',
      isShowBackTop:false,
      isShowTabController:false,
      tabOffsetTop:0,
      saveY:0,
    }
  },
  computed:{
    showGoods(){
      return this.goods[this.goods_type].list
    }
  },
  components: {
    NavBar,
    Swiper,
    HomeRecommend,
    HomeFeature,
    TabController,
    GoodsList,
    Scroll,
    BackTop,
  },
  created() {
    console.log("created")
    this.handlerMultiData()
    this.handlerHomeData(this.goods_type)

  },
  activated() {
    this.$refs.scroll.scrollTo(0,this.saveY,0)
    this.$refs.scroll.bs.refresh()
  },
  deactivated() {
    this.saveY=this.$refs.scroll.getScrollY()
    console.log(this.saveY);
  },
  methods: {
    /**
     *监听事件
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.goods_type="pop"
          break
        case 1:
          this.goods_type="new"
          break
        case 2:
          this.goods_type="sell"
          break
      }
      this.handlerHomeData(this.goods_type)
      this.$refs.tabController1.currentIndex=index
      this.$refs.tabController2.currentIndex=index
    },
    pullingDown(){
      // console.log("下拉请求数据");
      for (const item in this.goods) {
        this.goods[item].page=0
        this.goods[item].list.splice(0,this.goods[item].list.length)
      }
      this.goods_type='pop'
      this.handlerHomeData(this.goods_type)
    },
    pullingUp(){
      // console.log("上拉请求数据");
      this.handlerHomeData(this.goods_type)
    },
    topClick(){
      // console.log("返回顶部");
      this.$refs.scroll.scrollTo(0,0)
    },
    onContentScroll(position){
      this.isShowBackTop=-position.y>1000

      //所有组件都有一个属性$el，可以获取组件中的元素
      if(this.tabOffsetTop===0)
        this.tabOffsetTop=this.$refs.tabController1.$el.offsetTop
      this.isShowTabController=-position.y>this.tabOffsetTop
    },
    /**
     * 网络请求
     */
    handlerMultiData() {
      getMultiData().then(res => {
        // console.log(res);
        this.banner = res.data.banner;
        this.recommend = res.data.recommend.splice(0, 4);
        console.log(this.banner);
        console.log(this.recommend);
      })
    },
    handlerHomeData(type) {
      let page=this.goods[this.goods_type].page+1
      getHomeData(type, page).then(res => {
        // console.log(res);
        this.goods[type].list.push(...res.data[type])
        this.goods[type].page += 1
      })
    }
  },

}


</script>

<style scoped>
#home{
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
}

.content{
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.home-tab-controller{
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
}
</style>
