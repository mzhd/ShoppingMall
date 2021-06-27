<template>
  <div class="tab-controller">
    <div class="tab-controller-item"
         :class="{active:index===currentIndex}"
         v-for="(item,index) in titles"
         @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabController",
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      currentIndex:0
    }
  },
  methods:{
    itemClick(index){
      this.currentIndex=index
      this.$emit("tabClick",index)
    }
  }
}
</script>

<style scoped>
.tab-controller{
  display: flex;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
  text-align: center;
  font-size: 16px;
  z-index: 9;
}
.tab-controller-item{
  flex: 1;
}
.active{
  color: red;
}
.active span{
  border-bottom: 3px solid red;
  padding: 0 5px;
}
</style>
