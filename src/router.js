import Vue from 'vue'
import store from '@/store/index' 
import routerCenter from 'vue-router'
import { Toast } from 'mint-ui'; 
import VueCookies from 'vue-cookies'//操作cookie

import Index from './views/index/index.vue'
import Category from './views/category/index.vue'
import Login from './views/login/index.vue'
import Car from './views/car/index.vue'
import I from './views/i/index.vue'
import Detail from './views/detail/index.vue'
import Comments from './views/detail/comment.vue'
import CommentDetail from './views/detail/commentDetail.vue'

Vue.use(routerCenter)

const Router = new routerCenter({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/category',
      name: 'category',
      component: Category
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/car',
      name: 'car',
      component: Car
    },
    {
      path: '/i',
      name: 'i',
      component: I,
      meta: { 
        requireAuth: true
      }
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
      path: '/detail/comment',
      name: 'comment',
      component: Comments
    },
    {
      path: '/detail/commentDetail',
      name: 'commentDetail',
      component: CommentDetail
    },
  ]
});
// 判断是否需要登录权限 以及是否登录
Router.beforeEach((to, from, next) => {
  store.commit('auth/setPrevUrl',from.fullPath);
	if (to.matched.some(res => res.meta.requireAuth)) {
		if (VueCookies.isKey("user_session")) {
			next()
		} else {
      Toast('请先登陆...');
			next({
				path: '/login',
				query: {backUrl: to.fullPath}
			})
		}
	} else {
		next()
	}
});

export default Router