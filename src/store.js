import Vue from "vue";
import Vuex from "vuex";
import VueAxios from 'vue-axios';
import jwt_decode from 'jwt-decode';
import axios from "axios";

Vue.use(VueAxios, axios);
Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    breakoutOne: '',
    breakoutOneWaitlist: '',
    breakoutTwo: '',
    breakoutTwoWaitlist: '',
    attendeeId: '',
    jwt: localStorage.getItem('t'),
    endpoints: {
      obtainJWT: 'https://slalom-health-api-staging.herokuapp.com/auth/obtain_token',
      refreshJWT: 'https://slalom-health-api-staging.herokuapp.com/auth/refresh_token'
    }
  },
  mutations: {
    setAttendee(state, id){
      state.attendeeId = id;
    },
    resetAttendee(state){
      state.attendeeId = '';
    },
    setBreakoutOne(state, id){
      state.breakoutOne = id;
    },
    setBreakoutOneWait(state, id){
      state.breakoutOneWaitlist = id;
    },
    setBreakoutTwo(state, id){
      state.breakoutTwo = id;
    },
    setBreakoutTwoWait(state, id){
      state.breakoutTwoWaitlist = id;
    },
    resetBreakouts(state){
      state.breakoutOne = '';
      state.breakoutOneWaitlist = '';
      state.breakoutTwo= '';
      state.breakoutTwoWaitlist = '';
    },
    updateToken(state, newToken){
      localStorage.setItem('t', newToken);
      state.jwt = newToken;
    },
    removeToken(state){
      localStorage.removeItem('t');
      state.jwt = null;
    }
  },
  actions: {
    logout({commit}){
      commit('resetBreakouts');
      commit('resetAttendee');
      commit('removeToken');
    },
    loginToken({commit}, token){
      commit('updateToken', token);
    },
    obtainToken({commit}, person){
      const payload = {
        username: person.username,
        password: person.password
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
    inspectToken({commit, dispatch}){
      const token = this.state.jwt;
      if(token){
        const exp = decoded.exp
        const orig_iat = decoded.orig_iat
        if(exp - (Date.now()/1000) < 1800 && (Date.now()/1000) - orig_iat < 628200){
          dispatch('refreshToken');
        } else if (exp -(Date.now()/1000) < 1800){
          // DO NOTHING, DO NOT REFRESH
        } else {

          // PROMPT USER TO RE-LOGIN, THIS ELSE CLAUSE COVERS THE CONDITION WHERE A TOKEN IS EXPIRED AS WELL
        }
      }

    },
    setBreakout({commit}, session){
      commit(session.breakout, session.id);
    },
    getProfile({commit}, id){
      commit('setAttendee', id);
    }

  }
});
