<template>  
    <div class="page-infinite-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
      <ul class="page-infinite-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="50">
        <li v-for="(item,index) in list" class="page-infinite-listitem" :key="index">{{ item }}</li>
      </ul> 
    </div> 
</template>

<style scoped>
.page-infinite-wrapper{
    position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
}
ul li{
    line-height: 50px;
}
</style>


<script>
import { InfiniteScroll } from 'mint-ui';
  export default {
    data() {
      return {
        list: [],
        loading: false,
        allLoaded: false,
        wrapperHeight: 0
      };
    },
    methods: {
      loadMore() {
        this.loading = true;
        console.log(123456);
      }
    },
    mounted() {
      this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
      for (let i = 1; i <= 20; i++) {
        this.list.push(i);
      }
    }
  };
</script>