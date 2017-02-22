<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
    <div>
        <router-link to="/index">index</router-link>
        <router-link to="/about">about</router-link>
    </div>
    <div>
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
import store from './vuex/store'
import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
    Hello
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
