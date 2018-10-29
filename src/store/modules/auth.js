import getters from './auth/getters';
import actions from './auth/actions';
import mutations from './auth/mutations';


const state = {
  checkoutStatus: 123
}

 



export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}