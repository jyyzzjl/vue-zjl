// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import router from './router/router'

import store from './vuex/store'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,//引入router配置
  store,
  template: '<App/>',
  components: { App }
})
