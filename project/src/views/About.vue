<template>
  <div>
    <van-nav-bar
      title="关于作者"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <p class="about">关于作者</p>
    <van-cell
      value="2018年进入黑龙江大学计算机专业,逐渐地喜欢上了前端开发，这是我的个人网站，采用了前后端分离的技术,选择做前端开发，前端开发更贴近用户，能够倾听用户的声音，更好玩，更有意思，美的更直观。我们总是在尝试最新的技术，尝试更炫的效果，希望更能优化用户的体验效果！
      关注用户体验，专注前端技术。爱前端，爱生活！我眼中的优秀的技术人员:对技术充满热情,编程是生活的一部分,主动学习新技术。"
    />

    <p class="code"><a href="">项目源代码</a></p>
    <p class="csdn">
      <a href="https://blog.csdn.net/weixin_44623120?spm=1001.2014.3001.5343"
        >CSDN创作</a
      >
    </p>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.about {
  padding: 0.1rem;
  font-weight: bold;
  width: 1rem;
  padding-bottom: 0.2rem;
}
.van-cell {
  font-size: 0.2rem;
}
.code {
  font-weight: bold;
  padding: 0.1rem;
}
.csdn {
  font-weight: bold;
}
</style>