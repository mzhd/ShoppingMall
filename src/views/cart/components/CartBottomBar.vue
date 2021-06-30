<template>
  <div class="cart-bottom-bar">
    <div class="check-content" @click="selectAllClick">
      <CheckButton
        :isChecked="isSelectAll"
        class="check-button"></CheckButton>
      <span>全选</span>
    </div>
    <div class="total-price">
      合计:￥{{totalPrice}}
    </div>
    <div class="calculate">
      去计算({{checkedCount}})
    </div>
  </div>
</template>

<script>
import CheckButton from "@/components/common/checkbutton/CheckButton";
import {mapGetters} from "vuex";

export default {
  name: "CartBottomBar",
  components:{
    CheckButton,
  },
  computed:{
    ...mapGetters(['cartList']),
    totalPrice(){
      return this.cartList.filter((item)=>{
        return item.checked===true
      }).reduce((preValue,next)=>{
        return preValue+next.price*next.count
      },0).toFixed(2)
    },
    //选中的商品数量
    checkedCount(){
      return this.cartList.filter((item)=>item.checked===true).length
    },
    isSelectAll(){
      if(this.cartList.length===0) return false
      return !this.cartList.find((item)=>!item.checked)
    }
  },
  methods:{
    selectAllClick(){
      if(this.isSelectAll)
        this.cartList.filter(item=>item.checked=false)
      else
        this.cartList.filter(item=>item.checked=true)
    }
  }
}
</script>

<style scoped>
  .cart-bottom-bar{
    height: 40px;
    background-color: red;
    display: flex;
    align-items: center;
  }
  .check-content{
    margin-left: 10px;
    display: flex;
    height: 100%;
    width: 60px;
    align-items: center;
  }
  .check-button{
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }
  .total-price{
    margin-left: 20px;
    flex: 1;
    text-align: center;
  }
  .calculate{
    width: 100px;
    text-align: center;
  }
</style>
