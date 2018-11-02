<template>
<div class="category">
    <category-head></category-head>
    <category-main></category-main>
	<foot-tab></foot-tab> 
</div>
</template>

<script>
// import { categoryData } from '@/server/category.js';
// import { mapActions } from 'vuex';
import categoryHead from '@/components/header/category.vue';
import footTab from '@/components/footer/index.vue'; 
import categoryMain from './components/categoryMain.vue';
export default {
    components:{
        categoryHead,
        footTab, 
        categoryMain
    },
    data(){
        return{
            
        }
    },
    async mounted(){
        // const _data = await categoryData();
        // this.getCategoryList(_data.data);
    },
    methods:{
        // ...mapActions('category',[
        //     'getCategoryList'
        // ])
    }
}; 
</script>

<style lang="less" scoped>
</style>
