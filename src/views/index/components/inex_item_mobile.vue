<template>
<div class="indexitem">  
  <mt-swipe :auto="0" class="swipe_box">
    <mt-swipe-item v-for="(item,index) in bannerList.item2" :key="index"><img :src="item.img" class="swipe_img"></mt-swipe-item>
  </mt-swipe>
  <p style="text-align:center;line-height:50px;">不重复</p>
</div>
</template>

<script> 
import { mapState,mapActions } from 'vuex';
export default {
  components: {  
  },
  data(){
    return{ 
    }
  },
	computed:{
		...mapState('indexItem',[
			'bannerList'
		]),
	}
}
</script>
<style lang="less" scoped> 
.swipe_box{
  height: 5rem !important;
}
.swipe_img{
    display: block;
    width:100%; 
}
</style>

