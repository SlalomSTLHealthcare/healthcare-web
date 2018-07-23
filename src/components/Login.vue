<template>
  <div class="login">
    <div class='message'>
      <p class="login-link" v-if="login_type==='registration'">Already registered? Click <a style="cursor: pointer;" @click="dialogFormVisible=true">here</a> to login.</p>
      <el-button class="btn" round plain v-if="login_type==='button'" style="cursor: pointer;" @click="dialogFormVisible=true">Login</el-button>
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
    <el-button @click="handleLogin">Login</el-button>
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
},
methods: {
  handleLogin() {
    var self = this;
    this.$axiosServer.post('/auth/login', {
      email: this.form.email,
      password: this.form.pass
    })
    .then(function (response) {
      console.log(response);
      self.successfulLogin();

    })
    .catch(function (error) {
      console.log(error);
      self.failedLogin(error.response.statusText);
      return error;
    });
      },
        successfulLogin() {
          this.dialogFormVisible = false;
          this.$session.start();
          this.$session.set('username', this.form.email);
          this.$alert("Welcome back to HealthSTLx!", "Login Successful", {
            dangerouslyUseHTMLString: true,
            confirmButtonText: 'OK',
            callback: action => {
              this.$router.push('/');

            }

          });
          this.$root.$emit('login');
        },
        failedLogin(errorMessage) {
          this.dialogFormVisible = true,
          this.$alert(errorMessage, "Login failed", {
            dangerouslyUseHTMLString: true,
            confirmButtonText: 'OK',
          });
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.btn {
  height: 40px;
  color: black;
}
 a {
  color: #71bab0;
}
 a:hover {
  color: #FFE72C;
}
.message {
  display: inline;
}
.login {
  z-index: 12;
}
.el-dialog{
  z-index: 15;
}
</style>
