<template>
  <div class="register">
  <el-card class="box-card">
    <div slot="header">
      <span class="header">Register</span>
    </div>
    <el-form label-position="left" ref="form" @submit.prevent="handleSubmit" :model="form" status-icon :rules="rules" action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST" class="form" label-width="300px">
      <input type=hidden name="oid" value="00D1H000000O1eQ">
      <input type=hidden name="retURL" value="http://">
      <el-form-item label="Name">
        <el-input v-model="form.first_name" placeholder="First Name"></el-input>
        <el-input v-model="form.last_name" label-position="top" placeholder="Last Name"></el-input>
      </el-form-item>
      <el-form-item label="Company">
        <el-input v-model="form.company"></el-input>
      </el-form-item>
      <el-form-item label="Title">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item  label="Email">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="Password" prop="pass">
        <el-input type="password" v-model="form.pass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="Confirm Password" prop="checkPass">
        <el-input type="password" v-model="form.checkPass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="Twitter">
        <el-input v-model="form.twitter" placeholder="@"></el-input>
      </el-form-item>
      <el-form-item size="mini" label="Attending Lunch">
        <el-switch v-model="form.lunch"></el-switch>
      </el-form-item>
      <el-form-item size="mini" label="Dietary Restrictions">
        <el-checkbox-group v-model="form.diet">
        <el-checkbox label="Vegetarian" name="type"></el-checkbox>
        <el-checkbox label="Vegan" name="type"></el-checkbox>
        <el-checkbox label="Kosher" name="type"></el-checkbox>
        <el-checkbox label="Gluten Free" name="type"></el-checkbox>
      </el-checkbox-group>
      <el-input v-model="form.allergies" placeholder="Allergies i.e tree nuts, dairy etc." ></el-input>
    </el-form-item>
    <el-form-item  label="T-Shirt Size">
      <el-select v-model="form.size" placeholder="Please select shirt size">
        <el-option label="S" value="shanghai"></el-option>
        <el-option label="M" value="beijing"></el-option>
        <el-option label="L" value="beijing"></el-option>
        <el-option label="XL" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="Tell us a little bit about what you would like to get out of HealthSTLx.">
      <el-input type="textarea" v-model="form.takeaway"></el-input>
    </el-form-item>
    <el-form-item  label="I would like to opt-in to donating to Union Way as part of my registration.">
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
export default {
  name: "Registration",
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input a password'));
      } else {
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
      first_name: '',
      last_name: '',
      company: '',
      title: '',
      email: '',
      twitter: '',
      checked: true,
      pass: '',
      checkPass: '',
      lunch: true,
      diet: [],
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
methods: {
  handleSubmit() {
        this.open();
        console.log('submit!');
        console.log({ firstName: this.form.first_name, lastName: this.form.last_name, company:this.form.company, title: this.form.title, email: this.form.email, twitter:this.form.twitter});

      },
      open() {
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
.logo{
  float: left;
}
img{
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
