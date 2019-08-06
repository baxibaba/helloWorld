<template>
  <div class="custom-tree-container">
  <div class="block">
    <p>使用 scoped slot</p>
    <el-tree
      :data="data"
      node-key=id
      default-expand-all
      :expand-on-click-node="false">
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <!-- <input>{{ node.label }}</input> -->
        <h6>属性code</h6>
        <el-input width="10" v-model="input" placeholder="请输入内容">{{ node.label}}</el-input>
        <h6>属性名</h6>
        <el-input width="10" v-model="input" placeholder="请输入内容">{{ node.label}}</el-input>
        <h6>属性值类型</h6>
        <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled">
        </el-option>
  </el-select>
        
        <span>
          <el-button
            type="text"
            size="mini"
            @click="() => append(data)">
            Append
          </el-button>
          <el-button
            type="text"
            size="mini"
            @click="() => remove(node, data)">
            Delete
          </el-button>
           <el-button
            type="text"
            size="mini"
            @click="() => insertAfter(node, data)">
            增加同级
          </el-button>
        </span>
      </span>
    </el-tree>
  </div>
</div>
</template>


<script>
  let id = 1000;

  export default {
    data() {
      // const data = [{
      //   id: 1,
      //   label: '一级 1',
      //   children: [{
      //     id: 4,
      //     label: '二级 1-1',
      //     children: [{
      //       id: 9,
      //       label: '三级 1-1-1'
      //     }, {
      //       id: 10,
      //       label: '三级 1-1-2'
      //     }]
      //   }]
      // }
      // {
      //   id: 2,
      //   label: '一级 2',
      //   children: [{
      //     id: 5,
      //     label: '二级 2-1'
      //   }, {
      //     id: 6,
      //     label: '二级 2-2'
      //   }]
      // }, {
      //   id: 3,
      //   label: '一级 3',
      //   children: [{
      //     id: 7,
      //     label: '二级 3-1'
      //   }, {
      //     id: 8,
      //     label: '二级 3-2'
      //   }]
      // }
      // ];
    const data=[
        {"label":"房间","code":"room_id","dataType":"INT","levelNum":1,"levelCode":"room_id","parentLevelCode":"0",
        id:2,"children":null},
        {"label":"类型","code":"type","dataType":"ARRAY","levelNum":1,"levelCode":"type","parentLevelCode":"0",
        id:3,"children":[
        {"label":"类型1","code":"type_1","dataType":"STRING","levelNum":2,"levelCode":"type.type_1","parentLevelCode":"type",
        id:4,"children":null}]},
        {"label":"城市名称","code":"city_name","dataType":"STRING","levelNum":2,"levelCode":"city.city_name","parentLevelCode":"city",
        id:8,"children":null},
        {"label":"房间ID列表","code":"room_id_list","dataType":"ARRAY","levelNum":1,"levelCode":"room_id_list","parentLevelCode":"0",
        id:9,"children":null}
        ];
      return {
        input:'',
        data: JSON.parse(JSON.stringify(data)),
        options: [{
          value: '选项1',
          label: 'String'
        }, {
          value: '选项2',
          label: 'int',
          disabled: true
        }, {
          value: '选项3',
          label: 'Array'
        }, {
          value: '选项4',
          label: 'Object'
        }, {
          value: '选项5',
          label: 'float'
        }],
        value: ''
      } 
    },

    methods: {
      append(data) {
        console.log("data",data)
        const newChild = { id: id++, label: 'testtest', children: [] };
        if (!data.children) {
          this.$set(data, 'children', []);
        }
        data.children.push(newChild);
      },

      remove(node, data) {
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex(d => d.id === data.id);
        children.splice(index, 1);
      },
      insertAfter(node,data){
        console.log("node",node)
         const parent = node.parent;
          const newChild = { id: id++, label: 'parent lv1', children: [] };
        
       this.data.push(newChild)
      },
      renderContent(h, { node, data, store }) {
        return (
          <span class="custom-tree-node">
            <span>{node.label}</span>
            <span>
              <el-button size="mini" type="text" on-click={ () => this.append(data) }>Append</el-button>
              <el-button size="mini" type="text" on-click={ () => this.remove(node, list) }>Delete</el-button>
            </span>
          </span>);
      }
    }
  };
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