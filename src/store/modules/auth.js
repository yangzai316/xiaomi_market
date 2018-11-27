import getters from './auth/getters';
import actions from './auth/actions';
import mutations from './auth/mutations';


const state = {
  logined: '',
  showLoading:false,
  prevUrl:'/'
}

 



export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}