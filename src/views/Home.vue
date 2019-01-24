<template>

  <div class="my">
    <h1>八喜</h1>

    <header>
      <img @click="pausedOrRunning" src="../images/user.png" :style="{width:100+'px',height:100+'px',animationPlayState:state?'running':'paused'}" alt="">
   
      <audio id="my-audio"  type="audio/mpeg" controlsList="nodownload" controls src="http://other.web.rd01.sycdn.kuwo.cn/resource/n3/7/75/2942928835.mp3" autoplay="autoplay"></audio>
    </header>

    <div class="footer">
      <router-link to="/" style="text-decoration:none" class="selected">
        <div>首页</div>
      </router-link>

      <router-link to="/About" style="text-decoration:none">
        <div>我的</div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      state: true //动画的选择状态
    };
  },
  methods: {
    // 动画暂停或者运行
    pausedOrRunning() {
      let state = this.state;
      let myaudio = this.myaudio;
      if (state) {
        myaudio.pause();
        this.state = false;
      } else {
        this.state = true;
        myaudio.play();
      }
    }
  },
  mounted() {
    let myaudio = document.getElementById("my-audio");
    this.myaudio = myaudio;
    let reg = /^1[3456789]\d{9}$/;
    console.log(reg.test(13453434343));
  }
};
</script>

<style lang="less" scoped>
header img {
  display: inline-block;
  background: red;
  animation: circle 6s linear infinite;
  animation-play-state: running;
  box-shadow: 1px 1px 10px 10px red;
}
@keyframes circle {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}
#my-audio {
  margin-top: 30px;
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
</style>
