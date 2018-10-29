<template>
<div>  
  <mt-swipe :auto="0" class="swipe_box">
    <mt-swipe-item v-for="(item,index) in bannerList" :key="index"><img :src="item.img" class="swipe_img"></mt-swipe-item>
  </mt-swipe>
</div>
</template>

<script> 
import { bannerListData } from '@/server/index.js'; 
export default {
  name: 'index',
  components: {  
  },
  data(){
    return{
      bannerList:[]
    }
  },
  async mounted() { 
    const _data = await bannerListData();
    this.bannerList = _data.data.item2;
  },
}
</script>
<style lang="less"> 
.swipe_box{
  height: 5rem !important;
}
.swipe_img{
    display: block;
    width:100%; 
}
</style>

