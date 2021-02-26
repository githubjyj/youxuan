<template>
  <van-tabbar
    v-model="active"
    v-show="
      $route.path !== '/home/search' &&
      $route.path !== '/mine/login' &&
      $route.path !== '/regist'
    "
  >
    <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
    <van-tabbar-item icon="apps-o" to="/classifier">分类</van-tabbar-item>
    <van-tabbar-item icon="shopping-cart-o" to="/myshopping"
      >历史</van-tabbar-item
    >
    <van-tabbar-item icon="contact" to="/mine">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  data() {
    return {
      active: this.$route.meta.activeNum,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
</style>