<template>
  <div>
    <!-- 搜索框 -->
    <van-search
      v-model="searchValue"
      disabled
      shape="round"
      placeholder="请输入搜索关键词"
      @click="$router.push('/home/search')"
    />

    <van-sidebar v-model="activeKey" @change="onChange">
      <van-sidebar-item title="书籍杂志" />
      <van-sidebar-item title="窗帘纱布" />
      <van-sidebar-item title="特色食物" />
      <van-sidebar-item title="智能手机" />
    </van-sidebar>

    <div class="shop">
      <div class="shop_img">
        <van-image
          :src="this.list[0].shopping_img"
          style="display: block"
          width="2.95rem"
          height="2.11rem"
        />
      </div>

      <div class="shops">
        <ul>
          <li v-for="item in list" :key="item.id" @click="getDetails(item)">
            <img :src="item.shopping_img" width="100%" style="display: block" />
            <p>{{ item.shopping_title }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 选项栏数字
      activeKey: 0,
      searchValue: "",
      list: [],
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.$http
        .get("http://localhost:3000/shopping/book", {
          params: {
            activeKey: this.activeKey + 1,
          },
        })
        .then((res) => {
          this.list = res.data.results;
        });
    },

    onChange() {
      // 点击不同的分类
      this.$http
        .get("http://localhost:3000/shopping/book", {
          params: {
            activeKey: this.activeKey + 1,
          },
        })
        .then((res) => {
          console.log(res.data.results);
          this.list = res.data.results;
        });
    },
    getDetails(item) {
      this.$router.push("/details/" + item.shopping_id);
    },
  },
};
</script>

<style lang="scss" scoped>
.shop {
  margin-left: 0.8rem;
  margin-top: -2.35rem;
}
ul {
  padding: 0.03rem 0.1rem 0.5rem 0.1rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-left: 0;
  padding-right: 0;
  li {
    width: 45%;
    margin-bottom: 0.1rem;
    background: #fff;
    text-align: center;
    line-height: 0.3rem;
  }
}
</style>