<template>
    <ul>
        <li v-for="(item,index) in categoryList" :key="index">{{item.category_name}}</li>
    </ul>
</template>

<script>
import { mapState } from 'vuex';
export default {
    data(){
        return{
            
        }
    },
    computed:{
        ...mapState('category',[
            'categoryList'
        ])
    }
}; 
</script>

<style lang="less" scoped>
ul{
    background-color: #fefefe;
    width: 2.133333rem;
    box-sizing: border-box;
    border-right: 1px solid #efefef;
    position:fixed;
    top:1.333333rem;
    bottom: 1.386667rem;
    overflow-y: scroll;
    li{
        line-height:1.2rem;    
        font-size: .34rem; 
        text-align: center;
        color:#3c3c3c;
    }
}
ul::-webkit-scrollbar{
    display: none;
}
</style>