<template>
  <div class="container">

    <div class="header">
      <div class="userinfo flex-container flex-align-center">
        <img src="../images/user.png" style="width:100px;height:100px" alt="头像">
        <div>{{name}}</div>

      </div>
    </div>

    <div class="content">
      <div class="box">
            <div class="before">
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                </ul>
            </div>
            <div class="back">
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                </ul>
            </div>
            <div class="top">
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                </ul>
            </div>
            <div class="bottom">
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                </ul>
            </div>
            <div class="left">
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                </ul>
            </div>
            <div class="right">
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="footer">
      <router-link to="/" style="text-decoration:none">
        <div>首页</div>
      </router-link>

      <router-link to="/About" style="text-decoration:none">
        <div>我的</div>
      </router-link>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  data() {
    return {
      name: "八喜"
    };
  }
};
</script>

<style lang="less" scoped>
.container {
  background: rgb(234, 233, 233);
  height: 100vh;
  .userinfo {
    padding-top: 10px;
    padding-left: 10px;
    font-size: 18px;
    div {
      padding-left: 10px;
    }
  }
  .footer {
    height: 34px;
    line-height: 34px;
    width: 100%;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;

    div {
      flex: 1;
      background: lightgreen;
      border-radius: 20px;
      width: 180px;
      color: white;
      font-weight: 500;
    }
  }
  .content {
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    .box {
      width: 300px;
      height: 300px;
      margin: 100px auto;
      position: relative;
      font-size: 50px;
      // transform-style:presserve-3d进行3d效果
      transform-style: preserve-3d;
      //  动画函数名 |动画时间| 渐变类型线性或者径向渐变|
      animation: rotate 10s linear infinite alternate;
    }

    .box > div {
      width: 300px;
      height: 300px;
      position: absolute;
    }
    .right {
      background-color: transparent;
      transform: rotateY(90deg) translateZ(150px);
    }
    .left {
      background-color: transparent;
      transform: rotateY(-90deg) translateZ(150px);
    }

    .top {
      background-color: transparent;
      transform: rotateX(90deg) translateZ(150px);
    }

    .bottom {
      background-color: transparent;
      transform: rotateX(-90deg) translateZ(150px);
    }

    .before {
      background-color: transparent;
      transform: translateZ(150px);
    }

    .back {
      background-color: transparent;
      transform: translateZ(-150px);
    }

    li {
      float: left;
      width: 90px;
      height: 90px;
      border-radius: 20px;
      margin: 5px;
      text-align: center;
      line-height: 90px;
    }

    .before li {
      background-color: green;
    }
    .back li {
      background-color: chartreuse;
    }

    .top li {
      background-color: purple;
    }

    .bottom li {
      background-color: cornflowerblue;
    }

    .left li {
      background-color: darkorange;
    }

    .right li {
      background-color: #37ffc7;
    }

    .box:hover {
      animation-play-state: paused;
    }

    @keyframes rotate {
      0% {
        transform: rotateY(0deg) rotateX(0deg) rotateZ(0deg);
      }

      20% {
        transform: rotateY(30deg) rotateX(40deg) rotateZ(20deg);
      }

      40% {
        transform: rotateY(-60deg) rotateX(-40deg) rotateZ(-20deg);
      }

      60% {
        transform: rotateY(145deg) rotateX(80deg) rotateZ(10deg);
      }

      80% {
        transform: rotateY(90deg) rotateX(60deg) rotateZ(-20deg);
      }

      100% {
        transform: rotateY(135deg) rotateX(-45deg) rotateZ(30deg);
      }
    }
  }
}
</style>
