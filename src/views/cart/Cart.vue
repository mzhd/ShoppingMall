<template>
  <div id="cart">
<!--    导航栏-->
    <NavBar class="cart-navbar">
      <template #center>
        购物车({{ length }})
      </template>
    </NavBar>
<!--    商品列表-->
    <CartList>

    </CartList>
<!--    底部汇总-->
    <CartBottomBar>

    </CartBottomBar>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import NavBar from "@/components/common/navbar/NavBar";
import CartList from "@/views/cart/components/CartList";
import CartBottomBar from "@/views/cart/components/CartBottomBar";

export default {
  name: "Cart",
  components:{
    NavBar,
    CartList,
    CartBottomBar,
  },
  computed: {
    //两种用法
    // ...mapGetters(['cartLength','cartList'])
    ...mapGetters({
      length: 'cartLength'
    })
  }
}
</script>

<style scoped>
  #cart{
    height: 100vh;
  }
  .cart-navbar{
    background-color: var(--color-high-text);
    color: #ffffff;
  }
</style>
