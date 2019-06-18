<template>
  <dir class="parent-component">
    <h1>Demo component</h1>
    <p>My name: {{name}}</p>
    <button @click="changeName()">Change my name</button>
    <child-component :msg="name" @nameReset="name = $event"/>
  </dir>
</template>

<script>
import ChildComponent from "./ChildComponent.vue";
export default {
  components: {
    ChildComponent
  },
  data() {
    return {
      alias: "Alex william",
      name: "Phan Van Duc"
    };
  },
  methods:{
    changeName(){
      this.name = this.alias;
    }
  }
};
</script>

<style>
</style>
