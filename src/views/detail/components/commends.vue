<template>
<div>
    <p class="title">为你推荐</p>
	<ul class="list">
		<li v-for="(item,index) in listData" :key="index">
			<div class="imgbox">
				<img :src="item.image_url" alt="">
			</div>
			<div class="txtbox">
				<p>{{item.name}}</p>
				<p><span>￥{{item.price}}</span><span v-if="item.market_price!=item.price">￥{{item.market_price}}</span></p>
			</div>
		</li>
	</ul> 
</div>
</template>

<script>
import { commendsData } from '@/server/detail.js'; 
export default {
    data(){
        return{
            listData:[]
        }
    },
	async mounted() {
		const list_data = await commendsData();
		this.listData = list_data.data.recommend_list;
	},
}; 
</script>

<style lang="less" scoped>
.title{
    font-size: .64rem;
    line-height: 1.6rem;
    padding-left:.426667rem;
}
.list{
    font-size: 0;
    padding:0 .213333rem;
    box-sizing: border-box;
    padding-bottom: 1.5rem;
	li{
		display: inline-block;
		font-size: .373333rem;
		width: 50%;
		background-color: #fff;
        padding:0 .213333rem;
        box-sizing: border-box;
		.imgbox{
            height: 4.293333rem;
            border-radius: 5px;
			overflow: hidden;
			img{
                display: block;
                width: 100%;
			}
		}
		.txtbox{
			padding: .266667rem .373333rem;	
			p{
				width:100%;
				overflow:hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
                box-sizing: border-box;
                line-height:.533333rem;
			}
			p:nth-of-type(1){
				font-size: .373333rem;
				color: #000000de;
			}
			p:nth-of-type(2){
				font-size: .373333rem;
				color: #ff6700;
				span:nth-child(2){
					color:#ccc;
					text-decoration:line-through;
				}
			}
		}
	}
}
</style>