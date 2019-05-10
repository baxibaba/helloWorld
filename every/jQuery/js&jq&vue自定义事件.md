### jQuery 自定义事件

```js
//使用的trigger
使用bind进行dom 绑定

$("#id").bind('eventName',function(data){
    alert(....)
})
$("#id").click(() => {
  $("#id").trigger("eventName");
});
```

### 原生 js 自定义事件

```js
var obj = document.getElementById("obj");
//调用document对象的 createEvent 方法得到一个event的对象实例。
var event = document.createEvent("HTMLEvents");

// initEvent接受3个参数：
// 事件类型，是否冒泡，是否阻止浏览器的默认行为
event.initEvent("hello", true, true);
event.eventType = "message";

//触发document上绑定的自定义事件ondataavailable
obj.dispatchEvent(event);
```

### vue 自定义指令

```js

//父组件
<template>
<div>
    <div>{{sendData}}</div>
    <button @click="select('中国')" >{{sendData}}</button>
</div>
</template>
<script>
    export default {
        name:'trainCity',
        props:['sendData']
        data (){
            return :{

            }
        },
        methods:{
            select(val){
                this.$emit('showCityName',val)
            }
        }

    }

</script>
// 父组件
<template>
    <div>
    <train-city @showCityName:"updataCity" :sendData:"toCity" ></train-city>

    </div>

</template>
<script>
    export default {
        name:'index',
        components:{
            'trainCity'
        }
        data (){
            return:{
                toCity:'中国'
            }
        },
        methods:{
            updataCity(data){
                this.toCity=data.cityName
            }
        }
    }


</script>

```
