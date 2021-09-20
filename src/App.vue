<template>
  <div id="app">
    <CartComponent/>
    <img alt="Vue logo" src="./assets/logo.png">
    <GoodsComponent msg="Welcome to Vue.js Store"/>
  </div>
</template>

<script>
import GoodsComponent from './components/GoodsComponent.vue'
import CartComponent from './components/CartComponent.vue'
export default {
  name: 'App',
  components: {
    GoodsComponent,
    CartComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
