<template>
<div class="box">
    <ul>
        <router-link tag="li" to="/">
            <p><i class="iconfont icon-shouye"></i></p>
            <p>首页</p>
        </router-link>
        <router-link tag="li" to="/car">
            <p><i class="iconfont icon-gouwuche"></i></p>
            <p>购物车</p>
        </router-link>
        <li @click="incar">加入购物车</li>
    </ul>
</div>
</template>

<script>
export default {
    methods:{
        incar(){
            this.$emit('incar');
        }
    }
}; 
</script>

<style lang="less" scoped>
.box{
    background-color:#fff; 
    border: 1px solid #e5e5e5;  
    width: 9.546667rem;
    height:1.44rem;
    box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px rgba(0,0,0,.14), 0 1px 10px rgba(0,0,0,.12);
    position: fixed;
    bottom: .266667rem;
    left: 50%;
    transform: translateX(-50%);
    padding-top: 10px;
    box-sizing: border-box;
    border-radius: 5px;
    li{
        text-align: center;
        width: .96rem;
        margin-left: .693333rem;
        float: left;
        p:first-child{
            margin-bottom: .053333rem;
            i{
                font-size: .533333rem;
            }
        }
        p:last-child{
            font-size: .32rem;
        }
    }
    li:last-child{
        width: 3.253333rem;
        line-height: .88rem;
        text-align: center;
        border-radius: 0.44rem;
        background-color: #ff6700;
        color:#fff;
        float: right;
        margin-right: .693333rem;
    }
}
</style>