<template>
  <div class="container">
    <div class="row" v-if="user">
      <div class="card" style="width: 18rem">
          <img
            :src="user[0].userImg"
            alt="userImg"
            class="img-fluid card-img-top"
          />
        <div class="card-body">
          <h2>{{ user[0].userFName }} {{ user[0].userLName }}</h2>
          <h1>{{ user[0].userRole }}</h1>
        </div>
        <button
          id="btn"
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          :data-bs-target="'#updateSUser' + user.user_id"
        >
          Edit Your Profile
        </button>
        <button
          v-if="this.$store.state.user.userRole == 'user'"
          id="btn"
          @click="this.$store.dispatch('deleteSUser', user[0].user_id)"
        >
          Delete Account
        </button>
      </div>
      <edituser :user="user" />
    </div>
    <div v-else>You need to login</div>
  </div>
</template>
<script>
import edituser from "@/components/editSingleUserModal.vue";
export default {
  mounted() {
    this.$store.dispatch(
      "fetchSingleUser",
      JSON.parse(localStorage.getItem("user")).user_id
    );
  },
  computed: {
    user() {
      return this.$store.state.singleUser;
    },
  },
  components: {
    edituser,
  },
};
</script>
<style scoped>
.container {
  height: 61vh;
}
.row {
  margin: 18px 0 0 0;
  justify-content: center;
}
.card {
  background: rgba(0, 0, 0, 0.144);
  color: #efefef;
  border: 3px solid;
  animation: rgb 2s infinite;
  border-radius: 30px;
}
img {
  object-fit: cover;
  aspect-ratio: 1;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 10px auto 0 auto;
  padding: 10px;
  border: 5px solid;
  animation: rgb 2s infinite;
}
@keyframes rgb {
  /* 0%  { color: #efefef; } */
  13.3% {
    border: 5px solid #df40ff;
  }
  33.6% {
    border: 5px solid #5b42f3;
  }
  54% {
    border: 5px solid #00ddeb;
  }
}
#btn {
  margin: 10px;
  background-image: linear-gradient(144deg, #df40ff, #5b42f3 50%, #00ddeb);
  color: #efefef;
  padding: 5px;
  border-radius: 10px;
  transition: linear 0.6s;
}
#btn:hover {
  transform: scale(1.1);
}
</style>
