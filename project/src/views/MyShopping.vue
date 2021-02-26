<template>
  <div class="shopping-history">
    <p class="history">购买历史</p>

    <div v-if="!this.token">
      <van-notice-bar color="#1989fa" background="#ecf9ff" left-icon="info-o"
        >先登录，后查看。
      </van-notice-bar>

      <van-image
        width="100%"
        src="https://img.imgdb.cn/item/60377cc35f4313ce252948c8.png"
      />
    </div>

    <div v-if="this.list.length == 0 && this.token">
      <van-image
        width="100%"
        src="https://img.imgdb.cn/item/60377ebe5f4313ce252af8e7.png"
      />
    </div>

    <div v-if="this.token && this.list.length != 0">
      <van-card
        :price="item.shopping_price"
        :desc="item.time"
        :title="item.shopping_title"
        :thumb="item.shopping_img"
        v-for="(item, index) in list"
        :key="index"
        @click="setComment(item)"
      />
    </div>

    <!-- 登录按钮 -->
    <van-button v-if="!this.token" type="danger" @click="login"
      >点击登录</van-button
    >

    <!-- 评论弹出窗口 -->
    <van-popup v-model="isShow" position="bottom" :style="{ height: '30%' }">
      <van-field
        v-model="comment"
        rows="2"
        autosize
        label="留言"
        type="textarea"
        maxlength="20"
        placeholder="我的评价"
        show-word-limit
      />
      <van-button type="primary" size="small" @click="pushComment"
        >确定</van-button
      >
    </van-popup>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      list: [],
      show: false,
      token: null,
      comment: "",
      isShow: false,
      item: null,
    };
  },
  created() {
    this.token = localStorage.getItem("mytoken");
    this.init();
  },
  methods: {
    init() {
      this.axios({
        url: "http://localhost:3000/shopping/getRecord",
        headers: {
          Authorization: localStorage.getItem("mytoken"),
        },
        params: {
          user_id: localStorage.getItem("userid"),
        },
      })
        .then((res) => {
          if (res.data.state == "success") {
            console.log(res);
            this.list = res.data.shopping;
            this.show = true;
          } else {
            console.log("错误");
          }
        })
        .catch(() => {
          console.log("鉴权进到了catch中");
        });
    },
    login() {
      this.$router.push("/mine/login");
    },

    // 点击可以对买过的商品进行评论
    setComment(item) {
      this.isShow = true;
      this.item = item;
    },

    pushComment() {
      this.axios({
        url: "http://localhost:3000/shopping/comment",
        headers: {
          Authorization: localStorage.getItem("mytoken"),
        },
        params: {
          content: this.comment,
          shopping_id: this.item.shopping_id,
        },
      }).then((res) => {
        if (res.data.state == "success") {
          Toast("留言成功");
        }
      });
      this.isShow = false;
    },
  },
};
</script>

<style scoped lang="scss">
.shopping-history {
  .history {
    padding: 0.1rem;
  }
  padding-bottom: 0.5rem;
  p {
    width: 1rem;
    padding-top: 0.1rem;
    font-weight: bold;
  }
  .van-card__title {
    font-weight: bold;
  }
}
</style>