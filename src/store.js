import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: ''
  },
  mutations: {
    setUsername(state, username){
      state.username = username;
    },
    resetUsername(state){
      state.username = '';
    }
  },
  actions: {
    login({commit}, username){
      commit('setUsername', username);
    },
    logout({commit}){
      commit('resetUsername');
    }
  }
});
