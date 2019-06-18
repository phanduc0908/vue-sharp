<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/>
    <computed-mothods/> -->
    <demo-component/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import ComputedMothods from './components/ComputedMethod.vue'
import DemoComponent from './components/ParentComponent.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld,
    // ComputedMothods,
    DemoComponent
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
