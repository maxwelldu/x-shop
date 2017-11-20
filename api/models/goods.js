let mongoose = require('../db')
let Schema = mongoose.Schema;

let produtSchema = new Schema({
  "productId":String,           //产品ID
  "productName":String,         //产品名称
  "salePrice":Number,           //价格
  "checked":String,             //购物车中是否选中
  "productNum":Number,          //购买的产品数量
  "productImage":String         //产品图片
});

module.exports = mongoose.model('Good',produtSchema);
