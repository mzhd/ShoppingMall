<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon collect"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  methods:{
    addCart(){
      this.$emit("addCart")
    }
  }
}
</script>

<style scoped>
  .bottom-bar{
    height: 49px;
    background-color: #ffffff;
    z-index: 10;
    position: relative;
    display: flex;
    text-align: center;
  }
  .bar-item{
    flex: 1;
    display: flex;
  }
  .bar-item>div {
    flex: 1;
  }
  .bar-left .text{
    font-size: 13px;
  }
  .bar-left .icon{
    display: block;
    width: 22px;
    height: 22px;
    margin: 5px auto 2px;
  }
  .bar-left .service{
    background: url("../../../assets/img/bottombar/service.svg") 0 0/100%;
  }
  .bar-left .shop{
    background: url("../../../assets/img/bottombar/store.svg") 0 0/100%;
  }
  .bar-left .collect{
    background: url("../../../assets/img/bottombar/collect.svg") 0 0/100%;
  }
  .bar-right{
    font-size: 15px;
    color: #fff;
    line-height: 49px;
  }
  .bar-right .cart{
    background-color: #ffe817;
  }
  .bar-right .buy{
    background-color: #ff5777;
  }
</style>
