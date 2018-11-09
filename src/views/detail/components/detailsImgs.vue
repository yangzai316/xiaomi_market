<template>
<div v-if="detailsImgList.length>0">
    <img :src="item.body.img_url" alt="" v-for="(item,index) in detailsImgList" :key="index" v-if="item.body&&item.body.img_url&&index>=12&&index<=32"> 
    <div class="more">更多评论<i class="iconfont icon-youjiantou"></i></div>
    <img :src="detailsImgList[41].body.img_url"> 
</div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    data(){
        return{
            
        }
    },
    computed:{
        ...mapState('details',[
            'detailsImgList'
        ])
    }
}; 
</script>

<style lang="less" scoped>
div{
    width: 100%;
}
img{
    width:100%;
    display: block;
}
.more{
    color: #4e72a5;
    font-size: .426667rem;
    text-align: center;
    line-height: 1.333333rem;
}
</style>