<template>
  <div>
    <table class="table table-condensed">
      <thead>
        <tr>
          <th>No</th>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Email</th>
          <th>Task</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in users" :key="index">
          <td>{{index+1}}</td>
          <td v-if="indexEdit !== index">{{item.fullName}}</td>
          <td v-else>
            <input type="text" v-model="username = item.fullName" class="form-control">
          </td>

          <td v-if="indexEdit !== index">{{item.phoneNumber}}</td>
          <td v-else>
            <input type="text" v-model="phone = item.phoneNumber" class="form-control">
          </td>

          <td v-if="indexEdit !== index">{{item.role}}</td>
          <td v-else>
            <select class="form-control" v-model="role = item.role">
              <option>Admin</option>
              <option>Member</option>
            </select>
          </td>

          <td v-if="indexEdit !== index">
            <button class="btn btn-warning" @click="change(index)">Edit</button>
            <button
              class="btn btn-danger"
              v-if="indexEdit !== index"
              @click="removeUser(index)"
            >Delete</button>
          </td>
          <td v-else>
            <button class="btn btn-success" @click="saveUser(index)">Save</button>
            <button class="btn btn-primary" @click="indexEdit = -1">Cancel</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    users: Array
  },
  data() {
    return {
      isEdit: false,
      indexEdit: -1,
      username: '',
      phone: '',
      role: ''
    };
  },
  methods: {
    change(index) {
      this.indexEdit = index;
    },
    removeUser(index) {
      this.users.splice(index, 1);
      this.$emit("userRemove", this.users);
    },
    saveUser(index) {
      this.users.forEach((el, i) => {
        if(i === index)
          this.users[i]={
            fullName: this.username,
            phoneNumber: this.phone,
            role: this.role
          }
      });
      this.$emit('editUser', this.users);
      this.indexEdit = -1;
    }
  }
};
</script>

<style>
</style>
