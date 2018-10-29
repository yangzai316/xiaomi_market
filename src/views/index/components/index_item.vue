<template>
<div>  
  <mt-swipe :auto="0" class="swipe_box">
    <mt-swipe-item v-for="(item,index) in bannerList" :key="index"><img :src="item.img" class="swipe_img"></mt-swipe-item>
  </mt-swipe>
  <button @click="checkout(2)">点击{{activeIndex}}</button>
</div>
</template>

<script> 
import { mapState } from 'vuex'
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
  computed: {
    ...mapState('indexItem',[
      'activeIndex'
    ])
  },
  async mounted() { 
    console.log(this.activeIndex);
    const _data = await bannerListData();
    this.bannerList = _data.data.item1;
  },
  methods: {
    checkout (index) {
      this.$store.dispatch('indexItem/changeIndexItem', index)
    }
  }
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

