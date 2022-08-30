<template>
<div>
  <h1>Users</h1>
<table>
    <thead>
    <tr>
      <th>Name</th>
      <th>Last</th>
    </tr>
    </thead>
    <tbody v-if="allUsers">
      <tr v-for="user in allUsers" :key="user.user_id">
        <td>
          <h1>{{user.userFName}}</h1>
        </td>
        <td>
          <h1>{{user.userLName}}</h1>
        </td>
      </tr>
    </tbody>
    <div v-else>No users</div>
  </table>
</div>
  
</template>
<script>

export default {
  mounted(){
    this.$store.dispatch('fetchUsers')
  },
  computed : {
    allUsers(){
      return this.$store.state.users
    }
  }
}
</script>
<style scoped>
table,
th,
td {
  border: 2px solid;
}
table {
  background: pink;
  margin: auto;
}
th {
  background: green;
}
tr:nth-child(even) {
  background: blue;
}
tr:nth-child(odd) {
  background: brown;
}
img{
  width: 200px;
  height: 200px;
}
</style>

