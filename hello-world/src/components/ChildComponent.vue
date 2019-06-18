<template>
  <div class="child-component">
    <h3>Child component</h3>
    <p>My name: {{msg}}</p>
    <button @click="resetName">Reset name</button>
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  },
  data() {
    return {
      mes: this.msg
    }
  },
  methods:{
    resetName(){
      this.$emit('nameReset', this.mes);
    }
  }
};
</script>

<style>
</style>
