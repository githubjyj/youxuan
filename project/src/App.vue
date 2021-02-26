<template>
  <div id="app">
    <router-view />
    <TabBar></TabBar>
  </div>
</template>

<script>
import TabBar from "@/components/TabBar.vue";
export default {
  name: "App",
  components: { TabBar },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #efefef;
  min-height: 100%;
}

body,
html {
  height: 100%;
}

// 可以设置 rem
html {
  font-size: 100px !important; // reset.css 影响了html的文字，要设置为import
}

p {
  font-size: 0.2rem !important;
}
</style>
