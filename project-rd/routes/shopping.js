const router = require('koa-router')()
const { verifyToken } = require('../auth')

let controller = require('../controllers/shoppingController');

// 路由前缀
router.prefix('/shopping')

// 主页面的商品展示
router.get('/aaa', controller.welcome)
router.get('/book', controller.book)
router.get('/search', controller.search)
router.get('/details', controller.details)
router.get('/addHot',controller.addHot)
router.get('/getHot',controller.getHot)
// 购物记录
router.get('/getRecord',verifyToken,controller.getRecord)
// 购物
router.get('/setRecord',verifyToken,controller.setRecord)
// 提交评论
router.get('/comment',verifyToken,controller.comment)
// 我的购物历史
// 必须要先登录，然后才能看到购物记录
module.exports = router