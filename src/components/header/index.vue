<template>
<div>
  <div class="nav">
      <nav>
        <section class="logo"><i class="iconfont icon-xiaomi"></i></section>
        <section class="search"><i class="iconfont icon-icon-"></i><input type="text" placeholder="请输入搜索内容"></section>
        <section class="i"><i class="iconfont icon-gerenzhongxin"></i></section>
      </nav>  
      <section class="tabs">
        <p class="all" v-show="tabType">全部</p>
        <ul :class="{open:tabType}">
          <li :class="{active:item.active==activeIndex}" v-for="(item,index) in tabs" :key="index" @click="changeItem(item.active)">{{item.name}}</li>
        </ul> 
        <div class="allbtn" :class="[tabType?'allbtn_rotate':'']" @click="changeTabType"><i class="iconfont icon-xiangxiajiantou"></i></div>
      </section>
  </div> 

</div>
</template>

<script> 
import { mapState,mapActions } from 'vuex';
import { tabs } from './option.js';
export default {
  components: { 
  },
  data(){
    return{
      tabs,
      tabType:false
    }
  },
  computed:{
    ...mapState('indexItem',[
      'activeIndex',
      'swipeName'
    ]),
  },
  methods:{
    ...mapActions('indexItem',[
      'changeIndexItem',
      'setSwipeName'
    ]),
    changeTabType(){
      this.tabType = !this.tabType;
    },
    changeItem(index){
      this.tabType = false;
      const _Name = index > this.activeIndex ? 'swipe-next':'swipe-prev';
      this.setSwipeName(_Name);
      this.changeIndexItem(index);
    }
  },
}
</script>
<style lang="less" scoped>
.nav{
  position: fixed;
  top:0;
  z-index: 1;
  background-color: #f5f5f5;
  width: 10rem;
} 
nav{
  width:100%;
  display:flex; 
  justify-content:space-around;
  padding:.213333rem 0;
  .logo,.i{
    width:.826667rem;
    height:.88rem;
    padding-top: .08rem;
    .iconfont{
      font-size: .8rem;
    }
    .icon-xiaomi{
      color:#ff6b00;
    }
  }
  .search{
    width:7.2rem;
    height:.88rem;
    border:1px solid #e5e5e5;
    position: relative;
    .icon-icon-{
      position: absolute;
      left: .133333rem;
      font-size: .586667rem;
      top: .16rem;
    }
    input{
      width:100%;
      height: 100%;
      text-indent: .88rem;
    }
  }
}
.tabs{
  position: relative;
  font-size: .346667rem;
  color:#747474;
  .all{
    width: 2rem;
    margin:0 .25rem;
    line-height: 0.82rem;
  }
  ul{
    width: 9.066667rem;
    white-space: nowrap;
    overflow-x: auto; 
    height: .853333rem;
    transition: height .25s linear;
    li{
      margin:0 .25rem;
      display: inline-block;
      line-height: 0.82rem;
      border-bottom:2px #f5f5f5 solid;
      text-align:center;
    }
    .active{
      color:#ed5b00;
      border-bottom:2px #ed5b00 solid;
    }    
  }
  ul::-webkit-scrollbar {
    display: none;
  }
  .open{
    width: 100%; 
    white-space:normal; 
    padding-left:.32rem;
    height: 3.2rem;
    li{
      margin:0 .25rem .25rem 0;
      width: 2.106667rem;
      height: .773333rem;
      display: inline-block;
      line-height: .8rem;
      border:1px solid #e5e5e5;
      background-color: #fff;
      text-align:center;
      border-radius: 4px;
    }
    .active{
      border:1px #ff6700 solid; 
      background-color: #fde0d5;
      color: #ff6700;
    }    
  }
  .allbtn{
    position: absolute;
    right: 0;
    width: .933333rem; 
    text-align:center;
    top:.2rem;
    color: #c3c3c3;
    transition: transform .25s linear;
  }
  .allbtn_rotate{
      transform: rotate(180deg); 
  }
}

 
 
</style>

