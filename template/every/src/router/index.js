import VueRouter from 'vue-router'
import Vue from '../node_modules/vue';
import Routes from './routes'

Vue.use(VueRouter)

let routes = []
routes = routes.concat(Routes)
const router = new VueRouter({
    mode: 'hash',
    base: history,
    routes

})

export default {
    router
}