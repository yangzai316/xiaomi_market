import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth';
import indexItem from './modules/indexItem';
import category from './modules/category';
import details from './modules/details';

Vue.use(Vuex)


export default new Vuex.Store({
  modules: {
    auth,
    indexItem,
    category,
    details
  }
})