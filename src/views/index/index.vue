<template>
<div> 
	<head-nav></head-nav>
	<transition-group tag="div" :name="swipeName" class="indexbox">
		<index-item v-show="activeIndex==1" :key="1"></index-item>
		<index-item-mobile v-show="activeIndex==2" :key="2"></index-item-mobile>
		<index-item-intelligent v-show="activeIndex==3" :key="3"></index-item-intelligent>
		<index-item-intelligent v-show="activeIndex==4" :key="4"></index-item-intelligent>
	</transition-group>
	<foot-tab></foot-tab>
</div>
</template>

<script> 
import { mapState,mapActions } from 'vuex';
import headNav from '@/components/header/index.vue';
import footTab from '@/components/footer/index.vue';
import indexItem from './components/index_item.vue';
import indexItemMobile from './components/inex_item_mobile.vue';
import indexItemIntelligent from './components/index_item_intelligent.vue';
import { bannerListData } from '@/server/index.js'; 
export default {
	name: 'index',
	components: { 
		headNav,
		footTab,
		indexItem,
		indexItemMobile,
		indexItemIntelligent
	},
	data(){
		return{ 
		}
	},
	computed:{
		...mapState('indexItem',[
			'activeIndex',
			'swipeName'
		]),
	},
	async mounted() {
		const _data = await bannerListData();
		this.setBannerList(_data.data);
	},
	methods:{
		...mapActions('indexItem',[
			'setBannerList'
		]),
	}
}
</script>
<style>
	.indexbox{
		position: fixed;
		top:2.24rem;
		bottom: 0;
		width: 10rem;
		overflow-y: scroll;
		background-color: #F5f5f5;
	} 
	.indexbox::-webkit-scrollbar {
		display: none;
	}  
	.indexitem{
		position:absolute;
		width: 100%;
		margin-bottom: 1.386667rem;
	} 

	 .swipe-prev-enter-active, .swipe-prev-leave-active {
	 	transition: transform 0.35s;
	 }
	 .swipe-prev-enter{ 
	 	transform: translateX(-10rem);
	 }
	 .swipe-prev-leave-to { 
	 	transform: translateX(10rem);
	 }
	 .swipe-next-enter-active, .swipe-next-leave-active {
	 	transition: transform 0.35s;
	 }
	 .swipe-next-enter{ 
	 	transform: translateX(10rem);
	 }
	 .swipe-next-leave-to { 
	 	transform: translateX(-10rem);
	 }
</style>

