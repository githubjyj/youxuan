const router = require('koa-router')()

// 处理登录
let controller = require("../controllers/userController");

// 路由前缀
router.prefix('/users')

router.post('/login', controller.login)

router.post('/regist',controller.regist)

module.exports = router
