<template>
  <div class="goods_list">
    <GoodsListItem v-for="item in goodsList" :goodsListItem="item"></GoodsListItem>
  </div>
</template>

<script>
import GoodsListItem from "@/components/content/goodslist/GoodsListItem";

export default {
  name: "GoodsList",
  props:{
    goodsList:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    GoodsListItem,
  },
  methods:{
  }
}
</script>

<style scoped>
  .goods_list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

</style>
