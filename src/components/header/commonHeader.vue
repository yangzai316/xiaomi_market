<template>
    <header>
        <section class="header">
            <i class="iconfont icon-xiangzuojiantou" @click="bakcUrl"></i>
            <span>{{title}}</span>
            <i class="iconfont icon-icon-"></i> 
        </section>
        <section class="block"></section>
    </header>
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
    font-size: .426667rem;
    background: #f2f2f2;
    height: 1.333333rem;
    line-height: 1.333333rem;
    text-align: center;
    position: fixed;
    top:0;
    width: 10rem;
    i{
        float: left;
        font-size: .533333rem;
        margin:0 .266667rem;
    }
    .icon-icon-{
        float: right;
        font-size: .746667rem;
    }
}
.block{
    width: 10rem;
    height:1.333333rem;
}
</style>