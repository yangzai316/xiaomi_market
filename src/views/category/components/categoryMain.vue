<template>
<div>
    <ul class="btn">
        <li v-for="(item,index) in categoryList" :key="index" 
            :class="{active:active==index}"
            @click="leftBtn(index)"
        >{{item.name}}</li>
    </ul>
    <ul class="main">
        <li class="main_item" v-for="(item,index) in categoryList" :key="index">
            <img :src="item.fill_img" alt="" v-if="item.fill_img">
            <p class="title">
                <span>{{item.name}}</span>
            </p>
            <ul class="productbox" >
                <router-link v-for="(list_item,list_index) in item.list_group" :key="list_index" v-if="list_item.product_name" to="/detail" tag="li">
                    <img :src="list_item.img_url" alt="">
                    <p>{{list_item.product_name}}</p>
                </router-link>
            </ul>
        </li>
</ul>
</div>
</template>

<script>
import { mapState,mapGetters } from 'vuex';
const _debounce = require('lodash.debounce');

import { categoryData } from '@/server/category.js';
export default {
    data(){
        return{
            mainDom:null,
            active:0,
            categoryList:[],
            accumulatorArr:[],
            accumulatorKey:true
        }
    },
    computed:{ 
    },
    async mounted(){
        const _data = await categoryData();
        this.categoryList = this.filterCategoryList(_data.data);
        
        const _this = this;
        const main = document.querySelector('.main');
        this.mainDom = main;
        main.addEventListener('scroll', function(){
            _this.scrollFun(main.scrollTop);
        });

    }, 
    methods:{
        getAccumulator(){ 
            const li_list = document.getElementsByClassName('main_item');
            const _l = li_list.length;
            let _arr = [];
            for(let i=0;i<_l;i++){ 
                _arr.push(li_list[i].offsetHeight); 
            };  
            _arr.unshift(0,0);//获取每个.main_item的高（除最后一个元素，增加（0，0）方便后面求和）
            
            let _accumulator = [];
            _arr.reduce(function(s, c) {
                _accumulator.push(s + c);
                return s + c;
            });
            this.accumulatorArr = _accumulator;//获取每一元素离父级的距离          
        },
        leftBtn(index){
            if(this.accumulatorKey) {
                this.accumulatorKey = false;
                this.getAccumulator();
            };
            this.active = index;
            this.mainDom.scrollTo(0, this.accumulatorArr[index]);
        },
        scrollFun:_debounce(function(_scrollTop){
            if(this.accumulatorKey) {
                this.accumulatorKey = false;
                this.getAccumulator();
            };
            const _threshold = 120;//滚动变化的阈值
            const accumulatorArr = this.accumulatorArr; 
            for(let i=0;i<accumulatorArr.length;i++){
                if(_scrollTop + _threshold <= accumulatorArr[i+1]) return this.active = i;
            }
        },200), 
        filterCategoryList(data){ //处理接口返回的数据结构
            let _arr = [];
            data.map(function(item) { 

                const _list_fill = item.category_list.filter(function(item_item){
                    return item_item.view_type == 'cells_auto_fill';
                });

                const _list_group = item.category_list.filter(function(item_item){
                    return item_item.view_type == 'category_group';
                })[0].body.items;

                let _list_fill_img = '';
                if(_list_fill.length>0) _list_fill_img = _list_fill[0].body.items[0].img_url;
                
                let _obj = {
                    list_group:_list_group,
                    fill_img:_list_fill_img, 
                    name : item.category_name
                }  
                _arr.push(_obj); 
            });  
            return _arr

        },
    }
}; 
</script>

<style lang="less" scoped>
.main{
    position: fixed;
    left: 2.133333rem;
    right:0;
    top:1.333333rem;
    bottom: 1.386667rem;
    overflow-y: scroll;
    background-color:#fff;
    padding:0 10px;
    >li{
        img{
            width: 100%;
        }
        .title{
            text-align: center;
            line-height: 1rem;
            padding-top:20px;
            span{
                display: inline-block;
                font-size: .426667rem;
                font-weight: 400;
            }
            span::before{
                display: inline-block;
                height:  0.14rem;
                content: '';
                width:.533333rem;
                border-top: 1px solid #e0e0e0; 
                margin:0 .213333rem;
            }
            span::after{
                display: inline-block; 
                height:  0.14rem;
                content: '';
                width:.533333rem; 
                border-top: 1px solid #e0e0e0; 
                margin:0 .213333rem;
            }
        }
        .productbox{
            li{
                display: inline-block;
                font-size: 0;
                width: 33.33%; 
                margin:.266667rem 0 .4rem;
                img{
                    width: 53%;
                    margin:0 auto;
                    display: block;
                }
                p{
                    color: #0000008a;
                    text-align: center;
                    width:100%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    font-size: .32rem;
                    margin-top:.266667rem;
                }
            }
        }
    }
}
.btn{
    background-color: #fefefe;
    width: 2.133333rem;
    box-sizing: border-box;
    border-right: 1px solid #efefef;
    position:fixed;
    top:1.333333rem;
    bottom: 1.386667rem;
    overflow-y: scroll;
    li{
        line-height:1.2rem;    
        font-size: .34rem; 
        text-align: center;
        color:#3c3c3c;
        &.active{
            color:#fb7d34;
            font-size: .426667rem;
        }
    }

}
ul::-webkit-scrollbar{
    display: none;
}
</style>