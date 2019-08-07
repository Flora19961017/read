import Vue from 'vue'
import Router from 'vue-router'
import MyChoice from './views/MyChoice.vue'
import More from './views/choice/More'
import BookDetail from './views/choice/BookDetail'
import WriteComm from './views/choice/WriteComm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/MyChoice',
      name: 'mychoice',
      component: MyChoice
    },
    {
      path: '/More',
      name: 'more',
      component: More
    },
    {
      path: '/BookDetail',
      name: 'bookdetail',
      component: BookDetail
    },
    {
      path:'/WriteComm',
      name:'writecomm',
      component:WriteComm
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
