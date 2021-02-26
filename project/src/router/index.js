import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import Search from "../views/Search.vue";
import Classifier from "../views/Classifier.vue";
import Mine from "../views/Mine.vue";
import MyShopping from "../views/MyShopping.vue";
import Login from "../views/Login.vue";
import Setting from "../views/Setting.vue";
import About from "../views/About.vue";
import Details from "../views/Details.vue";
import Regist from "../views/Regist.vue";
import SearchDetails from "../views/SearchDetail.vue";

// 修改多次点击搜索框时出现的错误
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function(location) {
  return originalPush.call(this, location).catch(() => {});
};

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      activeNum: 0,
    },
    children: [
      {
        path: "/home/search",
        name: "Search",
        component: Search,
      },
    ],
  },

  {
    path: "/classifier",
    name: "Classifier",
    component: Classifier,
    meta: {
      activeNum: 1,
    },
  },

  {
    path: "/mine",
    name: "Mine",
    component: Mine,
    meta: {
      activeNum: 3,
    },
    children: [
      {
        path: "/mine/login",
        name: "Login",
        component: Login,
      },
    ],
  },
  {
    path: "/myshopping",
    name: "MyShopping",
    component: MyShopping,
    meta: {
      activeNum: 2,
    },
  },
  {
    path: "/setting",
    name: "Setting",
    component: Setting,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  // 文章详情  需要知道商品的 id 值
  {
    path: "/details/:shopping_id",
    name: "Details",
    component: Details,
  },
  {
    path: "/regist",
    name: "Regist",
    component: Regist,
  },
  {
    path: "/searchdetails/:shopping_id",
    name: "SearchDetails",
    component: SearchDetails,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
