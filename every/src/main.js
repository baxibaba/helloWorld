import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import FastClick from 'fastclick'
import router from './router'

Vue.config.productionTip = false

FastClick.attach(document.body)

Vue.use(VueRouter)
new Vue({
  // router,
  template: '<App/>',
  components: {
    App
  },

})