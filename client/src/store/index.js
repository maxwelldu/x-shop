import Vue from 'vue'
// 引入Vuex模块
import Vuex from 'vuex'
// 将Vuex插件作为Vue的插件注册
Vue.use(Vuex)

// 导出Vuex的Store实例
export default new Vuex.Store({
  // 状态
  state: {
    // 昵称
    nickName: '',
    // 购物车中商品的数量
    cartCount: 0
  },
  // 更改
  mutations: {
    // 更新用户信息，nickName是载荷
    updateUserInfo (state, nickName) {
      // 更新状态中的nickName为传入的nickName
      state.nickName = nickName
    },
    // 更新购物车数量, cartCount是购物车的数量
    updateCartCount (state, cartCount) {
      // 将购物车的数量递增
      state.cartCount += Number.parseInt(cartCount)
    },
    // 清空购物车数量
    clearCartCount (state) {
      // 设置购物车数量为0
      state.cartCount = 0
    }
  }
})
