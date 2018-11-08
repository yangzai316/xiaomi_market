<template>
<div class="choosebox" v-show="showChoose">
    <div class="main">
        <div class="result" v-if="currentList"> 
            <div class="imgbox">
                <img :src="currentList.image_share">
            </div>
            <div class="txtbox">
                <p>￥{{currentList.price}}</p>
                <p>{{currentList.name}}</p>
            </div>
        </div>
        <div class="nogood" v-else>暂无该商品</div>
        <div v-for="(item,index) in buyOption" :key="index" class="item">
            <p class="title">{{item.name}}</p>
            <div class="box">
                <p v-for="(list_item,list_index2) in item.list" :key="list_index2" 
                    :class="{w:index==1,active:chooseActiveList[item.prop_cfg_id]==list_item.prop_value_id?true:false}" 
                    @click="fousBtn(item.prop_cfg_id,list_item.prop_value_id,index)"
                >
                    <span>{{list_item.name}}</span>
                    <span>{{list_item.price}}</span>
                </p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { mapState, mapMutations,mapGetters } from 'vuex';
import { imgsData } from '@/server/detail.js';

export default {
    data(){
        return{
            showChoose:false,
            buyOption:[],
            chooseActiveList:{},
            idDealList:[],
            chooseList:[],
            currentList:{}
            
        }
    },
    methods:{
        open(data){
            console.log(data);
            this.showChoose = true;
            this.buyOption = data.buy_option;
            this.chooseList = data.goods_info; 

            this.getChooseActiveList(data.buy_option)
            this.getIdDealList(data.goods_info)
            this.fousBtn();
        },
        getChooseActiveList(data){
            const _obj = {}
            for (const item of data) {
                _obj[item.prop_cfg_id] = item.list[0].prop_value_id
            }
            this.chooseActiveList =  _obj; 
        },
        getIdDealList(data){
            let _arr = [];
            data.forEach(item => {
                let id_str = {}
                item.prop_list.forEach(list_item => {
                    id_str[list_item.prop_cfg_id] = list_item.prop_value_id
                });
                const name = item.name;
                _arr.push({id_str:JSON.stringify(id_str),name:item.name,price:item.market_price,image_share:item.image_share});
            });
            this.idDealList = _arr

        },
        fousBtn(prop_cfg_id,prop_value_id){

            this.chooseActiveList[prop_cfg_id] = prop_value_id;

            const id_str = JSON.stringify(this.chooseActiveList);  
            const current_list = this.idDealList.filter(function(item){
                return item.id_str == id_str
            }); 

            this.currentList = current_list[0];
 
        }
    }
}; 
</script>

<style lang="less" scoped>
.choosebox{
    position: fixed;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,.8);
    z-index: 2;
    .main{
        position: absolute;
        bottom:0;
        height:13.76rem;
        width: 100%;
        border-radius: 15px 15px 0 0;
        background-color: #fff;
        padding:.426667rem;
        box-sizing: border-box;
        .item{
            .title{
                color:rgba(0,0,0,.87);
                font-size: .373333rem;
                margin:.426667rem 0;
            }
            .box{
                p{
                    border:1px solid #f1f1f1;
                    display: inline-block;
                    margin:0 auto;
                    color:#000;
                    width: 9.066667rem;
                    height:1.013333rem;
                    line-height: 1.013333rem;
                    padding-left: .426667rem;
                    padding-right: .426667rem;
                    box-sizing: border-box;
                    margin-bottom: .213333rem;
                    span:nth-child(1){
                        float: left;
                    }
                    span:nth-child(2){
                        float: right;
                    }
                }
                .w{
                    width: 2rem;
                    margin-right:.213333rem;
                }
                .active{
                    color:#f56600;
                    border:1px solid #f56600;
                }
            }
        }
        .result{
            margin-bottom: .533333rem;
            .imgbox{
                width:2.773333rem;
                height: 2.773333rem;
                display: inline-block;
                border:1px solid #f1f1f1;
                vertical-align: top;
                img{
                    width: 100%;
                    display: block;
                } 
            }
            .txtbox{
                display: inline-block;
                height: 2.773333rem;
                padding-top: .853333rem;
                box-sizing: border-box;
                p{
                    width:100%;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                }
                p:nth-child(1){
                    font-size: .64rem;
                    color:#f56600;
                }
                p:nth-child(2){
                    font-size: .373333rem;
                    color: rgba(0,0,0,.87);
                }
            }

        }
        .nogood{
            line-height: 2.773333rem;
            color:#f56600;
            font-size: .373333rem;
        }
    }
}
</style>