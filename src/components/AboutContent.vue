<template>
    <el-container :direction="'vertical'">
        <div class="section">
        <el-row class="left">
            <el-col>
                <div class="topheader">
                    <el-card shadow="never">
                        <h1>About Page</h1>
                    </el-card>
                </div>
            </el-col>
            <el-col>
                <div class="topdesc">
                    <el-card shadow="never">
                        <h2>Page Description</h2>
                    </el-card>
                </div>
            </el-col>
        </el-row>
        <el-row class="right" style="margin-right: 7%">
            <el-col>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy2T13a1orJ1YBT47YSwCj4IHb-wjQvfQKZV_xhJ4Wtt-icM6S" alt="pic">
                </div>
            </el-col>
        </el-row>
        </div>
        <div class="midSection">
        <el-row class="left">
            <el-col>
                <div class="header">
                    <el-card shadow="never">
                        <h1>header</h1>
                    </el-card>
                </div>
            </el-col>
            <el-col>
                <div class="desc">
                    <el-card shadow="never">
                        <p>Description Description Description Description Description Description Description Description Description Description Description
                            Description Description Description Description Description Description Description Description Description Description Description
                            Description Description Description Description Description Description Description Description Description Description Description
                        </p>
                    </el-card>
                </div>
            </el-col>
        </el-row>
        <el-row class="right">
            <el-col>
                <div class="header">
                    <el-card shadow="never">
                        <h1>header</h1>
                    </el-card>
                </div>
            </el-col>
            <el-col>
                <div class="desc">
                    <el-card shadow="never">
                        <p>Description Description Description Description Description Description Description Description Description Description Description
                            Description Description Description Description Description Description Description Description Description Description Description
                            Description Description Description Description Description Description Description Description Description Description Description
                        </p>
                    </el-card>
                </div>
            </el-col>
        </el-row>        
        </div>
        <el-row>
            <el-button >Register</el-button>
        </el-row>
         <el-row>
            <el-col style="width: 50%">
                <div class="header">
                    <el-card shadow="never">
                        <h1>header</h1>
                    </el-card>
                </div>
            </el-col>
            <el-col>
                <div class="desc" style="width: 90%">
                    <el-card shadow="never">
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
.header {
  width: 27%;
  margin-bottom: 1%;
  float: left;
}
.topheader {
  width: 250px;
  margin-bottom: 1%;
}
.topdesc {
  width: 1000px;
  word-wrap: break-word;
}
.desc {
  width: 800px;
  margin-bottom: 1%;
  word-wrap: break-word;
}
.section {
  width: 100%;
  margin-bottom: 1%;
}
.left {
  float: left;
}
.right {
  float: right;
}
.el-button {
  float: right;
  margin-right: 6.4%;
}
</style>

