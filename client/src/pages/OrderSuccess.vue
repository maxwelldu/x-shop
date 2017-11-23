<template>
    <div>
      <div class="container">
        <div class="page-title-normal">
          <h2 class="page-title-h2"><span>下单成功</span></h2>
        </div>
        <!-- 进度条 -->
        <div class="check-step">
          <ul>
            <li class="cur"><span>确认</span> 地址</li>
            <li class="cur"><span>查看</span> 订单</li>
            <li class="cur"><span>去</span> 支付</li>
            <li class="cur"><span>订单</span> 确认</li>
          </ul>
        </div>

        <div class="order-create">
          <div class="order-create-pic"><img src="/static/ok-2.png" alt=""></div>
          <div class="order-create-main">
            <h3>恭喜你购买成功! <br>您的订单已经被处理!</h3>
            <p>
              <span>订单号：{{orderId}}</span>
              <span>订单总价：{{orderTotal|currency('￥')}}</span>
            </p>
            <div class="order-create-btn-wrap">
              <div class="btn-l-wrap">
                <router-link class="btn btn--m" to="/cart">查看购物车</router-link>
              </div>
              <div class="btn-r-wrap">
                <router-link class="btn btn--m" to="/">再逛逛</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import Public from '@/Public'
export default {
  data () {
    return {
      orderId: '',
      orderTotal: 0
    }
  },
  mixins: [Public],
  mounted () {
    var orderId = this.$route.query.orderId
    if (!orderId) {
      return
    }
    this.$http.get('/users/orderDetail', {
      params: { orderId }
    }).then(res => {
      res = res.data
      if (res.status === '0') {
        this.orderId = orderId
        this.orderTotal = res.result.orderTotal
      }
    })
  }
}
</script>
