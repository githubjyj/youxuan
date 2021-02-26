<template>
  <div>
    <van-nav-bar
      title="设置"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-button type="primary" block @click="loginOut" class="login_out"
      >退出登录</van-button
    >
  </div>
</template>

<script>
import Vue from "vue";
import { Dialog } from "vant";
// 全局注册
Vue.use(Dialog);

import { Toast } from "vant";
Vue.use(Toast);

export default {
  data() {
    return {};
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      let token = localStorage.getItem("mytoken");
      console.log(token);
      if (token) {
        // 表示已经登录了
      } else {
        console.log("没有token");
        // 表示没有登录
        this.$router.push("/mine/login");
      }
    },

    loginOut() {
      Dialog.alert({
        title: "提示",
        message: "你确定要退出登录吗",
      }).then(() => {
        localStorage.setItem("mytoken", "");
        localStorage.setItem("myName", "");
        Toast("退出成功");
        this.$router.push("mine");
      });
    },
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.login_out {
  margin-top: 1rem;
}
</style>