<template>
    <el-menu
        :default-active="Index2"
        class="el-menu-demo"
        mode="horizontal"
        fixed="top"
        @select="handleSelect"
        background-color="#FFFFFF"
        text-color="#000000"
        active-text-color="#3336FF">
        <el-menu-item index="1">Home</el-menu-item>
        <el-menu-item index="2">Speakers/Panelists</el-menu-item>
        <el-menu-item index="3">Breakout Sessions</el-menu-item>
        <el-menu-item index="4">Social Feed</el-menu-item>
    </el-menu>
</template>

<script>
export default {
  name: "navBar",
  date() {
    return {
      activeIndex: "1",
      Index2: "2"
    };
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




