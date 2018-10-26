<template>
  <div>
      <nav>
        <section></section>
        <section class="search"></section>
        <section></section>
      </nav>
  </div>
</template>

<script>
import { index_data } from './../../server/index.js';
export default {
  name: 'index',
  components: { 
  },
  async mounted() {
    const data = await index_data({});
    console.log('data');
    console.log(data);
  },
}
</script>
<style lang="less" scoped>
.search{
  width: 7.2rem;
  height: .853333rem;
  border:1px solid #e5e5e5;
  border-radius: 2px;
}
</style>

