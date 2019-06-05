<template>
  <div class="hello">
    <h3 v-if="isSunny">The weather is sunny</h3>
    <h3 v-else>The weather is rainy</h3>
    <h3>List member in Sharp team</h3>
    <p v-for="name in names" :key="name">{{name.text}}</p>
    <p>{{number}}</p>
    <button v-on:click="count">Count click</button>
    <p v-show="isSunny==true">Vue sample is show</p>
    <p v-show="isSunny==false">Vue sample is hide</p>

    <toggle-button @change="change"/>
    <div v-if="isShow">
      <p v-for="item of foods" :key="item">{{item}}</p>
    </div>
    <div v-else>
      <p v-for="item of person" :key="item">{{item}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      isSunny: true,
      isShow: true,
      number: 0,
      names: [
        { text: "Phan Van Duc" },
        { text: "Phan Van Huy" },
        { text: "Phan Van Hai" }
      ],
      foods:{
        food1: "Do trang mieng",
        food2: "Do an man"
      },
      person:{
        age: 23,
        name: "Alex John"
      }
    };
  },
  methods: {
    count() {
      this.number++;
      if (this.number == 10) {
        alert("HIHI");
      }
    },
    change(){
      this.isShow = !this.isShow;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
