<template>
    <el-menu
        :default-active="activeIndex"
        @select="handleSelect"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#FFFFFF"
        text-color="#000000"
        active-text-color="#3336FF">
        <el-menu-item index="1"><router-link to="/">Home</router-link></el-menu-item>
        <el-menu-item index="2"><router-link to="people">Speakers/Panelists</router-link></el-menu-item>
        <el-menu-item index="3"><router-link to="about">Breakout Sessions</router-link></el-menu-item>
        <el-menu-item index="4">Social Feed</el-menu-item>
    </el-menu>
</template>

<script>
export default {
  name: "navBar",
  props: {
    activeIndex: String
  },
  methods: {
    handleSelect(key, keyPath) {}
  }
};
</script>

<style>
.el-menu {
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
}
</style>

<style lang="less" scoped>
li a {
  text-decoration: none;
}
</style>
