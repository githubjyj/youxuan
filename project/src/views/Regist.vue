<template>
  <div class="regist_box">
    <span class="close" @click="close">✖</span>

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
      @click="regist"
      color="linear-gradient(to right, #ff6034, #ee0a24)"
      >点击注册</van-button
    >
  </div>
</template>

<script>
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
      this.$router.go(-1);
    },

    regist() {
      console.log("开始注册");
      // 将账号密码传送给后端
      this.$http
        .post(baseURL+"users/regist", {
          username: this.username,
          password: this.password,
        })
        //后端的返回值
        .then((response) => {
          console.log(response);
          this.$router.push("/mine/login");
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.regist_box {
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
</style>