<template>
  <div class="home">
      <NavBar activeIndex="1"></NavBar>
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
            <el-row class="table">
              <el-table
                :data="tableData"
                stripe
                >
                <el-table-column
                  label="Time"
                  prop="date"
                  width="180">
                </el-table-column>
                <el-table-column
                  label="Event"
                  prop="name"
                  width="210">
                </el-table-column>
              </el-table>
              </el-row>
          </el-container>
      </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "home",
  data() {
    return {
      tableData: [
        {
          date: "7:30 - 8:00",
          name: "Registration/Breakfast/Arrival"
        },
        {
          date: "8:00 - 8:15",
          name: "Introduction"
        },
        {
          date: "8:15 - 9:00",
          name: "Speaker 1"
        },
        {
          date: "9:00 - 10:00",
          name: "Panel 1"
        },
        {
          date: "10:00 - 10:15",
          name: "Morning Break"
        },
        {
          date: "10:15 - 12:00",
          name: "Breakout Session 1"
        },
        {
          date: "12:00 - 1:00",
          name: "Lunch"
        },
        {
          date: "1:00 - 1:45",
          name: "Speaker 2"
        },
        {
          date: "1:45 - 2:45",
          name: "Panel 2"
        },
        {
          date: "2:45 - 3:00",
          name: "Afternoon Break"
        },
        {
          date: "3:00 - 4:45",
          name: "Breakout Session 2"
        },
        {
          date: "4:45 - 5:00",
          name: "Closing Remarks"
        },
        {
          date: "5:00 - 6:00",
          name: "Happy Hour"
        },
        {
          date: "6:00 - 8:00",
          name: "Family Event"
        }
      ]
    };
  },
  components: {
    NavBar
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
.grid-content {
  border-radius: 2%;
  min-height: 30%;
}
.el-card {
  width: 100%;
  height: 100%;
}
.main {
  background-color: #f9fafc;
}
.row-bg {
  padding: 10% 0;
  background-color: #f9fafc;
}
.pageInfo {
  width: 100%;
}
</style>
