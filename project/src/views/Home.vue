<template>
  <div>
    <!-- 搜索框 -->
    <van-search
      disabled
      shape="round"
      placeholder="请输入搜索关键词"
      @click="$router.push('/home/search')"
    />

    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>书籍</van-swipe-item>
      <van-swipe-item>美食</van-swipe-item>
      <van-swipe-item>窗帘</van-swipe-item>
      <van-swipe-item>手机</van-swipe-item>
    </van-swipe>

    <ul class="shopping" v-if="this.$route.name != 'Search'">
      <li v-for="(item, index) in list" :key="index" @click="getDetails(item)">
        <img :src="item.shopping_img" width="100%" style="display: block" />
        <p>{{ item.shopping_title }}</p>
        <p class="price">{{ item.shopping_price }}</p>
      </li>

      <div>
        <p v-if="moreShowBoolen" @click="moreShow" class="addMore">
          点击查询更多
        </p>
        <p v-else class="addMore">已无更多</p>
      </div>
    </ul>

    <!-- 点击搜索框之后跳转后的页面 -->
    <transition name="van-slide-right">
      <router-view></router-view>
    </transition>
    
  </div>
</template>

<script>
// 引入请求地址
import baseURL from "@/utils/request.js";

export default {
  name: "Home",
  data() {
    return {
      list: [],
      moreShowBoolen: false,
      nowPage: 1,
    };
  },
  components: {},
  created() {
    this.init();
  },
  methods: {
    init() {
      this.$http.get(baseURL + "shopping/aaa").then((res) => {
        console.log(res);
        if (res.data.results.length <= 6) {
          // 10条数据一页
          this.list = res.data.results;
          this.moreShowBoolen = false;
        } else {
          this.list = res.data.results.slice(0, 6);
          this.moreShowBoolen = true;
        }
      });
    },

    moreShow() {
      // 点击查询更多
      this.$http.get(baseURL + "shopping/aaa").then((res) => {
        this.list = this.list.concat(
          res.data.results.slice(this.nowPage * 6, (this.nowPage + 1) * 6)
        );
        this.nowPage++;
        if (res.data.results.length > this.nowPage * 6) {
          this.moreShowBoolen = true;
        } else {
          this.moreShowBoolen = false;
        }
      });
    },
    // 显示商品的详情
    getDetails(item) {
      this.$router.push("/details/" + item.shopping_id);
    },
  },
};
</script>
<style lang="scss" scoped>
// 轮播图的样式
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 0.2rem;
  line-height: 1.5rem;
  text-align: center;
  background-color: rgb(208, 208, 208);
}
ul {
  padding: 0.1rem 0.1rem 0.5rem 0.1rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  li {
    width: 49%;
    margin-bottom: 0.1rem;
    background: #fff;
    text-align: center;
    line-height: 0.3rem;
    .price {
      color: darkred;
    }
  }
  .addMore {
    margin-left: 1.35rem;
  }
}
</style>