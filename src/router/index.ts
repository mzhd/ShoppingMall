import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const Home=()=>import(/* webpackChunkName: "home" */ '../views/home/Home.vue')
const Cart=()=>import(/* webpackChunkName: "cart" */ '../views/cart/Cart.vue')
const Category=()=>import(/* webpackChunkName: "category" */ '../views/category/Category.vue')
const Mine=()=>import(/* webpackChunkName: "mine" */ '../views/mine/Mine.vue')
const routes: Array<RouteRecordRaw> = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    name:"Home",
    component:Home
  },
  {
    path:'/category',
    name:"Category",
    component:Category
  },
  {
    path:'/cart',
    name:"Cart",
    component:Cart
  },
  {
    path:'/mine',
    name:"Mine",
    component:Mine
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
