import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/activities'
    },
    {
      path: '/activities',
      name: 'activities',
      component: () => import(/* webpackChunkName: "about" */ './views/Activities.vue')
    }
  ]
})
