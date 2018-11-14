<template>
<div class="category">
    <common-header title="分类"></common-header>
    <category-main></category-main>
	<foot-tab></foot-tab> 
</div>
</template>

<script>
// import { categoryData } from '@/server/category.js';
// import { mapActions } from 'vuex';
import commonHeader from '@/components/header/commonHeader.vue';
import footTab from '@/components/footer/index.vue'; 
import categoryMain from './components/categoryMain.vue';
export default {
    name:"category",
    components:{
        commonHeader,
        footTab, 
        categoryMain
    }
}; 
</script>

<style lang="less" scoped>
</style>
