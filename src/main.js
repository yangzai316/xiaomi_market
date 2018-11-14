import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index' 

import VueCookies from 'vue-cookies'//操作cookie
import Mint from 'mint-ui';//mint-ui框架
import 'mint-ui/lib/style.css';

Vue.use(Mint);
Vue.use(VueCookies)


 

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
  