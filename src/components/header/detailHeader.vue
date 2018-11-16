<template>
    <section class="header">
        <i class="iconfont icon-xiangzuojiantou" @click="bakcUrl"></i>
    </section> 
</template>

<script>
import { mapState } from 'vuex';
export default {
    data(){
        return{
            
        }
    },
    props: ['title'],
	computed:{
		...mapState('auth',[
			'prevUrl'
		])
	},
    methods:{
        bakcUrl(){
            if(this.prevUrl.includes('/login')){
                return this.$router.push('/');
            }
            this.$router.go(-1);
        }
    }
}; 
</script>

<style lang="less" scoped>
.header{ 
    background: #f2f2f2;
    width: .826667rem;
    height: .826667rem;
    line-height: .826667rem; 
    background: rgba(0,0,0,.6);
    text-align: center;
    position: fixed;
    top:10px; 
    left:10px;
    z-index: 9;
    border-radius: 50%;
    i{
        font-size: .533333rem; 
        text-align: center;
        color:#fff;
    } 
} 
</style>