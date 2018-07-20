<template>
  <div class="prof">
  <el-card class="box-card">
    <div slot="header">
      <span class="header">Profile</span>
    </div>
    <el-form label-position="left" ref="form" @submit.prevent="handleSubmit" :model="form" status-icon :rules="rules" action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST" class="form" label-width="300px">
      <input type=hidden name="oid" value="00D1H000000O1eQ">
      <input type=hidden name="retURL" value="http://">
      <el-form-item required label="Name" >
        <el-input v-model="form.firstName" placeholder="First Name"></el-input>
        <el-input v-model="form.lastName" label-position="top" placeholder="Last Name"></el-input>
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
      <el-form-item required label="Confirm Password" prop="checkPass">
        <el-input type="password" v-model="form.checkPass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="Twitter">
        <el-input v-model="form.twitter" placeholder="@"></el-input>
      </el-form-item>
      <el-form-item required size="mini" label="Attending Lunch">
        <el-switch v-model="form.lunch"></el-switch>
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
    <el-form-item  required label="T-Shirt Size">
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
    <el-form-item  label="Rank Breakout Sessions">
      <h1 class="ranking-header-one">Please rank the breakout sessions you would like to attend by selecting a session from the left-hand list, and moving it over to the right-hand list in the order of your choosing.</h1>
        <h2 class="ranking-header-two">Place the breakout sessions you would <i>most</i> like to attend towards the top, and place the sessions you would <i>least</i> like to attend towards the bottom.</h2> <h2 class="ranking-header-three"> You may or may not choose to not rank all of the sessions.</h2>
      <SelectBreakout timeSlot="10:15 am" v-on:selected-data="updateDataOne"/>
      <SelectBreakout timeSlot="3:00 pm" v-on:selected-data="updateDataTwo"/>
    </el-form-item>
    <el-form-item required label="I would like to opt-in to donating to United Way as part of my registration.">
      <el-switch   v-model="form.donate"></el-switch>
    </el-form-item>
      <el-form-item class="buttons">
        <el-button @click="handleSubmit('form')" type="primary">Update</el-button>
      </el-form-item>
    </el-form>
  </el-card>
  </div>
</template>

<script>
import Login from "./Login.vue";
import SelectBreakout from "./SelectBreakout.vue";
import axios from 'axios'
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
  return {
    login: true,
    dialogVisible: false,
    form: {
      firstName: '',
      lastName: '',
      company: '',
      position: '',
      email: '',
      twitter: '',
      pass: '',
      checkPass: '',
      lunch: true,
      diet: [],
      allergies: '',
      size: '',
      donate: true,
      takeaway: '',
      breakoutsOne: [],
      breakoutsTwo: []
    },
      rules: {
        pass: [
            { required: true,
              message: 'Passwords must be at least 8 characters and contain at least one capital letter, one lowercase letter, and one special character.',
              pattern:'^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})',
              trigger: 'blur'
            },
          ],
          checkPass: [
            {
              required: true, validator: confirmPass, trigger: 'blur'
            }
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
methods: {
  handleSubmit(form) {
     console.log(this.form.breakoutsOne);
      console.log(this.form.breakoutsOne);
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
              checkPass: this.form.checkPass,
              lunch: this.form.lunch,
              diet: this.form.diet,
              allergies: this.form.allergies,
              size: this.form.size,
              donate: this.form.donate,
              comment: this.form.takeaway,
              breakout_one: this.form.breakoutsOne,
              breakout_two: this.form.breakoutsTwo

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
            this.$axiosServer.post('https://doshner-developer-edition.na73.force.com/services/apexrest/HealthSTLxLeads', {
              firstName: this.form.firstName,
              lastName: this.form.lastName,
              company: this.form.company,
              title: this.form.position,
              email: this.form.email
            })
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
        // this.$alert(<a target="_blank" title="Share on LinkedIn" href="http://www.linkedin.com/shareArticle?mini=true&url={{https://stackoverflow.com/questions/29744036/how-to-create-a-simple-share-linkedin-link}}"></a>, "Registration Successful", {
        //   dangerouslyUseHTMLString: true,
        //   confirmButtonText: 'OK',
        //   callback: action => {
        //     this.$router.push('/');
        //   }
        // });
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
      updateDataOne(updatedData) {
        this.form.breakoutsOne= updatedData;
        // console.log(this.form.breakoutsOne);
      },
      updateDataTwo(updatedData){
        this.form.breakoutsTwo=updatedData;
        // console.log(this.form.breakoutsTwo);
      },
      confirm(){
        this.dialogVisible=false;
        this.$router.push('/');
      }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
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
</style>
