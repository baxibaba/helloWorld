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

<style>
  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
    height: 100px;
  }
  .el-tree-node {
    height: 100px;
    padding: 20px;
  }
  .el-input__inner{
    width: 50px;
  }
</style>