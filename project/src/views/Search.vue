<template>
  <div class="searchBox">
    <van-search
      v-model="value"
      show-action
      placeholder="请输入搜索关键词"
      @search="onSearch"
      @cancel="onCancel"
    />
    <!-- 历史与热门组件 -->
    <HistoryHot :hotListData="hotListData"></HistoryHot>
  </div>
</template>

<script>
//  引入组件
import HistoryHot from "@/components/HistoryHot.vue";
import { Toast } from "vant";

export default {
  data() {
    return {
      value: "",
      // 热搜是通过父组件向子组件传值的方式
      hotListData: [],
    };
  },
  created() {
    this.getHot();
  },
  methods: {
    onSearch() {
      // 查找
      this.$http
        .get("http://localhost:3000/shopping/search", {
          params: {
            value: this.value,
          },
        })
        .then((res) => {
          console.log(res.data.results);
          if (res.data.results.length > 0) {
            console.log("查询成功");
            // 查询成功之后，在商品记录中多加一个查询次数
            this.$http.get("http://localhost:3000/shopping/addHot", {
              params: {
                shopping_id: res.data.results[0].shopping_id,
              },
            });
            this.$router.push(
              "/searchdetails/" + res.data.results[0].shopping_id
            );
          } else {
            Toast("没有你想要的内容");
          }
        });
    },
    getHot() {
      // 获取热词
      this.$http.get("http://localhost:3000/shopping/getHot").then((res) => {
        console.log(res);
        this.hotListData = res.data.sortArr;
      });
    },
    onCancel() {
      this.$router.go(-1);
    },
  },
  components: {
    HistoryHot,
  },
};
</script>

<style lang="scss" scoped>
.searchBox {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background-color: rgba(0, 0, 0, 0.3);
}
</style>