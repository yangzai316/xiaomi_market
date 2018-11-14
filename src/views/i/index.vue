<template>
<div class="i">
    <section class="headbox" >
        <div class="profile">
            <img src="./../../../public/img/yang.jpg">
        </div>
        <div class="proinfo">
            <p>{{logined}}</p>
            <p>18383834380</p>
        </div>
    </section>
    <section class="order">
        <span>我的订单</span>
        <span>全部订单<i class="iconfont icon-xiangyoujiantou"></i></span>
    </section>
    <section class="list">
        <div>
            <p><i class="iconfont icon-daifukuan"></i></p>
            <p>待付款</p>
        </div>
        <div>
            <p><i class="iconfont icon-daishouhuo"></i></p>
            <p>待收货</p>
        </div>
        <div>
            <p><i class="iconfont icon-weixiuoff"></i></p>
            <p>退换修</p>
        </div>
    </section>
    <ul>
        <li v-for="(item,index) in tabs" :key="index">
            <div v-for="(tab_item,index2) in item.tab" :key="index2" class="tab">
                <i class="iconfont" :class="tab_item.icon" :style="{color:tab_item.bgColor}"></i>
                <span>
                    {{tab_item.name}}
                </span>
                <i class="iconfont icon-xiangyoujiantou"></i>
            </div>
        </li>
    </ul>
	<foot-tab></foot-tab>
</div>
</template>

<script>

import footTab from '@/components/footer/index.vue';
import {tabs} from './option.js';
import { mapState } from 'vuex';
export default {
    data(){
        return{
            tabs
        }
    },
    components:{
        footTab
    },
    computed:{
        ...mapState('auth',[
            'logined'
        ])
    }
}; 
</script>

<style lang="less" scoped>
.i{
    position: fixed; 
    width: 10rem;
    top: 0; 
    bottom: 0;
    background-color: #f5f5f5;
}
.headbox{ 
    background:#f37d0f url("./../../../public/img/ibg.png") no-repeat center;
    background-size: 100% 100%;
    padding:.4rem;
    .profile{
        display:inline-block;
        width: 1.333333rem;
        height: 1.333333rem;
        overflow: hidden;
        box-sizing: border-box;
        border-radius: 100%;
        border: 3px solid hsla(0,0%,100%,.4);
        vertical-align: bottom;
        margin-right: .266667rem;
        img{
            width:100%;
            display:block;
        }
    }
    .proinfo{
        display:inline-block;
        font-size: .373333rem;
        color:#fff;
        p:nth-child(1){
            margin-bottom: .266667rem;
            margin-bottom: .106667rem;
        }
        p:nth-child(2){
            color:hsla(0,0%,100%,.6);
            margin-bottom: .24rem;
        }
    }
}
.order{
    line-height: 1.12rem;
    font-size: .373333rem;
    position: relative;
    padding-left:.4rem;
    background-color: #fff;
    border-bottom: 1px solid rgba(0,0,0,.15);
    color: rgba(0,0,0,.87);
    span:nth-child(2){
        position: absolute;
        top:0;
        right:.4rem;
        i{
            vertical-align: middle;
        }
    }
}
.list{
    height: 2.346667rem;
    div{
        float: left;
        width:33.33%;
        text-align: center;
        font-size: .32rem;
        color: rgba(0,0,0,.87);
        padding-top: 18px;
        height: 1.866667rem;
        p:nth-child(1){
            margin-bottom: 6px;
        }
        background-color: #fff;
        i{
            color:#9b9b9b;
            font-size: .746667rem;
        }
    }
}
ul{
    li{
        padding-top:.266667rem;
        .tab{
            height: 1.44rem;
            line-height: 1.44rem;
            position: relative;
            background: #fff;
            box-sizing: border-box;
            border-bottom: 1px solid rgba(0,0,0,.15);
            i:nth-child(1){
                width: 1.44rem;
                height:1.44rem;
                display: inline-block;
                text-align: center;
                vertical-align: top;
                font-size: .693333rem;
                background: #fff;
            }
            i:nth-child(3){
                position: absolute;
                right: .4rem;
                top:0;
                font-size: 21px;
            }
            >span{
                font-size: .373333rem;
                display: inline-block;
            }
        }
        .tab:last-child{
            border-bottom: none;
        }
    }
}
</style>