<template>
<div class="indexitem">  
	<mt-swipe :auto="0" class="swipe_box">
		<mt-swipe-item v-for="(item,index) in bannerList.item1" :key="index"><router-link tag="a" to="/detail"><img :src="item.img" class="swipe_img"></router-link></mt-swipe-item>
	</mt-swipe>
	<ul class="iconlist">
		<li>
			<img src="./../../../assets/img/a.webp" alt="">
		</li> 
		<li>
			<img src="./../../../assets/img/b.webp" alt="">
		</li> 
		<li>
			<img src="./../../../assets/img/c.webp" alt="">
		</li> 
		<li>
			<img src="./../../../assets/img/d.webp" alt="">
		</li> 
		<li>
			<img src="./../../../assets/img/g.webp" alt="">
		</li> 
	</ul>
	<section class="recommendImg one">
		<router-link tag="a" to="/detail"><img :src="recommendImg.img1" alt=""></router-link> 
	</section>
	<section class="recommendImg two"> 
		<router-link tag="a" to="/detail"><img :src="recommendImg.img2" alt=""></router-link> 
		<router-link tag="a" to="/detail"><img :src="recommendImg.img3" alt=""></router-link>  
	</section>
		<router-link tag="a" to="/detail"><img :src="recommendImg.img4" alt=""></router-link> 
		<router-link tag="a" to="/detail"><img :src="recommendImg.img5" alt=""></router-link>
	<ul class="list">
		<router-link v-for="(item,index) in listData" :key="index" tag="li" to="/detail">
			<div class="imgbox">
				<img :src="item.imgUrl" alt="">
			</div>
			<div class="txtbox">
				<p>{{item.name}}</p>
				<p>{{item.description}}</p>
				<p><span>￥{{item.price}}</span><span v-if="item.oldPrice">￥{{item.oldPrice}}</span></p>
			</div>
		</router-link>
	</ul> 
</div>
</template>

<script>  
import { mapState,mapActions } from 'vuex';
import { recommendListData,listData} from '@/server/index.js';
export default {
	components: {  
	},
	data(){
		return{ 
			recommendImg:{},
			listData:[],
		}
	},
	computed:{
		...mapState('indexItem',[
			'bannerList'
		]),
	},
	async mounted() {
		const _data = await recommendListData();
		this.recommendImg = _data.data;
		const list_data = await listData();
		this.listData = list_data.data;
	},
	methods:{ 
	}
}
</script>
<style lang="less" scoped>
img{
	display: block;
	width: 100%;
} 
.swipe_box{
  height: 5rem !important;
}
.swipe_img{
    display: block;
    width:100%; 
}
.iconlist{
	display: flex;
	justify-content:space-around; 
	margin-bottom: .266667rem;
	li{ 
		width: 20%; 
	}
}
.recommendImg{
	display: inline-block;
	width:50%; 
}
.one{
	box-sizing: border-box;
	border-right:1px solid #fff;
	margin-bottom: .266667rem;
}
.two{
	box-sizing: border-box;
	border-left:2px solid #fff;
	vertical-align: top;
	img:nth-child(1){
		box-sizing: border-box;
		border-bottom:4px solid #fff;		
	}
}
.list{
	font-size: 0;
	li{
		display: inline-block;
		font-size: .373333rem;
		width: 50%;
		background-color: #fff;
		.imgbox{
			height: 5rem;
			overflow: hidden;
			img{
				display: block;
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
			}
			p:nth-of-type(1){
				font-size: .373333rem;
				color: #000000de;
			}
			p:nth-of-type(2){
				font-size: .32rem;
				color: #0000008a;
				margin:.133333rem 0;
			}
			p:nth-of-type(3){
				font-size: .32rem;
				color: #ea625b;
				span:nth-child(2){
					color:#ccc;
					text-decoration:line-through;
				}
			}
		}
	}
}
</style>

