let mongoose = require('mongoose');
//连接MongoDB数据库,本地默认端口27017，数据库叫dumall
mongoose.connect('mongodb://127.0.0.1:27017/xshop');

mongoose.connection.on("connected", function () {//连接成功事件
  console.log("MongoDB connected success.")
});

mongoose.connection.on("error", function () {//连接失败事件
  console.log("MongoDB connected fail.")
});

mongoose.connection.on("disconnected", function () {//断开连接事件
  console.log("MongoDB connected disconnected.")
});

module.exports = mongoose;
