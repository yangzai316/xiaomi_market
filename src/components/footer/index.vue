<template>
<div class="footTabs">
    <div :class="{item:true,active:item.active==fooTabIndex}" 
        v-for="(item,index) in footTabs" :key="index"
        @click="changeTab(item.active,item.toLink)"
    >
        <p><i :class="item.icon+' iconfont'"></i></p>
        <p>{{item.name}}</p>
    </div>
</div>
</template>

<script>  
import { footTabs } from './option.js';
import { mapActions,mapState } from 'vuex';
export default {
  name: 'footTabs',
  components: { 
  },
  data(){
    return{ 
        footTabs,
    }
  },
  computed:{ 
      ...mapState('indexItem',[
          'fooTabIndex'
      ])
  },
  methods:{
    ...mapActions('indexItem',[
        'changeFooTabIndex'
    ]),
    changeTab(index,toLink){
        this.$router.push(toLink);
        this.changeFooTabIndex(index);
    }
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

