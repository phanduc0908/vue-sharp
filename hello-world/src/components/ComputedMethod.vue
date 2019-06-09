<template>
  <div class="container pt-2">
    <div class="row">
      <div class="col-lg-6">
        <button @click="a++, MTangA(), CTangA">
          Tang A
        </button>
      </div>
      <div class="col-lg-6">
        <button @click="b++, CTangB, MTangB()">
          Tăng B
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      a: 0,
      b: 0
    }
  },
  methods: {
    MTangA() {
      console.log(`M ` + this.a)
      return this.a
    },
    MTangB() {
      console.log(`M ` + this.b)
      return this.b
    }
  },
  computed: {
    CTangA() {
     console.log(`C ` + this.a)
      return this.a
    },
    CTangB() {
      console.log(`C ` + this.b)
      return this.b
    }
  }
}
</script>

<style scoped>

</style>
