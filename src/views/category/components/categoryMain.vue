<template>
<ul class="main">
    <li v-for="(item,index) in categoryList" :key="index">
        <img :src="item.fill_img" alt="">
        <p class="title">
            <span>{{item.name}}</span>
        </p>
        <img src="" alt="">
        <ul class="productbox" >
            <li v-for="(list_item,list_index) in item.list_group" :key="list_index" v-if="list_item.product_name">
                <img :src="list_item.img_url" alt="">
                <p>{{list_item.product_name}}</p>
            </li>
        </ul>
    </li>
</ul>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    data(){
        return{
            
        }
    },
    computed:{
        ...mapGetters('category',{
            categoryList:'filterCategoryList'
        })


        
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
</style>