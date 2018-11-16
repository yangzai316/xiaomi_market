<template>
<div>
    <detail-header></detail-header>
	<mt-swipe :auto="0" class="swipe_box">
		<mt-swipe-item v-for="(item,index) in swiperImg" :key="index"><img :src="item.img_url" class="swipe_img"></mt-swipe-item>
	</mt-swipe>
    <section class="decbox">
        <p class="title">{{product_name}}</p>
        <p class="dec">{{product_desc}}</p>
        <p class="piece">￥<span>{{market_price}}</span></p>
    </section>
    <ul class="parameters">
        <li v-for="(item,index) in class_parameters" :key="index" v-if="item.top_title">
            <img :src="item.icon">
            <p>{{item.top_title}}</p>
            <p>{{item.value}}</p>
        </li>
    </ul>
    <section class="actbox">
        <span class="title">促销</span>
        <span class="zeng">赠品</span>
        <span class="cont">赠米粉卡，内含100元话费</span>
        <i class="iconfont icon-xiangyoujiantou"></i>
    </section>
    <section class="actbox">
        <span class="title">换机</span>
        <span class="huan">以旧换新，回收专享120元购新福利</span>
        <i class="iconfont icon-xiangyoujiantou"></i>
    </section>
    <section class="actbox" @click="setShowChoose(true)">
        <span class="title">已选</span>
        <span class="cont">{{txt}}</span>
        <i class="iconfont icon-xiangyoujiantou"></i>
    </section>
    <section class="actbox">
        <span class="title">送至</span>
        <span class="cont">上海市 黄浦区</span> 
        &nbsp;&nbsp;<span class="huan">有现货</span>
        <i class="iconfont icon-xiangyoujiantou"></i>
    </section>
    <section class="actbox"> 
        <span><i class="iconfont icon-duigouzhong"></i>小米自营</span>
        <span><i class="iconfont icon-duigouzhong"></i>小米发货</span>
        <span><i class="iconfont icon-duigouzhong"></i>7天无理由退货</span>
        <i class="iconfont icon-xiangyoujiantou"></i>
    </section>
    <choose ref='openChoose' @finishCar="finishCar"></choose>
    <comments></comments>
    <details-imgs></details-imgs>
    <commends></commends>
    <surebtn @incar="setShowChoose"></surebtn>

</div>
</template>

<script>
import { detailData } from '@/server/detail.js'; 
import { mapMutations } from 'vuex';
import choose from './components/choose.vue';
import comments from './components/comments.vue';
import detailsImgs from './components/detailsImgs.vue';
import commends from './components/commends.vue';
import surebtn from './components/surebtn.vue';
import detailHeader from '@/components/header/detailHeader.vue';
export default {
    components:{
        choose,
        comments,
        detailsImgs,
        commends,
        surebtn,
        detailHeader
    },
    data(){
        return{
            swiperImg:[],
            product_desc:'',
            product_name:'',
            market_price:'',
            class_parameters:'',
            data:{},
            txt:'小米8 青春版 4GB+64GB 深空灰 x 1'
        }
    },
    async mounted(){
        const _data = await detailData({
            id:123456
        });
        this.swiperImg = _data.data.goods_share_datas.gallery_view;
        this.product_desc = _data.data.product_info.product_desc;
        this.product_name = _data.data.product_info.name;
        this.market_price = _data.data.goods_info[0].market_price;
        this.class_parameters = _data.data.goods_info[0].class_parameters.list
        this.data = _data.data;
        this.getCommentsList(_data.data.goods_share_datas.comments.list);
        this.getDetailsImgList(_data.data.goods_tpl_datas['7068'].sections);
    },
    methods:{
        ...mapMutations('details',[
            'getCommentsList',
            'getDetailsImgList'
        ]),
        setShowChoose(){
            this.$refs.openChoose.open(this.data)
        },
        finishCar(name,n){
             
            this.txt =`${name} x${n}`;
        }
    }
}; 
</script>

<style lang="less" scoped>
.swipe_box{
    height: 11rem;
    .swipe_img{
        width: 100%;
        height: 100%;
        display: block;
    } 
}
.decbox{
    padding:0 .4rem;
    .title{
        font-size: .426667rem;
        line-height: 32px;
    }
    .dec{
        font-size: .32rem;
        line-height: .4rem;
        color: rgba(0,0,0,.54);
    }
    .piece{
        font-size: .533333rem;
        color: #ff6700;
        line-height: .8rem;
        font-weight: bolder;
        margin:.266667rem 0 .426667rem;
        span{
            font-size: .8rem;
        }
    }
}
.parameters{
    white-space: nowrap;
    overflow-x: scroll;
    height: 1.6rem;
    margin-bottom: .426667rem;
    li{
        width: 2.333333rem;
        height:1.493333rem;
        border-right:1px solid #ececec;
        display: inline-block;
        img{
            width:.56rem;
            height:.56rem;
            display: block;
            margin:0 auto;
        }
        p{
            color: #676767;
            white-space: nowrap;
            text-overflow: ellipsis;
            width: 100%;
            text-align: center;
        }
        P:nth-of-type(1){
            font-size: .373333rem;
            margin:.133333rem 0;
        }
        P:nth-of-type(2){
            font-size: .32rem;
        }
        &:last-child{
            border-right:none;
        }
    }
    &::-webkit-scrollbar{
        display: none;
    }
    
}
.actbox{
    width: 9.066667rem;
    height:1.066667rem;
    line-height: 1.066667rem;
    border:#e5e5e5 1px solid;
    color:#0000008a;
    border-radius: 3px;
    margin:0 auto;
    padding:0 .426667rem;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
    margin-bottom: .213333rem;
    background-color: #fafafa;
    .title{
        font-size: .346667rem;
        margin-right: .4rem;
    }
    .zeng{
        font-size: .32rem;
        color:#f56600;
        padding:0 2px;
        border:1px solid #f56600;
        border-radius: 2px;
        margin-right: .133333rem;
    }
    .huan{
        font-size: .32rem;
        color: #f56600;
    }
    .cont{
        font-size: .32rem;
        color: rgba(0,0,0,.87);
    }
    .icon-xiangyoujiantou{
        position: absolute;
        right:.4rem;
    }
    .icon-duigouzhong{
        vertical-align: middle;
        color: #f56600;
        font-size: .426667rem;
    }
}
</style>

