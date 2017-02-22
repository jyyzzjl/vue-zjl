import about from '../views/about.vue' //引入需要的页面
import index from '../views/index.vue'
import Vue from 'vue'
import VueRouter from 'vue-router' //引入vue-router

Vue.use(VueRouter);//必须先定义此处，才能new VueRouter
export default new VueRouter({
    mode: 'history', //开启历史模式，页面跳转采用http://xxxx/xxx模式，否则采用http://xxxx/#/xxx
    routes: [
        {
            name:'about',
            path: '/about', 
            component:about 
        },
        {
            name:'index',
            path: '/index',
            component: index
        }
    ]
});