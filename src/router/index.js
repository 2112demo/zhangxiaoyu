import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/view/index/index'
import Demo from '@/view/demo/demo'
import DemoList from '@/view/demoList/index'
import Orders from '@/view/orders/index'
import Dispatch from '@/view/orderDispatch/index'

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
    },
    {
      path: '/demoList',
      name: 'demoList',
      component: DemoList
    },
    {
      path: '/orders',
      name: 'orders',
      component: Orders
    },
    {
      path: '/dispatch',
      name: 'dispatch',
      component: Dispatch
    }
  ]
})
