import Vue from 'vue'
import Vuex from 'vuex'//引入vuex文件
import index from './modules/index.js'

Vue.use(Vuex)//vue与vuex绑定
Vue.config.debug = true

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    state: {//全局变量组件
        count: 0
    },
    modules: {
        index//引入模块
    },
    //actions:actions,
    strict: debug,
})
