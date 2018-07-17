<template>
  <div class="register">
  <el-card class="box-card">
    <div slot="header">
      <span class="header">Register</span>
    </div>
    <el-form label-position="left" ref="form" @submit.prevent="handleSubmit" :model="form" status-icon :rules="rules" action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST" class="form" label-width="300px">
      <input type=hidden name="oid" value="00D1H000000O1eQ">
      <input type=hidden name="retURL" value="http://">
      <el-form-item required label="Name">
        <el-input v-model="form.firstName" placeholder="First Name"></el-input>
        <el-input v-model="form.lastName" label-position="top" placeholder="Last Name"></el-input>
      </el-form-item>
      <el-form-item label="Company">
        <el-input v-model="form.company"></el-input>
      </el-form-item>
      <el-form-item label="position">
        <el-input v-model="form.position"></el-input>
      </el-form-item>
      <el-form-item  required label="Email">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item required label="Password" prop="pass">
        <el-input v-validate="{ required: true, regex: /\\.(js|ts)$/ }" name="regex" type="password" v-model="form.pass" auto-complete="off"></el-input>
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
    <el-form-item required label="Please rank the breakout sessions you would like to attend.">
      <SelectBreakout timeSlot="10:15 am"/>
      <SelectBreakout timeSlot="3:00 pm"/>
    </el-form-item>
    <el-form-item required label="I would like to opt-in to donating to United Way as part of my registration.">
      <el-switch   v-model="form.donate"></el-switch>
    </el-form-item>
      <el-form-item class="buttons">
        <el-button @click="handleSubmit" type="primary">Register</el-button>
        <!-- <input type="submit" value="Submit"> -->
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
    var validatePass = (rule, value, callback) => {
      console.log(value);
      if (value === '') {
        callback(new Error('Please input a password'));
      } else {
      if (value.length<8) {
        callback(new Error('Passwords must be at least 8 characters and contain at least one capital letter, one lowercase letter, and one special character.'));
      }
      if (this.form.checkPass !== '') {
      this.$refs.form.validateField('checkPass');
      }
      callback();
    }
  };
var validatePass2 = (rule, value, callback) => {
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
      takeaway: ''
    },
      rules: {
        pass: [
      { validator: validatePass, trigger: 'blur' }
      ],
      checkPass: [
      { validator: validatePass2, trigger: 'blur' }
      ],
    }
  }
},
components: {
  SelectBreakout
},
methods: {
  handleSubmit() {
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
      comment: this.form.takeaway

    })
    .then(function (response) {
      console.log(response);

    })
    .catch(function (error) {
      console.log(error);
      return e;
    });
    
    this.successfulRegister();

      },
      successfulRegister() {
        this.$alert("You have successfully registered for HealthSTLx!", "Registration Successful", {
          dangerouslyUseHTMLString: true,
          confirmButtonText: 'OK',
          callback: action => {
            this.$router.push('/');
          }
        });
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
</style>
