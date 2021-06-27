<template>
  <div class="home-recommend">
    <a class="home-recommend-item" v-for="(item,index) in recommend" :key="index" :href="item.link"><img :src="item.image" alt="">
      <p>{{item.title}}</p></a>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    recommend: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.home-recommend{
  width: 100%;
  display: flex;
  text-align: center;
  font-size: 12px;
  padding: 15px 0 20px;
  border-bottom: 10px solid #eee;
}
.home-recommend .home-recommend-item{
  flex: 1;
}
.home-recommend-item img{
  width: 100%;
  height: 65px;
  margin-bottom: 10px;
}
</style>
