// 引入授权文件
const { createToken } = require("../auth");
// 引入数据库文件
const model = require("../models/userModel");

module.exports = {
  async login(ctx) {
    let { username, password } = ctx.request.body;
    // 连接数据库
    let results = await model.getUserByNameAndPwd(username, password);
    console.log(results)
    if (results.length > 0){
        // 登录成功
        // 1.生成 token
        let payload = {
            userId:results[0].user_id,
            username:results[0].username,
          }
        // 产生 token
        let token = createToken(payload);
        ctx.body = {
          status:"success",
          token,
          payload
        }
      }else {
          ctx.body = {
            status: "fail",
        };
    }
  },

  async regist(ctx) {
    // 接收表单数据
    let { username, password } = ctx.request.body;
    console.log(username,password);
    // 连接数据库
    let results = await model.saveUser({ username, password });
    // 4. 根据查询的结果跳转(或输出)不同的结果页面
    if (results.insertId) {
        ctx.body = {
          status:"success",
        }
      } else {
        ctx.body = "fail"
      }
  }
};
