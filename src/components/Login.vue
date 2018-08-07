<template>
  <div class="login">
    <div class='message'>
      <p class="login-link" v-if="loginType==='registration'">Already registered? Click <a style="cursor: pointer;" @click="dialogFormVisible=true">here</a> to login.</p>
      <el-button class="btn" round plain v-if="loginType==='button'" style="cursor: pointer;" @click="dialogFormVisible=true">Login</el-button>
    </div>
    <p v-if="loginType==='nav'" class="nav-link" style="cursor: pointer;" @click="dialogFormVisible=true">Login</p>
    <el-dialog title="Login" :append-to-body="true" :visible.sync="dialogFormVisible">
      <el-form :model="form">
         <el-form-item label="Email">
           <el-input v-model="form.email" auto-complete="off"></el-input>
         </el-form-item>
         <el-form-item label="Password" prop="pass">
           <el-input type="password" v-model="form.pass" auto-complete="off"></el-input>
         </el-form-item>
      </el-form>
    <el-button class="cancel" round @click="dialogFormVisible = false">Cancel</el-button>
    <el-button class="loginbut" round @click="handleLogin">Login</el-button>
    <p>Forgot Password? Click <a style="cursor: pointer;" @click="dialogFormVisible=true">here</a>.</p>
  </el-dialog>
  </div>
</template>

<script>
import {mapState} from 'vuex';
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
  loginType: ''
},
methods: {
  handleLogin() {
    var self = this;
    this.$axiosServer.post('auth/obtain_token', {
      username: this.form.email,
      password: this.form.pass
    }).then(function(response){
      self.$store.dispatch('loginToken', response.data.token);
      self.successfulLogin();
    })
    .catch(function (error) {
      console.log("error");
      self.failedLogin("Invalid Username or Password");
      return error;
    });



  },
  successfulLogin() {
    this.dialogFormVisible = false;
    this.$alert("Welcome back to HealthSTLx!", "Login Successful", {
      dangerouslyUseHTMLString: true,
      confirmButtonText: 'OK',
      callback: action => {
        this.$router.push('/');
      }
    });

  },
  failedLogin(errorMessage) {
    this.dialogFormVisible = true,
    this.$alert(errorMessage, "Login failed", {
      dangerouslyUseHTMLString: true,
      confirmButtonText: 'OK',
    });
  }
  },
  computed: mapState({
    getToken(state){
      return state.jwt;
    }
  })
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.btn {
  height: 40px;
  color: black;
}
 a {
  color: #005aed;
}
 a:hover {
  color: #66b1ff;
}
.message {
  display: inline;
}
.login {
  z-index: 12;
}
.el-dialog .el-form{
  z-index: 15;
}
.login-link{
  background-color: #f7f7f7;
}
.nav-link {
  list-style: none;
  color: #fff;
  text-decoration: none;
  font-size: 25px;
}
.cancel:hover, .loginbut:hover {
  background-color: #000;
  color: #fff;
  border-color: #000;
}
</style>
