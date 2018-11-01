export default {
    changeIndexItem(state,index){
        state.activeIndex = index;  
    },
    setBannerList(state,list){
        state.bannerList = list;
    },
    setSwipeName(state,name){
        state.swipeName = name;
    },
    changeFooTabIndex(state,index){
        state.fooTabIndex = index;
    }
};