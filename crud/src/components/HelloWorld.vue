<template>
  <div class="hello container">
    <h1>{{ msg }}</h1>
    <div class="search-comp">
      <input type="text" v-model="username" :placeholder="phUser" class="form-control">
    </div>
    <div class="row">
      <div class="col-md-9 lst-user-comp">
        <list-user :users="filterUsers" @userRemove="users = $event" @editUser="users = $event"></list-user>
      </div>
      <div class="col-md-3">
        <create-user @saveUser="childSaveUser"></create-user>
      </div>
    </div>
  </div>
</template>

<script>
import ListUser from "./ListUser.vue";
import UserJson from "../data/user.json";
import CreateUser from "./CreateUser.vue";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  components: {
    ListUser,
    CreateUser
  },
  data() {
    return {
      username: "",
      phUser: "Search user",
      users: UserJson,
    };
  },
  computed: {
    filterUsers: function() {
      return this.users.filter(user => {
        return user.fullName.toLowerCase().indexOf(this.username.toLowerCase()) > -1;
      });
    }
  },
  methods:{
    childSaveUser(user){
      this.users.push(user);
    },
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
.search-comp{
  padding-bottom: 30px;
}
</style>
