# project

1.创建文件
2.下载vantui 
3.引入组件（手动按需引入组件）
4.将项目中引入组件的代码抽离，放入vantui下面的index.js文件中，页面中引入index.js文件
5.在main.js文件中引入这个index.js文件，每一个页面都能使用
6.修改为自动按需引入的方式，不要要手动引入js文件
7.引入 rem 
8.引入 reset.css   npm i reset-css
9.引入轮播图
10.引入搜索详情页面
11.解决多次点击搜索框之后的router官方的错误
12.所搜详情页面滑动进入，vant组件中的内容

父路由往子路由中跳，需要router-view标签

```html
<transition name="van-slide-right">
    <router-view></router-view>
</transition>
```
13.创建后端项目之后，要安装 axios  在 main.js 中引入
14.制作 我的 页面，引入图片组件,导入 Cell 单元格 组件。
15.制作购买历史的卡片
16.商品分类页面
17.主页商品列表 懒加载



