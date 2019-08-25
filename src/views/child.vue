<template>
  <div class="child">
      <div v-for="(item,index) in propsData" :key="index">
        <div>{{propsData.name}}----{{index}}---{{item}}</div>
      </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      propsData: {
        children:{
            name:'lv1-1',
      },
        name:'lv1'
      }
      }
    }
  }
</script>
<style  scoped>
  .child{
    padding: 2px;
    height: 100vh;
    border:1px solid red;
  }
</style>

