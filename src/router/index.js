import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    meta: {
      title: '國家搜尋',
      description: '利用模糊關鍵字搜尋國家名稱或別稱'
    },
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      title: '',
      description: ''
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/detail/:id',
    name: 'detail',
    meta: {
      title: '國家詳情',
      description: '國家的其他詳情'
    },
    component: () => import( /* webpackChunkName: "about" */ '../views/CountryDetail.vue')
  }
]

// router.beforeEach((to, from, next) => {
//   if (to.meta.title) {
//       document.title = to.meta.title
//   }
//   next();
// })

const router = new VueRouter({
  routes
})

export default router