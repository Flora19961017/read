import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 1.list保存用户信息
    list:0,
    // 2.isLogin 保存用户登录状态
    isLogin:false,
  },
  mutations: {
    // 1.用户登录成功后调用
    data(state,res){
      // 1.1将返回的数据保存在list
      state.list= res;
      // 1.2将登录状态改为true
      state.isLogin = true;
    }
  },
  actions: {

  },
  getters:{
    // 1.返回用户登录后的信息
    result(state){
      return state.list;
    },
    // 2.获取；用户的登录状态
    isLogin(state){
      return state.isLogin;
    }
  }
})
