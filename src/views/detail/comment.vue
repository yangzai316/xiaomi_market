<template>
<div>
    <header>
        <i class="iconfont icon-xiangzuojiantou"></i>
        <span>评论列表</span>
        <i class="iconfont icon-icon-"></i>
    </header>
    <ul v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="40"
        :style="{maxHeight:WHeight+'px'} ">
        <li v-for="(item,index) in list" :key="index" >
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
                <router-link tag="div" to="/detail/commentDetail" class="more" v-if="item.user_reply_num>3">查看全部评论<i class="iconfont icon-xiangyoujiantou"></i></router-link>
            </div>
        </li>
        <li class="loading"  v-show="!end">数据请求中...</li>
        <li class="loading" v-show="end">没有数据了...</li>
    </ul>
    <swiper-mask></swiper-mask>
</div>
</template>

<script>
import { commentData } from '@/server/detail.js';
import { mapMutations } from 'vuex';

import swiperMask from './components/swiperMask.vue';
export default {
    components:{
        swiperMask
    },
    data(){
        return{
            list:[],
            WHeight:500,
            page:0,
            end:false
        }
    },
    async mounted(){
        this.WHeight = window.innerHeight;
        
    },
    methods:{
        ...mapMutations('details',[
            'setSwiperList'
        ]), 
        openImg(list){
            this.setSwiperList({
                key:true,
                list
            });
        },
        async loadMore() {
            this.page++   
            const _data = await commentData({
                page:this.page
            }); 
            if(!_data.result) this.end = true;
            const thisList = this.list;
            const newList = _data.data.comments;

            setTimeout(() => { 
                this.list = [...thisList,...newList];
            }, 1000);
                 
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
    overflow-y: scroll;
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
.more{
    line-height: 1.066667rem;
    border-top:1px solid #d8d8d8;
    font-size: .426667rem;
    color:#ff6700;
    text-align: center;
}
.loading{
    text-align: center;
    line-height: 40px;
}
</style>