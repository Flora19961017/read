import Vue from 'vue'
import Router from 'vue-router'
import Index from "./views/Index.vue"
import MyChoice from './views/MyChoice.vue'
import Carousel from "./components/index/Carousel.vue"
import SignInAndMask from "./views/IndexSubpages/SignInAndMask.vue"
import More from './views/choice/More'
import BookDetail from './views/choice/BookDetail'
import WriteComm from './views/choice/WriteComm'
import Mine from './views/mine/Mine.vue'
import Inform from './views/mine/Inform.vue'
import Message from './views/mine/Message.vue'
import Balance from './views/mine/Balance.vue'
import Welfare from './views/mine/Welfare.vue'
import GoodSelect from "./views/IndexSubpages/GoodSelect.vue"
import FinishMore from "./views/IndexSubpages/FinishMore.vue"
import Bookrack from './views/book/Bookrack.vue'
import Search from './views/Search.vue'
import Login from './views/Login.vue'
import RegSuccess from './views/regSuccess/RegSuccess.vue'
import BookContent from './views/book/BookContent'

Vue.use(Router)

export default new Router({
  routes: [
    {path:"/RegSuccess",component:RegSuccess},
    {path:"/Login",component:Login},
    {path:"/Search",component:Search},
    {path:"/Bookrack",component:Bookrack},
    {path:"/Welfare",component:Welfare},
    {path:"/Inform",component:Inform},
    {path:"/Message",component:Message},
    {path:"/Balance",component:Balance},
    {path:"/Mine",component:Mine},
    {
      path:'/Index',component:Index,
      children: [
        { path: 'MyChoice', component: MyChoice },
        
      ]
    },
    {path:'/Carousel2',component:Carousel},
    {path:"/SignInAndMask",component:SignInAndMask},
    {
      path:"/GoodSelect",
      name:"goodselect",
      component:GoodSelect
    },
    {
      path:"/FinishMore",
      name:"finishmore",
      component:FinishMore
    },

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
    },
    {
      path:'/BookContent',
      name:'bookContent',
      component:BookContent
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
