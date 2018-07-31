<template>
    <el-container :direction="'vertical'">
        <div class="section">
            <el-row>
                <el-col class="topheader">
                    <div>
                        <el-card style="border: none" shadow="never">
                            <h1>About Page</h1>
                        </el-card>
                    </div>
                </el-col>
                <el-col>
                    <div class="topdesc">
                        <el-card shadow="never">
                            <h3>To unite forward-thinking health practitioners from various specialties and industries experience,
                            data management andevolution in healthcare. HealthSTLx is executed on the foundation that the best ideas are best discussed and shared</h3>
                        </el-card>
                    </div>
                </el-col>
            </el-row>
            <el-row class="image">
                <el-col>
                    <div>
                        <img src="https://sp.slalom.com/ourfirm/studio/Logos/-previous-files/slalom-logo-blue-RGB.jpg" alt="pic">
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="midSection">
            <div class="descList">
                <el-card shadow="never">
                    <h1>Header</h1>
                    <ul>
                        <li>Connect with leaders who are shaping the future of healthcare</li>
                        <li>Customize your learning experience</li>
                        <li>Influence discussion and evolution of healthcare</li>
                        <li>Learn innovative ways used to improve patient care</li>
                        <li>Equip yourself with knowledge you can implement at your institution</li>
                    </ul>
                </el-card>
            </div>
        </div>

         <el-row>
            <el-col :span="20">
                <div class="btmdesc">
                    <el-card shadow="never">
                        <h1>Header</h1>
                        <p>Description</p>
                    </el-card>
                </div>
            </el-col>
        </el-row>
    </el-container>
</template>

<script>
export default {
  name: "AboutContent"
};
</script>

<style scoped lang="less">
.el-container{
  padding-top: 100px;
}
.topheader {
  width: 100%;
  margin-bottom: 20px;
}
img{

}
.topdesc {
  width: 100%;
  word-wrap: break-word;
}
.btmdesc {
  margin-bottom: 20px;
  padding-bottom: 15px;
}
.midSection {
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  margin-bottom: 20px;
}
.section {
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
}
.el-button {
  float: right;
  margin-right: 40px;
  background-color: blue;
  color: white;
}
ul {
  text-align: left;
}
.image {
  padding: 0px 70px;
}
</style>
