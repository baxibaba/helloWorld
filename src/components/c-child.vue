<template>
    <div @click="$emit('close')">
        <button>我是子组件</button>
        <div>
            哈哈
        </div>

        <hr>

        <child-child ref="child" :hello.sync= "hello" @haha="hahaFunc"></child-child>
        <slot>👌</slot>
        
    </div>
</template>
<script>
import ChildChild from './child-child';


export default {
    name:"c-child",
    components: {ChildChild},
    props:{
        show:{
            type:Boolean,
        }
    },
    data(){
        return{
            hello:false
        }
    },
      beforeCreate(){
    console.log("CCCbeforeCreate")
  },
  created(){
    console.log("CCCCreate")

  },
  beforeMount(){
    console.log("CCCCCbeforeMount")

  },
  mounted(){
    console.log("cCCCCCMount")
    console.log('child',this.$refs.child)


  },

beforeUpdate(){
     console.log("cCCCCCbeforeUpdate")
},
updated(){
     console.log("cCCCCCUpdate")

},

    methods: {
       hahaFunc(e){
           alert('组件里haha')
           console.log(e)
        this.$emit('hehe', {name: 'isyecao'});
        // this.$emit('update:show', false);

       }
    }

}
</script>

