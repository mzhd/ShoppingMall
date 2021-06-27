<template>
  <div class="goods_item">
    <img :src="goodsListItem.image" alt="">
    <div class="goods_info">
      <p>{{goodsListItem.title}}</p>
      <span class="price">{{goodsListItem.price}}</span>
      <span class="scale">{{goodsListItem.scale}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props:{
    goodsListItem:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>

.goods_item{
  width: 48%;
  position: relative;
  padding-bottom: 40px;
  overflow: hidden;
}
.goods_item img{
  width: 100%;
  height: 220px;
  border-radius: 5px;
}
.goods_info{
  position: absolute;
  font-size: 12px;
  text-align: center;
  bottom: 5px;
  left: 0;
  right: 0;
}
.goods_info p{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods_info .price{
  color: var(--color-high-text);
  margin-right: 20px;
}
.goods_info .scale{
  position: relative;
}
.goods_info .scale::before{
  content:'♥';
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
}
</style>
