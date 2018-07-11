<template>
  <div class="home">
          <HomeOverlay/>
          <el-container :direction="'vertical'">
            <el-row class="main">
            <el-row>
              <el-col :span="12"><h2>October 24, 2018</h2></el-col>
              <el-col :span="12"><h2>Eric P. Newman Education Center</h2></el-col>
            </el-row>
            <el-row>
              <h2>INSERT COUNTDOWN HERE</h2>
              <h1>HealthSTLx Summit</h1>
            </el-row>
            <el-row>
                <el-button class="btn">Register</el-button>
                <el-button class="btn">Login</el-button>
            </el-row>
            </el-row>
            <el-row>
                <h1>Uncovering answers to major health challenges - both today and tomorrow.</h1>
            </el-row>
            <el-row>
                <h2>Random stuff here about medical what not. Event is free. No cost to attend.</h2>
            </el-row >
            <el-col class="pageInfo">
              <el-col>
              <el-card>
                <p>To unite forward-thinking health practitioners from various specialties and industries experience,
                data management andevolution in healthcare.</p>
                <p>HealthSTLx is executed on the foundation that the best ideas are best discussed and shared</p>
              </el-card>
              </el-col>
              <el-col>
              <el-card align="left">
              <ul>
                <li>Connect with leaders who are shaping the future of healthcare</li>
                <li>Customize your learning experience</li>
                <li>Influence discussion and evolution of healthcare</li>
                <li>Learn innovative ways used to improve patient care</li>
                <li>Equip yourself with knowledge you can implement at your institution</li>
              </ul>
              </el-card>
              </el-col>
            </el-col>
          </el-container>

      </div>
</template>

<script>

import HomeOverlay from "@/components/HomeOverlay.vue";


export default {
  name: "home",
  components: {
    HomeOverlay
  }
};
</script>

<style scoped lang="less">
.btn {
  background: #3336ff;
  color: white;
  border: black;
  width: 12em;
  height: 4em;
  box-shadow: 5px 5px 2px lightgrey;
  // opacity: 0.7;
}
.el-row {
  margin-bottom: 2%;
  padding-top: 1%;
}
.el-col {
  border-radius: 20%;
  border: black;
  width: 100%;
}
body{
  padding-left: 0px;
}
.row-bg {
  padding: 10% 0;
  background-color: #f9fafc;
}
.pageInfo {
  width: 100%;
}
</style>
