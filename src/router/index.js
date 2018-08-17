import Vue from 'vue'
import Router from 'vue-router'
import summary from '@/components/pages/Summary'
import L1 from '@/components/pages/L1'
import L2 from '@/components/pages/L2'
import L3 from '@/components/pages/L3'
import M1 from '@/components/pages/M1'
import M2 from '@/components/pages/M2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: summary
    },
    {
      path: '/L1',
      component: L1
    },
    {
      path: '/L2',
      component: L2
    },
    {
      path: '/L3',
      component: L3
    },
    {
      path: '/M1',
      component: M1
    },
    {
      path: '/M2',
      component: M2
    }
  ]
})
