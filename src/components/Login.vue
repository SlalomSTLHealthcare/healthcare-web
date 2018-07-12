<template>
  <div class="login">
    <div class='message'>
      <p class="login-link" v-if="login_type==='registration'">Already registered? Click <a style="cursor: pointer;" @click="dialogFormVisible=true">here</a> to login.</p>
      <el-button class="btn" v-if="login_type==='button'" style="cursor: pointer;" @click="dialogFormVisible=true">Login</el-button>
    </div>
    <el-dialog title="Login" :visible.sync="dialogFormVisible">
      <el-form :model="form">
         <el-form-item label="Email">
           <el-input v-model="form.email" auto-complete="off"></el-input>
         </el-form-item>
         <el-form-item label="Password" prop="pass">
           <el-input type="password" v-model="form.pass" auto-complete="off"></el-input>
         </el-form-item>
      </el-form>
    <el-button @click="dialogFormVisible = false">Cancel</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">Login</el-button>
    <p>Forgot Password? Click <a style="cursor: pointer;" @click="dialogFormVisible=true">here</a>.</p>
  </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
  return {
    form: {
      email: '',
      pass:''
        },
    dialogFormVisible: false
  }
},
props: {
  login_type: ''
}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.btn {
 background: #3336ff;
 color: white;
 border: black;
 width: 12em;
 height: 4em;
 // opacity: 0.7;
}
</style>
