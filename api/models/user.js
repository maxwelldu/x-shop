let mongoose = require('../db');

let userSchema = new mongoose.Schema({
  "userId":String,            //用户ID
  "userName":String,          //用户名
  "userPwd":String,           //用户密码
  "orderList":Array,          //订单列表
  "cartList":[                //购物车列表
    {
      "productId":String,     //产品ID
      "productName":String,   //产品名称
      "salePrice":String,     //产品价格
      "productImage":String,  //产品图片
      "checked":String,       //用户是否选中准备结算
      "productNum":String     //购买的产品数量
    }
  ],
  "addressList":[             //地址列表
    {
      "addressId": String,    //地址ID
      "userName": String,     //用户名
      "streetName": String,   //街道名称
      "postCode": Number,     //邮编
      "tel": Number,          //电话
      "isDefault": { type: Boolean, default: false }   //是否是默认
    }
  ]
});

module.exports = mongoose.model("User",userSchema);
