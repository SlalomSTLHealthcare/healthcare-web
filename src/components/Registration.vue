<template>
  <div class="register">
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>Register</span>
    </div>
    <el-form ref="form" :model="form" action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST" label-width="120px">
      <input type=hidden name="oid" value="00D1H000000O1eQ">
      <input type=hidden name="retURL" value="http://">
      <el-form-item label="Name">
        <el-input v-model="form.first_name" placeholder="First Name"></el-input>
        <el-input v-model="form.last_name"placeholder="Last Name"></el-input>
      </el-form-item>
      <el-form-item label="Company">
        <el-input v-model="form.company"></el-input>
      </el-form-item>
      <el-form-item label="Title">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="Email">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="Twitter">
        <el-input v-model="form.twitter"></el-input>
      </el-form-item>
      <el-form-item >
        <el-checkbox label="Remember Me" v-model="form.checked" name="type"></el-checkbox>
      </el-form-item>
      <el-form-item class="buttons">
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
      <el-button round>Already registered? Click here to login.</el-button>
    </el-form>
  </el-card>
  </div>
</template>

<script>
export default {
  name: "Registration",
  data() {
  return {
    form: {
      first_name: '',
      last_name: '',
      company: '',
      title: '',
      email: '',
      twitter: '',
      checked: true
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
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

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}

.box-card {
  width: 650px;
  padding: 2%;
  padding-left: 5px;
}
.buttons {
  text-align: center;
}
</style>
