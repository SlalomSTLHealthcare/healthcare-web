import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    username: '',
    breakoutOne: '',
    breakoutOneWaitlist: '',
    breakoutTwo: '',
    breakoutTwoWaitlist: ''
  },
  mutations: {
    setUsername(state, username){
      state.username = username;
    },
    resetUsername(state){
      state.username = '';
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
    }
  },
  actions: {
    login({commit}, username){
      commit('setUsername', username);
    },
    logout({commit}){
      commit('resetUsername');
      commit('resetBreakouts');
    },
    setBreakout({commit}, session){
      commit(session.breakout, session.id);
    }

  }
});
