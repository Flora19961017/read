import Vue from 'vue'
import Router from 'vue-router'
import Index from "./views/Index.vue"
import MyChoice from './views/MyChoice.vue'
import Car from './components/choice/Carousel'
import Carousel from "./components/index/Carousel.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/Index',component:Index},
    {path:'/Carousel2',component:Carousel},
    {
      path: '/MyChoice',
      name: 'mychoice',
      component: MyChoice
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
