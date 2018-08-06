<template>
    <el-container :direction="'vertical'">
        <div class="section">
            <el-row :gutter="20">
                <el-col :span="16" class="topheader">
                    <h1>About</h1>
                    <div class="decoration"></div>
                    <h2 class="descriptor">Our goal is to unite forward-thinking health practitioners from various specialties and industries experience,
                    data management andevolution in healthcare. HealthSTLx is executed on the foundation that the best ideas are best discussed and shared.</h2>
                </el-col>
                <el-col :span="8">
                    <img src="https://sp.slalom.com/ourfirm/studio/Logos/-previous-files/slalom-logo-blue-RGB.jpg" alt="pic">
                </el-col>
            </el-row>
        </div>
        <div class="infoSection">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="What" name="first">
              <el-card class="info-box" shadow="never">
                  <h3 class="goal">General Information</h3>
                      <ul>
                          <li>Bring together healthcare practitioners at all levels</li>
                          <li>Establish a unique and sustainable high-level forum and network</li>
                          <li>Influence discussion and evolution of healthcare</li>
                          <li>Learn innovative ways used to improve patient care</li>
                          <li>Uncover answers to major health challenges – both today and tomorrow</li>
                      </ul>
              </el-card>
            </el-tab-pane>
            <el-tab-pane label="Where" name="second">
              <el-card class="info-box" shadow="never">
                <el-row :gutter="20">
                  <div class="place">
                    <!-- <el-col :span="16"> -->
                      <h3 class="where">Eric P. Newman Education Center</h3>
                    <!-- </el-col> -->
                    <!-- <el-col :span="8"> -->
                      <img src="https://www.uniquevenues.com/sites/uniquevenues.com/files/imagecache/2015_venue_flexslider/venues/slideshow/EricNewmanEduCtr.jpg" alt="pic">
                    <!-- </el-col> -->
                  </div>
                </el-row>
              </el-card>
            </el-tab-pane>
            <el-tab-pane label="When" name="third">
              <el-card class="info-box" shadow="never">
                  <h3 class="when">When</h3>
                    <h4 class="date">October 24th, 2018</h4>
              </el-card>
            </el-tab-pane>
            <el-tab-pane label="Why" name="fourth">
              <el-card class="info-box" shadow="never">
                  <h3 class="goal">Our Goal</h3>
                      <ul>
                          <li>Bring together healthcare practitioners at all levels</li>
                          <li>Establish a unique and sustainable high-level forum and network</li>
                          <li>Influence discussion and evolution of healthcare</li>
                          <li>Learn innovative ways used to improve patient care</li>
                          <li>Uncover answers to major health challenges – both today and tomorrow</li>
                      </ul>
              </el-card>
            </el-tab-pane>
          </el-tabs>
        </div>
    </el-container>
</template>

<script>
export default {
  name: "AboutContent",
  data() {
    return {
      activeName: 'first'
    };
  },
  methods: {
  handleClick(tab, event) {
    console.log(tab, event);
  }
}
};
</script>

<style scoped lang="less">
h1 {
  font-size: 40px;
  font-weight: lighter;
  margin-left: 6%;
}
.goal, .when{
  font-size: 30px;
  font-weight: normal;
  letter-spacing: 2px;
}
.decoration {
  background-color: #005aed;;
  height: 5px;
  width: 75px;
  margin-left: 6%;
}
.descriptor {
  font-size: 20px;
  font-weight: lighter;
  margin-left: 6%;
  font-style: italic;
}
.info-box {
  margin: 30px;
  text-align: center;
}
ul {
  text-align: center;
  list-style: none;
  line-height: 30px;
}
.infoSection {
  margin: 30px;
}
.where, .date{
  font-size: 40px;
  font-weight: normal;
  letter-spacing: 2px;
}
img {
  width: 300px;
  float: right;
}
</style>
