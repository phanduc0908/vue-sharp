<template>
  <div class="hello">
    <h1>Reating in Vue</h1>
    <div class="rate">
      <rate-star 
        v-model="rating" 
        v-bind:star-size="90"
        v-bind:max-rating="5"
        >
      </rate-star>
    </div>
    <h6>{{rating}}</h6>
  </div>
</template>

<script>
import RatingStar from "vue-star-rating";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  components: {
    "rate-star": RatingStar
  },
  data() {
    return {
      rating: 3
    };
  },
  methods: {
    showRate() {
      console.log(this.rating);
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
.rate {
  display: block !important;
}
</style>
