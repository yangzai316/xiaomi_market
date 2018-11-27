export default {
    getCommentsList(state,list){
        state.commentsList = list;  
    },
    getDetailsImgList(state,list){
        state.detailsImgList = list;  
    },
    setSwiperList(state,{key,list}){
        state.swiperShow = key;
        state.swiperList = list;  
    },
};