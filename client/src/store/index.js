import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 状态
  state: {
    nickName: '', // 用户名
    cartCount: 0  // 购物车数量
  },
  // 更改
  mutations: {
    // 更新一下用户名
    updateUserInfo (state, nickName) {
      state.nickName = nickName
    },
    // 更新购物车数量
    updateCartCount (state, cartCount) {
      state.cartCount += cartCount
    },
    // 清空购物车数量
    clearCartCount (state) {
      state.cartCount = 0
    }
  }
})
