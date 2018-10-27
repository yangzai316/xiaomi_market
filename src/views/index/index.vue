<template>
  <div>
      <nav>
        <section class="logo"></section>
        <section class="search"></section>
        <section class=""><i class="iconfont icon-gerenzhongxin"></i></section>
      </nav>  
      <ul>
        <li v-for="(item,index) in tabs" :key="index">{{item.name}}</li>
      </ul>



  </div>
</template>

<script> 
import { tabs } from './option.js';
export default {
  name: 'index',
  components: { 
  },
  data(){
    return{
      tabs
    }
  },
  async mounted() { 
  },
}
</script>
<style lang="less" scoped>
nav{
  height: .666667rem;
  width:100%;
}
</style>

