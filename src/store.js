import Vue from "vue";
import Vuex from "vuex";
import VueAxios from 'vue-axios';
import jwt_decode from 'jwt-decode';
import axios from "axios";

Vue.use(VueAxios, axios);
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: '',
    jwt: localStorage.getItem('username'),
    endpoints: {
      obtainJWT: 'http://localhost:3000/auth/obtain_token',
      refreshJWT: 'http://localhost:3000/auth/refresh_token'
    }
  },
  mutations: {
    setUsername(state, username){
      state.username = username;
    },
    resetUsername(state){
      state.username = '';
    },
    updateToken(state, newToken){
      localStorage.setItem('username', newToken);
      state.jwt = newToken;
    },
    removeToken(state){
      localStorage.removeItem('username');
      state.jwt = null;
    }
  },
  actions: {
    login({commit}, username){
      commit('setUsername', username);
    },
    logout({commit}){
      commit('resetUsername');
    },
    obtainToken(username){
      const payload = {
        username: username
      }
      axios.post(this.state.endpoints.obtainJWT, payload)
        .then((response)=>{
            this.commit('updateToken', response.data.token);
          })
        .catch((error)=>{
            console.log(error);
          })
    },
    refreshToken(){
      const payload = {
        token: this.state.jwt
      }
      axios.post(this.state.endpoints.refreshJWT, payload)
        .then((response)=>{
            this.commit('updateToken', response.data.token)
          })
        .catch((error)=>{
            console.log(error)
          })
    },
    inspectToken(){
      const token = this.state.jwt;
      if(token){
        const decoded = jwt_decode(token);
        const exp = decoded.exp
        const orig_iat = decode.orig_iat
        if(exp - (Date.now()/1000) < 1800 && (Date.now()/1000) - orig_iat < 628200){
          this.dispatch('refreshToken')
        } else if (exp -(Date.now()/1000) < 1800){
          // DO NOTHING, DO NOT REFRESH          
        } else {
          this.dipatch('login')
          // PROMPT USER TO RE-LOGIN, THIS ELSE CLAUSE COVERS THE CONDITION WHERE A TOKEN IS EXPIRED AS WELL
        }
      }
    }
  }
});
