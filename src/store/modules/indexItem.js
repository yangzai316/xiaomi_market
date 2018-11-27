// indexItem
import actions from './indexItem/actions';
import getters from './indexItem/getters';
import mutations from './indexItem/mutations';

const state = {
    activeIndex:1,
    bannerList:{},
    swipeName:'swipe-next',
    fooTabIndex:1
};


export default {
    namespaced:true,
    state,
    actions,
    getters,
    mutations
}