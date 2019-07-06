<template>
  <div class="create-user">
    <button
      class="btn create"
      :class="{'btn-success': !this.isCreate , 'btn-danger': this.isCreate}"
      @click="changeCreate()"
    >{{textCreate}}</button>

    <transition name="fade">
      <div v-if="isCreate" class="form-create">
        <div class="header">Add User</div>
        <div class="content">
          <div class="form-group">
            <input type="text" v-model="name" placeholder="Username" class="form-control">
          </div>
          <div class="form-group">
            <input type="text" v-model="phone" placeholder="Phone number" class="form-control">
          </div>
          <div class="form-group">
            <select class="form-control" v-model="role">
              <option>Admin</option>
              <option>Member</option>
            </select>
          </div>
          <div class="form-group">
            <button class="btn btn-primary btn-done" @click="SaveUser()">Done</button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      isCreate: false,
      name: '',
      phone: '',
      role: 'Admin',
    };
  },
  computed: {
    textCreate() {
      if (this.isCreate) {
        return "Close";
      } else {
        return "Create";
      }
    }
  },
  methods: {
    changeCreate() {
      this.isCreate = !this.isCreate;
    },
    SaveUser() {
      const userModel = {
        fullName: this.name,
        phoneNumber: this.phone,
        role: this.role
      };
      this.$emit('saveUser',userModel);
    }
  }
};
</script>

<style scoped>
.create,
.btn-done {
  width: 100%;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.form-create {
  padding-top: 10px;
}
.header {
  background-color: #fbeddc;
  border: 1px solid #ece5d7;
  padding: 6px;
}
.content {
  padding: 18px;
}
.content {
  border: 1px solid #ece5d7;
}
</style>

