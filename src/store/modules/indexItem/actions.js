export default {
    changeIndexItem({commit},index){
        commit('changeIndexItem',index);
    },
    setBannerList({commit},list){
        commit('setBannerList',list);
    },
    setSwipeName({commit},name){
        commit('setSwipeName',name);
    },
    changeFooTabIndex({commit},index){
        commit('changeFooTabIndex',index);
    },
};