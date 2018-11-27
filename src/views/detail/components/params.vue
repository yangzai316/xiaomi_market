<template>
    <transition name="up">
        <div v-if="detailsImgList.length>0" v-show="show">
            <i class="iconfont icon-fork" @click="close"></i>
            <img :src="item.body.img_url" alt="" v-for="(item,index) in detailsImgList" :key="index">
        </div>
    </transition>
</template>

<script> 
import { paramsData } from '@/server/detail.js';
export default {
    data(){
        return{
            show:false,
            detailsImgList:[]
        }
    },
    methods:{
        async open(){
            this.show = true;
            const _data = await paramsData();
            this.detailsImgList = _data.data.sections
        },
        close(){
            this.show = false;
        },
    }
}; 
</script>

<style lang="less" scoped>
div{
    width: 100%;
    position: fixed;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow-y: scroll;
    z-index: 9;
}
i{
    position: absolute;
    top:0;
    right: 0;
    font-size: .533333rem;
    margin:.4rem;
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
.up-enter-active, .up-leave-active {
    transition: transform 0.3s;
}
.up-enter{ 
    transform: translateY(10rem);
}
.up-leave-active{ 
    transform: translateY(20rem);
}
</style>