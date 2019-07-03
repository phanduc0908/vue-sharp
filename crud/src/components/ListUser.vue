<template>
  <div>
    <table class="table table-condensed">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
        <th>Task</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users" :key="user.fullName">
        <td>{{user.fullName}}</td>
        <td>{{user.phoneNumber}}</td>
        <td>{{user.role}}</td>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<script>
export default {
  props:{
    users: Array
  }
}
</script>

<style>

</style>
