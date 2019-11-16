import Vue from 'vue'
import Router from 'vue-router'
import leftmenu from '@/components/leftmenu'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/leftmenu',
      name: 'leftmenu',
      component: leftmenu
    }
  ]
})
export default router
