import Vue from 'vue'
// 引入VueRouter插件
import Router from 'vue-router'
// 引入商品列表组件
import GoodsList from '@/pages/GoodsList'
// 引入商品详情页
import GoodsDetail from '@/pages/GoodsDetail'
// 引入购物车组件
import Cart from '@/pages/Cart'
// 引入地址组件
import Address from '@/pages/Address'
// 引入订单确认组件
import OrderConfirm from '@/pages/OrderConfirm'
// 引入订单成功组件
import OrderSuccess from '@/pages/OrderSuccess'
// 使用VueRouter组件
Vue.use(Router)
// 导出VueRouter的实例
export default new Router({
  // mode: 'history',
  // 配置路由
  routes: [
    {
      path: '/',
      name: 'Index',
      component: GoodsList
    },
    {
      path: '/detail/:productId',
      name: 'Detail',
      component: GoodsDetail
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/address',
      name: 'Address',
      component: Address
    },
    {
      path: '/orderConfirm',
      name: 'OrderConfirm',
      component: OrderConfirm
    },
    {
      path: '/orderSuccess',
      name: 'OrderSuccess',
      component: OrderSuccess
    },
    {
      path: '*',
      name: 'Other',
      component: GoodsList
    }
  ]
})
