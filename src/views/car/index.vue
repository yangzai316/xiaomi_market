<template>
<div>
    <common-header  title="购物车"></common-header>
    <section v-if="logined">
        <section class="without" v-if="listData.length<=0">
            <i class="iconfont icon-iconset0313"></i><br><br> 
            <router-link tag="span" to="/category">空空如也，去逛逛</router-link> 
        </section>
        <ul v-else>
            <li v-for="(item,index) in listData" :key="index">
                <div>
                    <label class="input_checkbox">
                        <input type="checkbox" :checked="item.isChecked"/>
                        <i class="iconfont icon-duigou1"></i>
                    </label>
                </div>
                <div>
                    <router-link tag="a" to="detail"><img :src="item.image_url" alt=""></router-link>
                </div>
                <div>
                    <p>{{item.product_desc}}</p>
                    <p>售价：￥{{item.market_price}}</p>
                    <div class="count">
                        <p>
                            <i class="iconfont icon-jianhao" @click="count(-1,index)"></i>
                            <span>{{item.count}}</span>
                            <i class="iconfont icon-jiahao" @click="count(1,index)"></i> 
                        </p>
                        <i class="iconfont icon-lajitong" @click="deleteGood(index)"></i>
                    </div>
                </div>
            </li>
        </ul> 
    </section>
    <section class="without" v-else>
        <i class="iconfont icon-iconset0313"></i><br><br>  
        <router-link tag="span" :to="{ path: 'login', query: { backUrl: 'car' }}" >请先登入</router-link>
    </section>

    <section class="carbtn">
        <div>
            <p>共4件&nbsp;&nbsp;金额</p>
            <p><span>{{totalMoney}}</span>元</p>
        </div>
        <router-link to="/" tag="div">继续购物</router-link>
        <div @click="pay">去结算</div>
    </section>
</div>
</template>

<script>
import { mapState } from 'vuex';
import { carData } from '@/server/car.js'; 
import commonHeader from '@/components/header/commonHeader.vue'
export default {
    data(){
        return{
            listData:[]
        }
    },
    components:{
        commonHeader
    },
    computed:{
        ...mapState('auth',[
            'logined'
        ]),
        totalMoney(){
            return this.listData.reduce((total,current) => {
                return total + current.market_price * current.count;
            },0); 
        }
    },
	async created() {
        if(!this.logined) return;
        
        const list_data = await carData();
        let _listData = list_data.data.recommend_list; 
        _listData.length = 4;
        let _data = [];
        _listData.forEach((item) => {
            _data.push({
                image_url: item.image_url,
                market_price: +item.market_price,
                product_desc: item.product_desc,
                isChecked:true,
                count:1
            })
        });    
        this.listData = _data;
	},
    methods:{
        count(n,index){
            let _counts = this.listData[index].count + n;
            if(_counts==0||_counts==6) return; 
            this.listData[index].count =  _counts;
        },
        deleteGood(index){
            this.listData.splice(index, 1);
        },
        pay(){
            if(this.logined) {
                this.$toast('不会以为真的可以结算吧~~~');
            }else{
                this.$toast('还没有登陆...');
                this.$router.push({path:'login',query: { backUrl: 'car' }}); 
            };
        }  
    }
}; 

</script>

<style lang="less" scoped>
.without{
    text-align: center;
    color:#00000045;
    padding-top:1.5rem;
    .iconfont{
        font-size: 1.333333rem;
    }
}
ul{
    padding-bottom: 1.386667rem;
    li{
        display: flex;
        justify-content:flex-start;
        padding:.266667rem 0;
        border-bottom: 1px solid #eee;
        div:nth-child(1){
            width: .8rem;
            .input_checkbox {
                width: .426667rem;
                height:.426667rem;
                border-radius: 50%;
                border:1px solid #eee;
                display: block;
                margin:.96rem auto 0 auto;
                input{
                    display: none;
                }
                input+i {
                    font-size: 16px; 
                    display: none;
                    color: #ff5722;
                } 
                input:checked+i { 
                    display: block;
                }          
            }      
        }
        div:nth-child(2){
            width: 2.453333rem;
            height:2.453333rem;
            border:1px solid #eee;
            margin-right:.266667rem;
            a,img{
                display: block;
                width: 100%;
            }
        }
        div:nth-child(3){
            flex: 1;
            padding-right:.266667rem;
            p:nth-of-type(1){
                font-size: .373333rem;
                color: #666;
                line-height: .48rem;
                white-space: normal;
                overflow: hidden; 
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                overflow:hidden;
                /*! autoprefixer: off */
                -webkit-box-orient: vertical;
            }
            p:nth-of-type(2){
                font-size: .32rem;
                color: #999;
                line-height: 26px;
            }
            .count{ 
                height: .853333rem;
                font-size: 0;
                p{
                    border:1px solid #f1f1f1;
                    display: inline-block;
                    line-height: .853333rem;
                    background-color: #f4f4f4;
                }
                i{
                    width: .853333rem;
                    font-size: .533333rem;
                    height: .853333rem;
                    display: inline-block;
                    box-sizing: border-box;
                    text-align: center;
                }
                span{
                    width: .853333rem;
                    font-size: .453333rem;
                    height: .853333rem;
                    display: inline-block;
                    box-sizing: border-box;
                    border-left:1px solid #f1f1f1;
                    border-right:1px solid #f1f1f1;
                    background-color: #fff;
                    text-align: center;
                    color: #ff5722;
                    box-sizing: border-box;
                }
                .icon-lajitong{
                    float:right;
                    background-color: #fff;
                    border:none;
                }
            }
        }
    }
}
.carbtn{
    display: flex;
    position: fixed;
    bottom: 0;
    width: 10rem;
    height:1.386667rem;
    justify-content: space-around;
    div{ 
        height:1.386667rem;
        flex:1 1 auto;
        text-align: center;
        font-size: .373333rem;
    }
    div:nth-child(1){
        background-color: #fff;
        p{
            width: 100%;
            text-overflow: ellipsis;
            text-overflow: hidden;
            white-space: nowrap; 
            color: #999;
        }
        p:nth-child(1){
            font-size: .32rem;
            padding:8px 0 6px 0;
        }
        p:nth-child(2){ 
            span{
                font-size: .533333rem;
                font-weight: bold;
                color: #ff6700;
            }
        }
    }
    div:nth-child(2){
        background-color: #f4f4f4;
        color: #ff6700;
        line-height: 1.386667rem;
    }
    div:nth-child(3){
        background-color: #ff6700;
        color: #fff;
        line-height: 1.386667rem;
    }
}


</style>