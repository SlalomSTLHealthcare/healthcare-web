<template>
  <div class="profile">
  <el-card v-if="type==='profile'" class="box-card">
    <div slot="header">
      <span class="header"> <i class="fas fa-user-circle"></i> Profile</span>
      <span class="action-buttons">
        <el-button v-if ="!update" @click="update=true" type="primary" round>Update</el-button>
        <el-button v-if="update" @click="updateRegistration" round>Save</el-button>
        <el-button @click="deleteReg" type="danger" round>Delete</el-button>
      </span>
    </div>
      <el-form :disabled="!update" label-position="top" ref="form" @submit.prevent="handleSubmit" :model="profForm" status-icon :rules="rules" action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST" class="form" label-width="300px">
      <input type=hidden name="oid" value="00D1H000000O1eQ">
      <input type=hidden name="retURL" value="http://">
      <el-form-item  label="Name" >
        <el-input  v-model="profForm.firstName"></el-input>
        <el-input  label-position="top" v-model="profForm.lastName"></el-input>
      </el-form-item>
      <el-form-item label="Company">
        <el-input v-model="profForm.company"></el-input>
      </el-form-item>
      <el-form-item label="Position">
        <el-input  v-model="profForm.position"></el-input>
      </el-form-item>
      <el-form-item  label="Email" prop="email">
        <el-input v-model="profForm.email"></el-input>
      </el-form-item>
      <el-form-item label="Twitter">
        <el-input  v-model="profForm.twitter"></el-input>
      </el-form-item>
      <el-form-item  size="mini" label="Attending Lunch">
        <el-switch v-model="profForm.lunch"></el-switch>
      </el-form-item>
       <el-collapse-transition>
         <div v-show="profForm.lunch">
           <el-form-item v-show="profForm.lunch" size="mini" label="Dietary Restrictions">
             <el-checkbox-group v-model="profForm.diet">
             <el-checkbox label="Vegetarian"  name="type"></el-checkbox>
             <el-checkbox label="Vegan" name="type"></el-checkbox>
             <el-checkbox label="Kosher" name="type"></el-checkbox>
             <el-checkbox label="Gluten Free" name="type"></el-checkbox>
           </el-checkbox-group>
           <el-input v-model="profForm.allergies" ></el-input>
         </el-form-item>
       </div>
    </el-collapse-transition>
    <div></div>
    <el-form-item label="T-Shirt Size">
      <el-select  v-model="profForm.size" placeholder="Please select shirt size">
        <el-option label="S" value="S"></el-option>
        <el-option label="M" value="M"></el-option>
        <el-option label="L" value="L"></el-option>
        <el-option label="XL" value="XL"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="Tell us a little bit about what you would like to get out of HealthSTLx.">
      <el-input type="textarea" v-model="profForm.takeaway"></el-input>
    </el-form-item>
    <el-form-item label="Select Breakout Sessions">
      <SelectBreakout timeSlot="10:15 am" type='profile' />
      <SelectBreakout timeSlot="3:00 pm" type='profile' />
    </el-form-item>
    <el-form-item  label="I would like to opt-in to donating to United Way as part of my registration.">
      <el-switch   v-model="profForm.donate"></el-switch>
    </el-form-item>
    </el-form>
  </el-card>

  <el-dialog
  title="Successful Registration"
  :visible.sync="dialogVisible"
  width="30%">
  <span>Thank you for registering for HealthSTLx!</span>
  <span slot="footer" class="dialog-footer">
     <a target="_blank" href="https://www.linkedin.com/shareArticle?mini=true&url=https://slalom-health-summit-staging.herokuapp.com/#/registration&title=HealthSTLx&summary=Just%20registered%20for%20HealthSTLx!&source=HealthSTLx"><el-button plain icon="el-icon-share" type="primary" class="share-button" round>Share on LinkedIn</el-button></a>
     <a target="_blank" href="https://twitter.com/intent/tweet?button_hashtag=HealthSTLx&ref_src=twsrc%5Etfw" class="twitter-hashtag-button" data-text="Just registered for HealthSTLx!" data-url="https://slalom-health-summit-staging.herokuapp.com/#/" data-related="Slalom" data-show-count="false"><el-button plain class="share-button" icon="el-icon-share" type="primary" round>Tweet #HealthSTLx</el-button></a>
    <el-button type="primary" @click="confirm">Confirm</el-button>
  </span>
