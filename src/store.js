import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 1.list保存用户信息
    list:0,
    // 2.isLogin 保存用户登录状态
    isLogin:false,
    // 3.保存用户的书架信息
    bookShelf:0,
    // 4.保存用户书籍的书籍长度(书籍数量)
    booki:0
  },
  mutations: {
    // 1.用户登录成功后调用
    data(state,res){
      // 1.1将返回的用户数据保存在list
      state.list= res.user[0];
      // 1.11将返回的书架书籍保存在bookShelf,如果不是undefi的话,将长度保存在booki中
      (res.book.length>0)&&((state.bookShelf = res.book)&&(state.booki=res.book.length));
      // 1.2将登录状态改为true
      state.isLogin = true;
    },
    // 2.将书籍加入到书架时，更新书架
    addBook(state,res){
      // 2.1将添加的书籍信息保存
      state.bookShelf[state.booki] = res;
      // 2.2 i++
      state.booki++;
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
    },
    // 3.获取书架属性
    books(state){
      return state.bookShelf;
    }
  }
})
