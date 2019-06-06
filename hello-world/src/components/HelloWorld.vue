<template>
<transition name="slide-fade">
  <div class="hello">
    <h3 v-if="isSunny">The weather is sunny</h3>
    <h3 v-else>The weather is rainy</h3>
    <h3>List member in Sharp team</h3>

    <div v-for="name in names" :key="name.id" ><span :class="{hide: isHide}" >{{name.text}}</span></div>

    <p>{{number}}</p>
    <button v-on:click="count">Count click</button>
    <p v-show="isSunny==true">Vue sample is show</p>
    <p v-show="isSunny==false">Vue sample is hide</p>

    <toggle-button @change="change"/>
    <div v-if="isShow">
      <p v-for="item of foods" :key="item.food1">{{item}}</p>
    </div>
    <div v-else>
      <p v-for="p of person" :key="p">{{p}}</p>
    </div>
  </div>
</transition>
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
      isHide: false,
      number: 0,
      names: [
        { id: 1, text: "Phan Van Duc" },
        { id: 2, text: "Phan Van Huy" },
        { id: 3, text: "Phan Van Hai" }
      ],
      foods: {
        food1: "Do trang mieng",
        food2: "Do an man"
      },
      person: {
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
    change() {
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
.hide {
  display: none;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
