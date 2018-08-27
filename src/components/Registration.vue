<template>
  <div class="register">
  <!-- <el-card class="box-card"> -->
  <div class="reg-form">
    <h2 class="form-header">Please complete all required fields.</h2>
    <el-form label-position="top" ref="form" @submit.prevent="handleSubmit" :model="form" status-icon :rules="rules" class="form" label-width="200px">
      <input type=hidden name="oid" value="00D1H000000O1eQ">
      <input type=hidden name="retURL" value="http://">
      <el-form-item required label="Name" >
        <el-row :gutter="20">
        <el-col :xs="24" :sm="12">
          <el-input v-model="form.firstName" class="firstName" placeholder="First Name"></el-input>
        </el-col>
        <el-col :xs="24" :sm="12">
          <el-input class="lastName" v-model="form.lastName" label-position="top"  placeholder="Last Name"></el-input>
        </el-col>
      </el-row>
      </el-form-item>
      <el-form-item label="Company">
        <el-input v-model="form.company"></el-input>
      </el-form-item>
      <el-form-item label="Position">
        <el-input v-model="form.position"></el-input>
      </el-form-item>
      <el-form-item required label="Email" prop="email">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item required label="Password" prop="pass">
        <el-input type="password" v-model="form.pass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="Twitter">
        <el-input v-model="form.twitter" placeholder="@"></el-input>
      </el-form-item>
      <el-form-item required size="mini" label="Attending Lunch">
        <el-switch v-model="form.lunch"></el-switch>
      </el-form-item>
      <el-form-item label="Industry">
        <el-select v-model="form.industry" placeholder="Industry">
          <el-option label="Providers" value="providers"></el-option>
          <el-option label="Payers" value="payers"></el-option>
          <el-option label="Life Science" value="life_science"></el-option>
          <el-option label="Pharma" value="pharma"></el-option>
          <el-option label="Other" value="other"></el-option>
        </el-select>
      </el-form-item>
       <el-collapse-transition>
         <div v-show="form.lunch">
           <el-form-item v-show="form.lunch" size="mini" label="Dietary Restrictions">
             <el-checkbox-group v-model="form.diet">
             <el-checkbox label="Vegetarian" name="type"></el-checkbox>
             <el-checkbox label="Vegan" name="type"></el-checkbox>
             <el-checkbox label="Kosher" name="type"></el-checkbox>
             <el-checkbox label="Gluten Free" name="type"></el-checkbox>
           </el-checkbox-group>
           <el-input v-model="form.allergies" placeholder="Allergies i.e tree nuts, dairy etc." ></el-input>
         </el-form-item>
       </div>
    </el-collapse-transition>
    <div></div>
    <el-form-item required label="T-Shirt Size">
      <el-select v-model="form.size" placeholder="Please select shirt size">
        <el-option label="S" value="S"></el-option>
        <el-option label="M" value="M"></el-option>
        <el-option label="L" value="L"></el-option>
        <el-option label="XL" value="XL"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="Tell us a little bit about what you would like to get out of HealthSTLx.">
      <el-input type="textarea" v-model="form.takeaway"></el-input>
    </el-form-item>
    <el-form-item label="Select Breakout Sessions">
      <SelectBreakout class="breakout" timeSlot="10:15 am" type='register'/>
      <SelectBreakout class="breakout" timeSlot="3:00 pm" type='register'/>
    </el-form-item>
    <el-form-item required label="I would like to opt-in to donating to United Way as part of my registration.">
      <el-switch   v-model="form.donate"></el-switch>
    </el-form-item>
      <el-form-item class="buttons">
        <el-button @click="handleSubmit('form')" type="primary">Register</el-button>
      </el-form-item>
    </el-form>
  </div>
  <!-- </el-card> -->

  <el-dialog
  title="Successful Registration"
  :visible.sync="dialogVisible"
  width="50%">
  <div>Thank you for registering for health<strong>STLX</strong>!  We look forward to seeing you in November.</div>
  <div style="margin-top: 20px;">If you have any questions, please reach out to our team at <span class="email-support">tara.nesbitt@slalom.com</span>.</div>
  <span slot="footer" class="dialog-footer">
     <a target="_blank" href="https://www.linkedin.com/shareArticle?mini=true&url=https://slalom-health-summit-staging.herokuapp.com/#/registration&title=HealthSTLx&summary=Just%20registered%20for%20HealthSTLx!&source=HealthSTLx"><el-button plain icon="el-icon-share" type="primary" class="share-button" round>Share on LinkedIn</el-button></a>
     <a target="_blank" href="https://twitter.com/intent/tweet?button_hashtag=HealthSTLx&ref_src=twsrc%5Etfw" class="twitter-hashtag-button" data-text="Just registered for HealthSTLx!" data-url="https://slalom-health-summit-staging.herokuapp.com/#/" data-related="Slalom" data-show-count="false"><el-button plain class="share-button" icon="el-icon-share" type="primary" round>Tweet #HealthSTLx</el-button></a>
    <el-button type="primary" @click="confirm">Ok</el-button>
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
import qs from 'qs';
import _ from 'underscore';
export default {
  name: "Registration",
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
var confirmBreakouts = (rule, value, callback) => {
  console.log(value);
  if (value === '') {
    callback(new Error('Please select a breakout'));
  }else{
    callback();
  }
}
  return {
    login: true,
    dialogVisible: false,
    update: false,
    form: {
      firstName: '',
      lastName: '',
      company: '',
      position: '',
      email: '',
      twitter: '',
      pass: '',
      lunch: true,
      diet: [],
      allergies: '',
      industry: '',
      size: '',
      donate: true,
      takeaway: '',
    },
      rules: {
        pass: [
            { required: true,
              message: 'Passwords must be at least 8 characters.',
              pattern:'^(?=.*)(?=.{8,})',
              trigger: 'blur'
            },
          ],
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
  }
}),
methods: {
  handleSubmit(form) {
    var self = this;
    this.$refs[form].validate((valid) => {
      if (valid) {
        this.$axiosServer.post('/auth/register', {
          email: this.form.email,
          password: this.form.pass,
          firstName: this.form.firstName,
          lastName: this.form.lastName,
          company: this.form.company,
          position: this.form.position,
          twitter: this.form.twitter,
          industry: this.form.industry,
          lunch: this.form.lunch,
          diet: this.form.diet,
          allergies: this.form.allergies,
          size: this.form.size,
          donate: this.form.donate,
          comment: this.form.takeaway,
          breakout_one: this.getBreakoutOne,
          breakout_oneWait: this.getBreakoutOneWait,
          breakout_two: this.getBreakoutTwo,
          breakout_twoWait: this.getBreakoutTwoWait
        })
        .then(function (response) {
          console.log(response);
          self.successfulRegister();
        })
        .catch(function (error) {
          console.log(error.response);
          self.failedRegistration(error.response.statusText);
          return error;
        });
        axios({ method: 'post', url: 'https://go.slalom.com/l/209772/2018-08-24/xfjfj', headers: {'Content-type': 'application/x-www-form-urlencoded'}, data: qs.stringify({
          first_name: this.form.firstName,
          last_name: this.form.lastName,
          company: this.form.company,
          job_title: this.form.position,
          email: this.form.email
        })})
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
          return error;
        });
      } else {
        this.emptyFields();
        return false;
      }
    });
  },
  successfulRegister() {
    this.dialogVisible=true;
  },
  emptyFields() {
    this.$alert("Please complete all required fields", "Registration failed", {
      confirmButtonText: 'OK'
    });
  },
  failedRegistration(message) {
    this.$alert(message, "Registration Failed", {
      confirmButtonText: 'OK'
    });
  },
  confirm(){
    this.dialogVisible=false;
    this.$router.push('/');
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../global-variables';
.email-support {
  color: @primary;
}
.header{
  font-size: 30px;
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
}
a {
  color: #42b983;
}
.text {
  font-size: 14px;
}
.buttons {
  text-align: center;
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
.reg-form {
        border-radius: 4px;
  background-color: #ffffff;
  margin: 4% 0;
  padding: 5%;
}
.form-header{
  font-weight: 100;
}
.el-form-item {
  margin-bottom: 10px;
}

.input {
  padding: 20px;
}
.name {
  margin-bottom: 10px;
}
@media (max-width: 768px) {
  .firstName {
    margin-bottom: 10px;
  }
}

</style>
