<template>
  <div class="aios">
    <h1>Demo axios</h1>
    <div v-for="post in posts" :key="post.source.name">
      <div>{{post.title}}</div><br>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data(){
    return{
      posts:[],
      errors:[]
    }
  },
  created(){
    axios.get('https://newsapi.org/v2/everything?q=bitcoin&from=2019-06-24&sortBy=publishedAt&apiKey=21791de7bb0845a1bdc63d00e9be2d21')
      .then(response =>{
        this.posts = response.data.articles
      }).catch(error => {
        this.errors.push(error);
      })
  }
}
</script>

<style>

</style>
