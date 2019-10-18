import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Customers from '@/components/Customers'
import About from '@/components/About'
import Add from '@/components/Add'
import CustomerDetail from '@/components/CustomerDetail'
import Bianji from '@/components/Bianji'
import Shanchu from '@/components/Shanchu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/customers',
      name: 'Customers',
      component: Customers
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/add',
      name: 'Add',
      component: Add
    },
    {
      path: '/customerDetail/:id',
      name: 'CustomerDetail',
      component: CustomerDetail
    },
    {
      path: '/bianji/:id',
      name: 'Bianji',
      component: Bianji
    },
    {
      path: '/shanchu/:id',
      name: 'Shanchu',
      component: Shanchu
    }

  ]
})
