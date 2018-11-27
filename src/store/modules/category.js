// category
import actions from './category/actions';
import mutations from './category/mutations';
import getters from './category/getters';

const state = {
    categoryList:[]
};


export default {
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}