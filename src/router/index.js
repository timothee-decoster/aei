import Vue from 'vue'
import Router from 'vue-router'
import summary from '@/components/pages/Summary'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Summary',
      component: summary
    }
  ]
})
