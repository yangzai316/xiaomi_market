<template> 
<div class="box" v-show="swiperShow" @click="closeMask">
	<mt-swipe :auto="0" class="swipe_box" :continuous="false" :showIndicators="false">
		<mt-swipe-item v-for="(item,index) in swiperList" :key="index" :style="{backgroundImage: 'url('+item+')'}"></mt-swipe-item>
	</mt-swipe>
</div>
</template>

<script>
import { mapState,mapMutations } from 'vuex';
export default {
    data(){
        return{
            
        }
    },
    computed:{
        ...mapState('details',[
            'swiperShow',
            'swiperList'
        ])
    },
    methods:{
        ...mapMutations('details',[
            'setSwiperList'
        ]),
        closeMask(){
            this.setSwiperList({
                key:false,
                list:[]
            })
        }
    }
}; 
</script>

<style lang="less" scoped>
.box{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #000;
}
.swipe_box{
  height:100%;
    div{
        background-size: contain;
        background-position: center center;
        background-repeat: no-repeat;
        background-color: #000;
    }
}
</style>