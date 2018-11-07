<template>
<div>
	<mt-swipe :auto="0" class="swipe_box">
		<mt-swipe-item v-for="(item,index) in swiperImg" :key="index"><img :src="item.img_url" class="swipe_img"></mt-swipe-item>
	</mt-swipe>
    <section class="decbox">
        <p class="title">{{product_name}}</p>
        <p class="dec">{{product_desc}}</p>
        <p class="piece">￥<span>{{market_price}}</span></p>
    </section>
</div>
</template>

<script>
import { detailData } from '@/server/detail.js'; 
export default {
    data(){
        return{
            swiperImg:[],
            product_desc:'',
            product_name:'',
            market_price:''
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
        span{
            font-size: .8rem;
        }
    }
}
// goods_info.market_price//价格 
// class_parameters.list//关键参数
</style>

