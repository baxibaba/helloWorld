// 路由页面地址

export default ({
    path: '/',
    name: '首页',
    component: (resolve) => {
        require(['../src/view/index.vue'], resolve)
    }
})