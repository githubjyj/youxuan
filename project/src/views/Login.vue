<template>
  <div class="login_box">
    <span class="close" @click="close">✖</span>
    <!-- 账号 密码 -->
    <p class="welcome">欢迎回来！</p>

    <van-cell-group>
      <van-field v-model="username" label="用户名" placeholder="请输入用户名" />
      <van-field
        v-model="password"
        type="password"
        label="密码"
        placeholder="请输入密码"
      />
    </van-cell-group>

    <van-button
      type="primary"
      size="large"
      @click="login"
      color="linear-gradient(to right, #ff6034, #ee0a24)"
      >点击登录</van-button
    >
    <van-button round type="info" @click="regist" class="registBtn"
      >点击注册</van-button
    >
  </div>
</template>

<script>
import Vue from "vue";
import { Toast } from "vant";
Vue.use(Toast);

// 引入请求地址
import baseURL from '@/utils/request.js'

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    close() {
      this.$router.push("/mine");
    },

    login() {
      // 将账号密码传送给后端
      this.$http
        .post(baseURL+"users/login", {
          username: this.username,
          password: this.password,
        })
        //后端的返回值
        .then((response) => {
          console.log(response.data);
          let { status, token, payload } = response.data;
          if (status == "success") {
            Toast("登录成功");
            // 存储 token
            this.$store.dispatch("setToken", token);
            // 存储 username
            this.$store.dispatch("setName", payload.username);
            // 存储用户的 userid 在购买商品的时候使用到了
            this.$store.dispatch("setUserId", payload.userId);
            // 跳转页面
            this.$router.push("/myshopping");
          } else {
            Toast("账号或密码输入错误");
          }
        });
    },
    regist() {
      this.$router.push("/regist");
    },
  },
};
</script>

<style scoped lang="scss">
.login_box {
  width: 100%;
  height: 85%;
  position: absolute;
  top: 0;
  background-color: #fff;
  padding-top: 1rem;
  .close {
    font-size: 0.25rem;
    position: absolute;
    top: 0.1rem;
    left: 0.1rem;
  }
  .welcome {
    width: 1.3rem;
    font-weight: bold;
    margin-bottom: 0.1rem;
  }
}
.regist {
  color: #000;
  font-weight: bold;
  padding: 0.2rem;
}
.regist:hover {
  color: red;
}
</style>