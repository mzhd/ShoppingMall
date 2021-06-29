<template>
  <div class="detail-img-info"  >
    <img @load="onImgLoad"  v-for="(img,index) in imgs" :src="img" :key="index" alt="">
  </div>
</template>

<script>
export default {
  name: "DetailImageInfo",
  props:{
    imgs:{
      type:Array,
      default(){
        return []
      }
    },
  },
  methods:{
    onImgLoad(){
      this.$emit("onImgLoad")
    },
  },

}
</script>

<style scoped>
.detail-img-info{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.detail-img-info img{
  width: 45%;
}
</style>
