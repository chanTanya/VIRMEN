import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../../src/views/pc/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    // component: Home
    redirect: { name: 'HomePc' }
  },
  {
    path: '/pc/home',
    name: 'HomePc',
    meta: { type: 'pc', name: 'Home' },
    component: Home
  },
  {
    path: '/pc/about',
    name: 'AboutPc',
    meta: { type: 'pc', name: 'About' },
    component: () => import('../views/pc/about.vue')
  },
  {
    path: '/pc/machine',
    name: 'MachinePc',
    meta: { type: 'pc', name: 'Machine' },
    component: () => import('../views/pc/machine.vue')
  },
  {
    path: '/pc/product',
    name: 'ProductPc',
    meta: { type: 'pc', name: 'Product' },
    component: () => import('../views/pc/product.vue')
  },
  // {
  //   path: '/pc/product/detail',
  //   name: 'ProductDetailPc',
  //   meta: { type: 'pc', name: 'ProductDetailPc' },
  //   component: () => import('../views/pc/product_detail.vue')
  // },
  // {
  //   path: '/mobile/shop',
  //   name: 'ShopMobile',
  //   meta: { type: 'mobile', name: 'Shop' },
  //   component: () => import('../views/mobile/shop.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
