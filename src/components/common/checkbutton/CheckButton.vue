<template>
  <div class="check-button" :class="{checked:isChecked}" @click="checkedClick">
    <img v-if="isChecked"  class="icon" src="@/assets/img/checkbutton/tick_unchecked.svg" alt="">
    <img v-else class="icon" src="@/assets/img/checkbutton/tick_unchecked.svg" alt="">
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props:{
    isChecked:{
      type:Boolean,
      default(){
        return false
      }
    }
  }
}
</script>

<style scoped>
  .check-button{
    border-radius: 10px;
    background: #666666;
  }
  .icon{
    width: 20px;
    height: 20px;
  }
  .checked{
    background: red;
  }
</style>
