<template>
  <div class="search-detail">
    <van-nav-bar
      title="查询结果"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />

    <van-card
      :price="item.shopping_price"
      :desc="item.shopping_description"
      :title="item.shopping_title"
      :thumb="item.shopping_img"
      v-for="(item, index) in shopping"
      :key="index"
      @click="getDetails(item)"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      shopping: [],
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      let shopping_id = this.$route.params.shopping_id;
      this.$http
        .get("http://localhost:3000/shopping/details", {
          params: {
            shopping_id: shopping_id,
          },
        })
        .then((res) => {
          let shop = res.data.results[0];
          this.shopping.push(shop);
        });
    },
    getDetails(item) {
      this.$router.push("/details/" + item.shopping_id);
    },
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.search-detail {
  .searchvalue {
    padding: 0.1rem;
  }
  padding-bottom: 0.5rem;
  p {
    width: 1rem;
    padding-top: 0.1rem;
    font-weight: bold;
  }
}
</style>