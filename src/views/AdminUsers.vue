<template>
  <div>
    <h1>Users</h1>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Last</th>
          <th>Img</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody v-if="allUsers">
        <tr v-for="user in allUsers" :key="user.user_id">
          <td>
            <h1>
              <span>{{ user.userFName }}</span>
            </h1>
          </td>
          <td>
            <h1>
              <span>{{ user.userLName }}</span>
            </h1>
          </td>
          <td>
            <img :src="user.userImg" alt="" />
          </td>
          <td>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              :data-bs-target="'#updateuser' + user.user_id"
            >
              Edit
            </button>
          </td>
          <td>
            <button @click="this.$store.dispatch('deleteUser', user.user_id)">
              Delete
            </button>
          </td>

          <editUserModal :user="user" />
        </tr>
      </tbody>
      <div v-else>No users</div>
    </table>
  </div>
</template>
<script>
import editUserModal from "../components/editUserModal.vue";

export default {
  mounted() {
    this.$store.dispatch("fetchUsers");
  },
  computed: {
    allUsers() {
      return this.$store.state.users;
    },
  },
  components: {
    editUserModal,
  },
};
</script>
<style scoped>
table,
th,
td {
  border: 2px solid;
}
table {
  background-image: linear-gradient(144deg, #df40ff, #5b42f3 50%, #00ddeb);
  margin: auto;
}
th {
  background: var(--background-main);
  color: white;
}
td span {
  color: white;
}
img {
  /* width: 200px; */
  height: 200px;
  scale: 0.9;
  object-fit: cover;
  border-radius: 10px;
  /* aspect-ratio: auto; */
}
</style>

