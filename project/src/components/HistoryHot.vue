<template>
  <div class="his-hot">

    <div class="hot">
      <h4>热门搜索</h4>
    </div>

    <p class="hotKey">
      <van-tag plain type="primary" v-for="item in hotListData" :key="item.id" @click="search(item.shopping_id)">{{item.shopping_title}}</van-tag>
    </p>

  </div>

</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  // 父组件向子组件传递 搜索记录和热搜
  props:["hotListData"],
  methods: {
    // 点击热门搜索下面的词，进行搜索
    search(shopping_id){
      this.$router.push("/details/" + shopping_id);
    }
  }
};
</script>

<style lang="scss" scoped>

h4 {
  font-size: 0.19rem;
}

.his-hot {
  background-color: #eee;
  height:calc(100% - 0.54rem);
  .hot {
    display: flex;
    justify-content: space-between;
    padding: 0.08rem;
  }
  .hot,.hotKey{
      background-color:#fff;
  }
  .van-tag {
    margin: 0.05rem;
  }
}

</style>