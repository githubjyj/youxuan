// 这个文件存储的是鉴权函数
let jwt = require('jsonwebtoken');
let secretKey = "i*love*you"
module.exports = {
    // 产生 token
    createToken:(payload)=>{
        return jwt.sign(payload , secretKey,{expiresIn:"2 days"});
    },

    verifyToken: async (ctx,next) => {
    // 检查token
    let token  = ctx.header.authorization
    if(ctx.header.authorization != "null"){
      try {
        jwt.verify(token, "i*love*you")
        await next()
      } catch(err) {
        ctx.status = 401
        ctx.body = "token过期"
      }
    }
    else{
      ctx.body = {
        word: "亲，请登录",
        success:"false"
      }
    }
  }
}