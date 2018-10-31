import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index/index.vue'
import Test from './views/test/test.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
  ]
})
