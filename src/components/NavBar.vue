<template>
<!-- Navbar -->
  <div>
    <div id="logo">
      <img src="https://i.postimg.cc/CxHXhbJw/graphics-card-removebg-preview.png" alt="" class="img-fluid">
    </div>
    <img src="https://i.postimg.cc/jj1c6hh6/logo-fan.png" alt="" class="img-fluid" id="logo2">
    <button
    class="btn btn-primary"
    type="button"
    data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasRight"
    aria-controls="offcanvasRight"
  >
    Navigation
  </button>
  </div>
  <!-- Cart -->
  <div v-if="admin">
        <button
          class="btn btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#cart"
          aria-controls="cart"
        >
          Cart
        </button>
        <Cart />
      </div>
  <!-- Off Canvas Nav -->
  <div
    class="offcanvas offcanvas-start"
    tabindex="-1"
    id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <ul>
        <li><router-link to="/">Home</router-link> |</li>
        <li><router-link to="/about">About</router-link> |</li>
        <li><router-link to="/products">Products</router-link> |</li>
        <li v-if="admin">
          <router-link to="/admin/products">Admin Products</router-link> |
        </li>
        <li v-if="admin">
          <router-link to="/admin/users">Admin Users</router-link> |
        </li>
        <li v-if="admin">
          <router-link to="/userProfile">User Profile</router-link> |
        </li>
        <li v-if="admin">
          <button @click="logout">Logout</button> |
        </li>
      </ul>
      
      <div v-if="userUser">
        <router-link to="/userProfile">User Profile</router-link> |
        <button @click="logout">Logout</button> |
        <button
          class="btn btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#TTHING"
          aria-controls="offcanvasRight"
        >
          Toggle right offcanvas
        </button>
      </div>
      <div v-if="userUser == false || admin == false">
        <router-link to="/register">Register</router-link> |
        <router-link to="/login">Login</router-link> |
      </div>
    </div>
  </div>
</template>
<script>
import Cart from "./Cart.vue";
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
    admin() {
      return this.$store.state.admin;
    },
    userUser() {
      return this.$store.state.userUser;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
  mounted() {
    this.$store.dispatch("admincheck");
  },
  components: { Cart },
};
</script>
<style scoped>
#logo{
  width: 100px;
  height: 100px;
  margin: 0 10px 0 0;
  position: relative;
}
#logo2{
  position: absolute;
  width: 42px;
  height: 42px;
  top: 26px;
  left: 52.6px;
  animation: rotation 3s infinite linear;
}
@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>