</el-dialog>
  </div>
</template>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
<script>
import Login from "./Login.vue";
import { mapState } from 'vuex';
import SelectBreakout from "./SelectBreakout.vue";
import axios from 'axios'
import _ from 'underscore';
export default {
  name: "Profile",
  data() {
var confirmPass = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('Please input the password again'));
  } else if (value !== this.form.pass) {
    callback(new Error('Two passwords don\'t match'));
  } else {
    callback();
  }
};
  return {
    login: true,
    dialogVisible: false,
    update: false,
    profForm: {
      email: '',
      firstName: '',
      lastName: '',
      company: '',
      position: '',
      twitter: '',
      lunch: true,
      diet: [],
      allergies: '',
      size: '',
      donate: true,
      takeaway: '',
    },
      rules: {
            email: [
                { required: true,
                  message: 'Please enter a valid email address.',
                  pattern:'.+\@.+\..+',
                  trigger: 'blur'
                },
              ],
            name: [
                { required: true,
                  message: 'Please enter your name.',
                  trigger: 'blur'
                },
            ]
      }
    }
},
components: {
  SelectBreakout
},
props: {
  type: String
},
computed: mapState({
  getBreakoutOne(state){
    return state.breakoutOne;
  },
  getBreakoutOneWait(state){
    return state.breakoutOneWaitlist;
  },
  getBreakoutTwo(state){
    return state.breakoutTwo;
  },
  getBreakoutTwoWait(state){

    return state.breakoutTwoWaitlist;
  },
  getUsername(state){
    return state.username;
  },
  getToken(state){
    return state.jwt;
  }
}),
methods: {
  confirm(){
    this.dialogVisible=false;
    this.$store.dispatch('login', this.form.email);
    this.$store.dispatch('obtainToken', {
      username: this.form.email,
      password: this.form.pass
    });
    this.$router.push('/');
  },
  logout(){
    this.$store.dispatch('logout');
    this.$router.push('/');
  },
  deleteReg() {
    var self = this;
    this.$alert("Are you sure you want to delete your registration?", {
      confirmButtonText: 'Delete',
      callback: action => {
        this.$axiosServer.delete('/auth/delete', {
          data: {
            token: this.getToken
          }
        })
        .then(function (response) {
          console.log(response);
          self.logout();
        })
        .catch(function (error) {
          console.log(error);
            return error;
        });
      }
    });
  },
  updateRegistration(){
    var self = this;
    this.$alert("Are you sure you want to make these changes?", {
      confirmButtonText: 'Confirm',
      callback: action => {
        var self = this;
        this.$axiosServer.put('/auth/update', {
          updatedEmail: this.profForm.email,
          token: this.getToken,
          firstName: this.profForm.firstName,
          lastName: this.profForm.lastName,
          company: this.profForm.company,
          position: this.profForm.position,
          twitter: this.profForm.twitter,
          lunch: this.profForm.lunch,
          diet: this.profForm.diet,
          allergies: this.profForm.allergies,
          size: this.profForm.size,
          donate: this.profForm.donate,
          comment: this.profForm.takeaway,
          breakout_one: this.getBreakoutOne,
          breakout_oneWait: this.getBreakoutOneWait,
          breakout_two: this.getBreakoutTwo,
          breakout_twoWait: this.getBreakoutTwoWait
        })
        .then(function (response) {
          if(response.data.email != self.profForm.email){
            self.$alert("Login information changed, please login again to use new credentials", {
              confirmButtonText: 'Ok',
              callback: action =>{
                self.logout();
              }
          });
        }
          self.update=false;
        })
        .catch(function (error) {
          console.log(error.response);
          return error;
        });
      }
    });
  },

  updateProfile(data) {
    this.$store.dispatch('getProfile', data.attendee.id);
    this.profForm.firstName= data.user.first_name;
    this.profForm.lastName= data.user.last_name;
    this.profForm.company= data.attendee.company;
    this.profForm.position= data.attendee.position;
    this.profForm.email= data.user.email;
    this.profForm.twitter= data.attendee.twitter;
    this.profForm.position= data.attendee.position;
    this.profForm.takeaway= data.attendee.comment;
    this.profForm.lunch= data.attendee.lunch;
    this.profForm.diet= data.attendee.diet;
    this.profForm.allergies= data.attendee.diet_allergy;
    this.profForm.size= data.attendee.tshirt_size;
    this.profForm.donate= data.attendee.donate;
    var allSessionsAttendees = [];
    var self = this;
    var oneTagNum = _.filter(data.sessions, s => s.session_tag === 1).length;
    var twoTagNum = _.filter(data.sessions, s => s.session_tag === 2).length;

    this.$axiosServer.get('/api/session_attendees')
      .then(function (response){
        allSessionsAttendees = response.data;
        data.sessions.forEach(function(session){
          if(session.session_tag === 1){
            self.computeAndUpdateSessions(oneTagNum, session, allSessionsAttendees);
          }
          else{
            self.computeAndUpdateSessions(twoTagNum, session, allSessionsAttendees);
          }
        });
      })
      .catch(function (error){
        return error;
      });
  },
  computeAndUpdateSessions(tagNum, session, allSessions){
    var breakoutSetting = session.session_tag === 1 ? 'setBreakoutOne' : 'setBreakoutTwo';
    if(tagNum === 1){
      this.$store.dispatch('setBreakout', {
        breakout: breakoutSetting,
        id: session.session_id
      });
    }
    else{
      var allSessionsWithId = _.filter(allSessions, s => s.session_id === session.session_id);
      if(allSessionsWithId.length > session.session_max_capacity){
          this.$store.dispatch('setBreakout', {
            breakout: breakoutSetting,
            id: session.session_id
          });
      }
      else{
        this.$store.dispatch('setBreakout', {
          breakout: breakoutSetting + 'Wait',
          id: session.session_id
        });
      }
    }
  }
},
mounted: function () {
  var self = this;
  if(this.type==="profile"){
    var self = this;
    this.$axiosServer.post('/auth/profile', {
      token: this.getToken
    })
    .then(function (response) {
      self.updateProfile(response.data);
    })
    .catch(function (error) {
      console.log(error);
      return error;
    });
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.header{
  font-size: 30px;
  font-family: 'Roboto', sans-serif;
  font-weight: lighter;
}
.logo {
  float: left;
}
img {
  position: relative;
  width: 220px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
}
.buttons {
  text-align: center;
}
.form{
  width: 60%;
  margin-left: auto;
  margin-right: auto;
}
.ranking-header-one {
  font-size: 15px;
  font-weight: normal;
}
.ranking-header-two {
  font-size: 13px;
  font-weight: lighter;
}
.ranking-header-three {
  font-size: 13px;
  font-weight: lighter;
}
.action-buttons {
  float: right;
}
.share-button{
  width: 190px;
  margin: 7px;
}

@media (min-width: 430px) and (max-width: 500px) {
  .action-buttons button{
    width: 100px;
    font-size: 12px;
    text-align: center;
  }
}

@media (min-width: 355px) and (max-width: 430px) {
  .action-buttons button{
    width: 75px;
    font-size: 12px;
  }
}
@media (min-width: 200px) and (max-width: 355px) {
  .action-buttons button{
    width: 55px;
    font-size: 12px;
    padding: 11px;
  }
}
</style>
