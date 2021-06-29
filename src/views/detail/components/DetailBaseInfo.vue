<template>
  <div v-if="Object.keys(goods).length!==0" class="detail-base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="now-price">{{ goods.price }}</span>
      <span class="old-price">{{ goods.oldPrice }}</span>
      <span v-if="goods.discount" class="discount">{{ goods.discount }}</span>
    </div>
    <div class="info-other">
      <span>{{ goods.columns[0] }}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1]}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in goods.services.length" :key="index">
        <span>{{goods.services[index-1]}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailTest",
  props:{
    goods:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
.detail-base-info{
  margin: 0 10px;
}
.info-title{
  font-size: 20px;
}
.info-price{
  line-height: 30px;
}
.now-price{
  color: red;
  font-size: 22px;
  margin-right: 5px;
}
.now-price::before{
  content: "￥";
}
.old-price{
  font-size: 12px;
  text-decoration: line-through;
  margin-right: 5px;
}
.discount{
  background: var(--color-tint);
  padding: 5px;
  border-radius: 5px;
}
.info-other{
  display: flex;
  justify-content: space-between;
}
.info-service{
  display: flex;
  justify-content: space-between;
}
</style>
