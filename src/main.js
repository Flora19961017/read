import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"
import MintUI from "mint-ui"
import "mint-ui/lib/style.css"
import qs from "qs"
Vue.use(MintUI)
// 引入全局组件轮播图
// import MyCarousel from './components/choice/Carousel'

// 创建全局组件
// Vue.component("my-carousel",MyCarousel)
Vue.config.productionTip = false
axios.defaults.baseURL="http://127.0.0.1:5050/"
// 配置axios 保存session信息
axios.defaults.withCredentials=true;
Vue.prototype.axios=axios
Vue.use(MintUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
