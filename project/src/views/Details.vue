<template>
  <div>
    <!-- 返回按钮 -->
    <van-nav-bar
      title="商品详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />

    <!-- 商品大图 -->
    <van-image
      width="100%"
      fit="contain"
      :src="this.shopping.shopping_img"
      style="display: block"
    />
    <!-- 商品标题 -->
    <p class="title">{{ this.shopping.shopping_title }}</p>
    <!-- 商品价格 -->
    <p class="price">￥{{ this.shopping.shopping_price }}</p>
    <!-- 评论 -->
    <p class="comment">商品评价</p>

    <ul
      v-for="(item, index) in this.commentList"
      :key="index"
      class="commoent_word"
    >
      <li>
        <span>{{ item.comm_content }}</span>
      </li>
    </ul>

    <van-submit-bar
      :price="this.shopping.shopping_price * 100"
      button-text="提交订单"
      @submit="onSubmit"
    />
  </div>
</template>

<script>
import { Toast } from "vant";

// 引入请求地址
import baseURL from '@/utils/request.js'

export default {
  data() {
    return {
      shopping: "",
      commentList: [],
    };
  },
  created() {
    this.getId();
  },
  methods: {
    getId() {
      let shopping_id = this.$route.params.shopping_id;
      this.$http
        .get(baseURL+"shopping/details", {
          params: {
            shopping_id: shopping_id,
          },
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.state == "success") {
            this.shopping = res.data.results[0];
            this.commentList = res.data.results;
          }
        });
    },
    onClickLeft() {
      this.$router.go(-1);
    },

    onSubmit() {
      this.$http
        .get(baseURL+"shopping/setRecord", {
          headers: {
            Authorization: localStorage.getItem("mytoken"),
          },
          params: {
            shopping_id: this.$route.params.shopping_id,
            user_id: localStorage.getItem("userid"),
          },
        })
        .then((res) => {
          if (res.data.state == "success") {
            Toast("购买成功,购物历史中查看!");
          }
        })
        .catch(()=>{
          Toast('检查是否登录')
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.van-nav-bar {
  position: fixed;
  left: 0;
  width: 100%;
  height: 0.46rem;
}
.title {
  font-weight: bold;
  padding: 0.1rem;
}
.price {
  color: red;
  width: 1rem;
  font-weight: bold;
  margin-bottom: 0.2rem;
}
.comment {
  font-weight: bold;
  width: 1rem;
}
.commoent_word li {
  font-size: 20px;
  padding: 10px 0 5px 0;
  border-bottom: 1px dashed black;
}
li {
  font-size: 0.3rem;
}
</style>