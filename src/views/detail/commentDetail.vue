<template>
<div>
    <header>
        <i class="iconfont icon-xiangzuojiantou"></i>
        <span>评论详情</span>
        <i class="iconfont icon-icon-"></i>
    </header>
    <ul>
        <li >
            <div class="comments_top">
                <div class="headbox">
                    <img :src="item.user_avatar">
                </div>
                <div class="name">
                    <p>{{item.user_name}}</p>
                    <p>{{item.add_time}}</p>
                </div>
                <div class="zan">
                    <i class="iconfont icon-smile"></i>&nbsp;<span>超爱</span>
                </div>
            </div>
            <div class="content">{{item.comment_content}}</div>
            <div class="imgs" @click="openImg(item.comment_images)">
                <div class="itemimgbox" v-for="(img_item,img_index) in item.comment_images" :key="img_index"
                    :style="{backgroundImage: 'url('+img_item+')'}"
                >
                </div>
            </div>
            <div class="replybox">
                <p><span>官方回复：</span>{{item.reply_content}}</p>
                <p v-for="(user_item,user_index) in item.user_replys" :key="user_index">
                    <img :src="user_item.user_avatar" alt="">{{user_item.user_name}}：{{user_item.reply_content}}
                </p>
            </div>
        </li>
    </ul>
</div>
</template>

<script>
import { commentDetailData } from '@/server/detail.js'; 

import swiperMask from './components/swiperMask.vue';
export default {
    components:{
        swiperMask
    },
    data(){
        return{
            item:[]
        }
    },
    async mounted(){
        const _data = await commentDetailData();
        this.item = _data.data;
        
    },
    methods:{
        openImg(list){
            this.setSwiperList({
                key:true,
                list
            });
        }
    }
}; 
</script>

<style lang="less" scoped>
header{
    i{
        float: left;
        font-size: .533333rem;
        margin:0 .266667rem;
    }
    .icon-icon-{
        float: right;
        font-size: .746667rem;
    }
    font-size: .426667rem;
    background: #f2f2f2;
    height: 1.333333rem;
    line-height: 1.333333rem;
    text-align: center;
    position: fixed;
    top:0;
    width: 10rem;
}
ul{
    padding-top:1.333333rem;
    li{
        margin:.426667rem;
        color: #3c3c3c;
    }
}
.comments_top{
    height: .906667rem;
    margin-bottom: .213333rem;
    .headbox{
        width: .906667rem;
        height: 0.906667rem;
        border-radius: 50%;
        overflow: hidden;
        float:left;
        margin-right: .213333rem;
        img{
            width: 100%;
        }
    }
    .name{
        float:left;
        font-size: .373333rem;
        line-height: .426667rem;
        p:nth-child(2){
            font-size: .32rem;
        }
    }
    .zan{
        float:right;
        color:#ff6700; 
        i{
            font-size:.533333rem;
            vertical-align: sub;
        }
    }
}
.content{
    font-size: .373333rem;
    width:100%;
    white-space: normal; 
    line-height: .48rem;
}
.imgs{
    width: 100%;
    overflow: hidden;
    margin:.266667rem 0;
    .itemimgbox{
        width:2.213333rem;
        height:2.213333rem;
        display: inline-block; 
        background-size: contain;
        background-position: center center;
        background-repeat: no-repeat;
        background-color: #000;
        margin:0 .16rem .16rem 0;
    }
}
.replybox{
    padding:.213333rem;
    background-color: #f6f6f6;
    p{
        margin-bottom: .213333rem;
        line-height: .426667rem;
        span{
            color: #ff6700;
        }
        img{
            width: .426667rem;
            height: .426667rem;
            border-radius: .213333rem;
            vertical-align: sub;
            margin-right: .213333rem;
        }
        font-size: .32rem;
    }
}
</style>