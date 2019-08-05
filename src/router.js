import Vue from 'vue'
import Router from 'vue-router'
import MyChoice from './views/MyChoice.vue'
import Car from './components/choice/Carousel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/MyChoice',
      name: 'mychoice',
      component: MyChoice
    },
    {
      path:'/Carousel',
      name:'carousel',
      component:Car
    }
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
