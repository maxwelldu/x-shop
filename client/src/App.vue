<template>
  <div id="app">
    <!-- 使用头部组件 -->
    <nav-header></nav-header>
    <!-- 路由的出口 -->
    <router-view></router-view>
    <!-- 使用底部组件 -->
    <nav-footer></nav-footer>
  </div>
</template>

<script>
// 导入头部
import NavHeader from './components/NavHeader'
// 导入底部
import NavFooter from './components/NavFooter'
export default {
  components: {
    // 注册头部为App的子组件
    NavHeader,
    // 注册底部为App的子组件
    NavFooter
  }
}
</script>
