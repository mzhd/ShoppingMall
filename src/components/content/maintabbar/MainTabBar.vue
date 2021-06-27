<template>
  <TabBar>
    <TabBarItem ActiveColor="red" path="/home">
      <template #item_icon >
        <img src="@/assets/img/tabbar/home.svg" alt="">
      </template>
      <template #item_icon_active>
        <img src="@/assets/img/tabbar/home_active.svg" alt="">
      </template>
      <template #item_text>
        <div>首页</div>
      </template>
    </TabBarItem>
    <TabBarItem ActiveColor="red" path="/category">
      <template #item_icon>
        <img src="@/assets/img/tabbar/category.svg" alt="">
      </template>
      <template #item_icon_active>
        <img src="@/assets/img/tabbar/category_active.svg" alt="">
      </template>
      <template #item_text>
        <div>分类</div>
      </template>
    </TabBarItem>
    <TabBarItem path="/cart">
      <template #item_icon>
        <img src="@/assets/img/tabbar/cart.svg" alt="">
      </template>
      <template #item_icon_active>
        <img src="@/assets/img/tabbar/cart_active.svg" alt="">
      </template>
      <template #item_text>
        <div>购物车</div>
      </template>
    </TabBarItem>
    <TabBarItem path="/mine">
      <template #item_icon>
        <img src="@/assets/img/tabbar/mine.svg" alt="">
      </template>
      <template #item_icon_active>
        <img src="@/assets/img/tabbar/mine_active.svg" alt="">
      </template>
      <template #item_text>
        <div>我的</div>
      </template>
    </TabBarItem>
  </TabBar>
</template>

<script>
import TabBar from "@/components/common/tabbar/TabBar";
import TabBarItem from "@/components/common/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>
