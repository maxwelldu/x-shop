<template>
  <section class="bread">
    <div class="bread-wrap">
      <nav>
        <a href="/"> 首页 </a>
        <slot></slot>
      </nav>
    </div>
  </section>
</template>
<script>
import '@/assets/css/bread.css'
export default {
}
</script>
