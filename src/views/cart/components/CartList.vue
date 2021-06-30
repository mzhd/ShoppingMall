<template>
  <div class="cart-list">
    <Scroll class="content" ref="scroll">
      <CartListItem v-for="(product,i) in cartList" :key="i"
                    :product="product"
      >
      </CartListItem>
    </Scroll>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import CartListItem from "@/views/cart/components/CartListItem";
import Scroll from "@/components/common/scroll/Scroll";

export default {
  name: "CartList",
  components:{
    CartListItem,
    Scroll,
  },
  computed:{
    ...mapGetters({
      cartList:'cartList'
    })
  },
  activated() {
    this.$refs.scroll.bs.refresh()
  }
}
</script>

<style scoped>
  .cart-list{
    height: calc(100% - 44px - 49px - 40px);
  }
  .content{
    height: 100%;
    overflow: hidden;
  }
</style>
