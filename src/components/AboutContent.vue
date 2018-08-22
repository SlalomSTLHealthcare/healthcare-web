<template>
    <el-container :direction="'vertical'">
        <div class="section">
                    <h1>Venue Information</h1>
                    <div class="decoration"></div>
                    <!-- <h2 class="descriptor">Our goal is to unite forward-thinking health practitioners from various specialties and industries experience,
                    data management and evolution in healthcare. HealthSTLx is executed on the foundation that the best ideas are best discussed and shared.</h2> -->
        </div>
        <div class="infoSection">
          <el-tabs tab-position=top v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="Venue & Parking" name="first">
              <!-- <el-card :body-style="{ padding: '0px' }" class="info-box" shadow="never"> -->
                <el-row  class="where-container" :gutter="20">
                <el-col :xs="24" :sm="24" :md="12">
                  <h3 class="where">Eric P. Newman Education Center</h3>
                  <em>320 South Euclid Ave, St. Louis MO </em>
                </el-col>
                <el-col :xs="24" :sm="24" :md="12">
                  <!-- <img class="venue" src="https://www.uniquevenues.com/sites/uniquevenues.com/files/imagecache/2015_venue_flexslider/venues/slideshow/EricNewmanEduCtr.jpg" alt="pic"> -->
                </el-col>
              </el-row>
              <div class="parking">
                  <h4 class="subheader">Parking</h4>
                  <div class="parking-info">The address of the parking garage is: <em>4560 Children’s Place, St. Louis, MO 63110</em></div>
                  <div class="parking-info">Please use levels 6-7 of the Metro Garage located at the corner of Taylor Avenue and Children’s Place (entrance on Children's Place).</div>
                  <div class="parking-info" style="font-weight: 500;"> Note: The Metro Garage only accepts cash. Daily rate is $15.00. Keep your parking ticket with you so that you can access the garage.</div>
              </div>
                <!-- <h3 class="parking-header">Parking</h3> -->
                <div class="map-container">
                  <iframe width="100%" height="600" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=38.636768, -90.26275900000002&amp;q=320%20South%20Euclid%20Ave%2C%20St.%20Louis%20MO%2063101+(Eric%20P.%20Newman%20Education%20Center)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"><a href="https://www.maps.ie/create-google-map/">Embed Google Map</a></iframe>
                </div>

              <!-- </el-card> -->
            </el-tab-pane>
            <el-tab-pane label="Transportation" name="second">
                <div class="parking">
                    <div class="driving-info">
                      <h6 class="from-header">Driving from Forest Park Avenue</h6>
                        <ul class="directions">
                          <li>South on Taylor Avenue</li>
                          <li>Right on Children's Place</li>
                          <li>Left into Metro Garage</li>
                          <li>Exit garage to the northwest, walk the length of the skybridge, the venue will be on your right.</li>
                        </ul>
                    </div>
                    <div class="driving-info">
                      <h6 class="from-header">Driving from the Airport</h6>
                        <ul class="directions">
                          <li>I-70 east to I-170 south</li>
                          <li>1-170 south to 64/40</li>
                          <li>East on 64/40 to Kingshighway</li>
                          <li>North on Kingshighway to Forest Park Ave</li>
                          <li>Turn Right on Forest Park Ave to Taylor Ave</li>
                          <li>Turn Right on Taylor Ave to Children’s Place</li>
                          <li>Turn Right on Children’s Place</li>
                          <li>Turn Left into Metro garage</li>
                          <li>Exit garage to the northwest, walk the length of the skybridge, the venue will be on your right.</li>
                        </ul>
                    </div>
                    <div class="driving-info">
                      <h6 class="from-header">Driving from downtown St. Louis and points east</h6>
                        <ul class="directions">
                          <li>West on I-64</li>
                          <li>Exit onto Forest Park Avenue</li>
                          <li>Forest Park Avenue west to Taylor Avenue</li>
                          <li>Left on Taylor Avenue to Children’s Place</li>
                          <li>Right on Children’s Place</li>
                          <li>Left into Metro Garage</li>
                          <li>Exit garage to the northwest, walk the length of the skybridge, the venue will be on your right.</li>
                        </ul>
                    </div>
                    <div class="driving-info">
                      <h6 class="from-header">Via MetroLink</h6>
                        <ul class="directions">
                          <li>Disembark at the Central West End stop</li>
                          <li>Ascend stairs or use elevator to Euclid Avenue</li>
                          <li>Right on Euclid Avenue to the venue, it will be on the east side of Euclid Avenue</li>
                        </ul>
                    </div>
                </div>
                <div class="map-container">
                  <iframe width="100%" height="600" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=38.636768, -90.26275900000002&amp;q=320%20South%20Euclid%20Ave%2C%20St.%20Louis%20MO%2063101+(Eric%20P.%20Newman%20Education%20Center)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"><a href="https://www.maps.ie/create-google-map/">Embed Google Map</a></iframe>
                </div>
            </el-tab-pane>
            <!-- <el-tab-pane label="Explore" name="third">
                  <h3 class="goal">Explore the Area</h3>
                  <i>Coming Soon</i>
            </el-tab-pane>
            <el-tab-pane label="Vision" name="fourth">
                  <h3 class="goal">Our Vision</h3>
                  <p>Our goal is to unite forward-thinking health practitioners from various specialties and industries experience, data management andevolution in healthcare. HealthSTLx is executed on the foundation that the best ideas are best discussed and shared.</p>
            </el-tab-pane> -->
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
@import '../global-variables';
.about-content {
  // border: 100px solid #f7f7f7;
}
.section {
  margin: 40px;
}
h1 {
  font-size: 40px;
  font-weight: lighter;
  margin-left: 60px;
  margin-bottom: 16px;
  color: #fff;
}
.goal, .when{
  font-size: 30px;
  font-weight: normal;
  letter-spacing: 2px;
}
.decoration {
  background-color: @secondary;
  height: 5px;
  width: 75px;
  margin-left: 60px;
}
.descriptor {
    color: #fff;
  font-size: 20px;
  font-weight: lighter;
  margin-left: 60px;
  margin-right: 60px;
  font-style: italic;
  margin-top: 30px;
}
.info-box {
  margin: 30px;
  background-color: transparent;

}
ul {
  text-align: center;
  list-style: none;
  line-height: 30px;
}
.infoSection {
  margin: 0px 100px 60px;
  padding: 50px;
  background-color: #fff;
}
.where, .date, .parking-header, .subsubheader{
  font-size: 26px;
  font-weight: 400;
  // letter-spacing: 2px;
  margin-top: 20px;
  margin-bottom: 10px;
}
.slalom-logo {
  width: 80%;
  padding: 60px;
}
.place {
  display: flex;
  text-align: left;
  justify-content: center;
  align-items: center;
}
.el-card {
  border: none;
  // height: 3000px;
}
.map-container {
  margin: 30px 0 0;
}

.subheader {
  display: block;
  font-size: 24px;
  font-weight: 300;
  margin: 26px 0 6px;
}
.parking-info {
  text-align: left;
  font-size: 16px;
  font-weight: 300;
  margin-bottom: 6px;
  // line-height: 40px;
}
.subsubheader{
  font-size: 20px;
  padding-left: 20px;
  font-style: italic;
}
.from-header {
  font-size: 20px;
  font-weight: 300;
  margin: 30px 0 0;
}
.directions {
  list-style-type: circle;
  text-align: left;
  margin: 6px 0;
}
.venue-image {
  text-align: center;
}
@media (max-width: 768px) {
  .infoSection {
    margin: 0% 3% 3%;
    padding: 1%;
    background-color: #fff;
  }
    .descriptor {
      font-size: 17px;
      font-weight: lighter;
      font-style: italic;
      margin-top: 30px;
  }
  .parking {
    font-size: 10px;
    padding-left: 0%;
  }
  .parking-info {
    padding: 0px 0px;
    text-align: left;
    font-size: 13px;
    line-height: 40px;
  }
}
</style>
