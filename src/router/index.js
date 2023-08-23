import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/view/index/index'
import Demo from '@/view/demo/demo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/demo',
      name: 'demo',
      component: Demo
    }
  ]
})
