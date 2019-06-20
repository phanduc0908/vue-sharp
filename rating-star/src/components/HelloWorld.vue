<template>
  <div class="hello">
    <h1>Rating in Vue</h1>
    <div class="rate">
      <div @mouseleave="showRate">
        <rate-star
          :star-size="50"
          :max-rating="5"
          :show-rating="false"
          :round-start-rating="false"
          @current-rating="showRate"
        ></rate-star>
      </div>
    </div>
    <span
      class="status"
      v-if="this.rating > 0"
      :class="{aqua: this.rating === 1, antiquewhite: this.rating === 2, 
        azure: this.rating === 3, burlywood: this.rating === 4, 
        cadetblue: this.rating === 5}"
    >{{name}}</span>
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
      rating: 0,
      name: ""
    };
  },
  methods: {
    showRate(rating) {
      this.rating = rating;
      if (rating === 1) 
        this.name = "Very Bad";
      else if (rating === 2) 
        this.name = "Bad";
      else if (rating === 3)
        this.name = "Not bad";
      else if (rating === 4)
         this.name = "Good";
      else if (rating === 5) 
        this.name = "Very good";
      else this.name = "";
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
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.status {
  position: absolute;
  right: 37%;
  border-radius: 10px;
  padding: 10px;
}
.aqua {
  background-color: aqua;
}
.antiquewhite {
  background-color: antiquewhite;
}
.azure {
  background-color: azure;
}
.burlywood {
  background-color: burlywood;
}
.cadetblue {
  background-color: cadetblue;
}
</style>
