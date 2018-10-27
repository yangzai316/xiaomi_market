<template>
<div> 
  <head-nav></head-nav>
  <index-item></index-item>
  <index-item-mobile v-show="false"></index-item-mobile>



</div>
</template>

<script>  
import headNav from '@/components/header/head.vue';
import indexItem from './components/index_item.vue';
import indexItemMobile from './components/inex_item_mobile.vue';
export default {
  name: 'index',
  components: { 
    headNav,
    indexItem,
    indexItemMobile
  },
  data(){
    return{ 
    }
  }
}
</script>
<style lang="less">  
</style>

