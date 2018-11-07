<template>
<div class="footTabs">
    <router-link :to="item.toLink" tag="div" 
        :class="{item:true,active:item.active==fooTabIndex}" 
        v-for="(item,index) in footTabs" :key="index"
    > 
        <p><i :class="item.icon+' iconfont'"></i></p>
        <p>{{item.name}}</p> 

    </router-link>
</div>
</template>

<script>  
import { footTabs } from './option.js';
export default {
  components: { 
  },
  data(){
    return{ 
        footTabs,
        fooTabIndex:''
    }
  },
  mounted() {
      this.fooTabIndex = this.$route.name;
  },    
  computed:{  
  },
  methods:{
  },
}
</script>
<style lang="less" scoped>
.footTabs{
    height: 1.386667rem;
    color: #999;;
    width: 10rem;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    box-shadow: 0 3px 14px 2px rgba(0,0,0,.12);
    background-color:#fff;
    .item{
        width: 25%;
        text-align: center;
        font-size: .32rem;
        padding-top: .133333rem;
        .iconfont{
            font-size: .64rem;
        }
        p:nth-child(1){
            margin-bottom: .08rem;
        }
    }
    .active{
        color: #ff6700;
    }

}
</style>

