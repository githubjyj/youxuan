<template>
  <div>
    <div class="login">
      <van-image
        round
        width="0.8rem"
        height="0.8rem"
        src="https://img01.yzcdn.cn/vant/cat.jpeg"
      />

      <p v-if="this.username">{{ username }}</p>
      <p v-else @click="login">请登录</p>
    </div>

    <div class="cell">
      <van-cell title="购买列表" is-link to="/myshopping" />
      <van-cell title="关于作者" is-link to="/about" />
      <van-cell title="设置" is-link to="/setting" />
    </div>

    <!-- 登录页面 -->
    <transition name="van-slide-right">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Vue from "vue";
import { Notify } from "vant";

// 全局注册
Vue.use(Notify);
export default {
  data() {
    return {
      username: "",
    };
  },
  created() {
    this.getName();
  },
  computed: {},
  methods: {
    login() {
      this.$router.push("/mine/login");
    },
    getName() {
      let name = localStorage.getItem("myName");
      if (name != "") {
        this.username = name;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.login {
  display: flex;
  padding: 0.1rem;
  flex-direction: row;
  border-bottom: 0.01rem solid black;
  background-color: rgb(111, 226, 111);
  p {
    line-height: 0.8rem;
    padding-left: 0.1rem;
    color: white;
  }
}
</style>