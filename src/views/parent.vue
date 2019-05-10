<template>
    <div>
        <button @click="show=true" >我是父组件按钮</button>
        <hr>
        <hello v-show="show" :show.sync="show" @close="show=false" @hehe="heheFunc">
            <div @click="alert"> slot功能</div>

        </hello>

        
        <hr>
        <input type="text" v-model="message" placeholder="姓名" style="background:#eee;height:20px;width:200px">
        <p>{{message}}</p>

        <p class="header" style="white-space:pre-line;">{{message}}</p>
        <textarea v-model="message" placeholder="edit it"></textarea>
        <hr>
        <header>单选</header>
        <input type="radio" value="one" v-model="pick">
        <label for="one">one</label>
        <input type="radio" value="two" v-model="pick">
        <label for="two">two</label>
        <input type="radio" value="three" v-model="pick">
        <label for="three">three</label>
        <br>
        <span>{{pick}}</span>
        <hr>
        <header>多选</header>
        <input type="checkbox" value="a" v-model="checkedNames">
        <label for="a">a</label>
        <input type="checkbox" value="b" v-model="checkedNames">
        <label for="b">b</label>
        <input type="checkbox" value="c" v-model="checkedNames">
        <label for="c">c</label>
        <br>
        <span>{{checkedNames}}</span>
        <hr>
        <header>选择框</header>
        <select name="选择题" v-model="select">
            <option disabled value="">请选择</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>

        </select>
        <br>
        <span>{{select}}</span>
        <hr>

        <header>多选复选框</header>
        <select name="多项选择题" multiple style="background:lightgreen;heigth:20px;widht:300px;" v-model="selected">
            <!-- <option disabled  value="">请选择</option> -->
            <option>A</option>
            <option>B</option>
            <option>C</option>

        </select>
        <span>{{selected}}</span>
        <hr>
        <input type="checkbox" v-model="toggle">
        <span>{{toggle}}</span>
        <br>
        <input type="radio" v-model="ra" value="a">
        <span>{{ra}}</span>
        <br>
        <select v-model="selected">
            <option value="abc">ABC</option>
        </select>
        <span>{{selected}}</span>
    </div>
</template>

<script>
import hello from "../components/c-child";
import { constants } from 'fs';
export default {
  components: {
    hello
  },

  data() {
    return {
      show: false,
      message: "hello world",
      pick: "",
      checkedNames: [],
      select: "",
      selected: [],
      toggle: false,
      ra: null,
      selsect: "",
      hello:false
    };
  },
  beforeCreate(){
    console.log("beforeCreate")
  },
  created(){
    console.log("Create")

  },
  beforeMount(){
    console.log("beforeMount")

  },
  mounted(){
    console.log("Mount")
    console.log(this.$refs.child)

  },
  beforeUpdate(){
     console.log("beforeUpdate")
},
updated(){
     console.log("Update")

},

  methods: {
    closeFunc() {
      this.show = false;
    },
    heheFunc(e) {
      console.log(e);
      alert("123");
    },
    alert() {
      alert();
    }
  }
};
</script>
