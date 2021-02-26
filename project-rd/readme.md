创建后端项目流程
1.在 npm官网 查找koa-generator,使用2.x版本
Create the app:
```
    koa2 项目名字
    npm install
    npm start 启动
```
默认监听的端口号是 3000
koa 默认在 3000端口号放了一个界面

2.在初始的routes下的index.js中，还是用render加载页面的，此时后端只需要加载数据就行
不需要渲染页面

3.解决跨域的问题 使用 koa-cors

4.token 创建 在npm官网使用 jsonwebtoken

```
var jwt = require('jsonwebtoken');
var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
```
5.验证 token 
```
try {
  var decoded = jwt.verify(token, 'wrong-secret');
} catch(err) {
  // err
}
```
在前端发送地址请求的时候，传递了参数有 url headers，
其中 headers 里有 Authorization 值为token值

请求发送之后，在浏览器的network中可以看到
后端通过检测地址请求中是否有Authorization，来判断是否有token值

6.数据库的设计

7.在用户登录之后，显示个人的购买记录和点击购买操作，都需要有鉴权。鉴权操作是重复代码，可以提出来。

8.安装数据库的插件  npm install mysql















