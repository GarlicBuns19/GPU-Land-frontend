<template>
  <!-- Navbar -->
  <div>
    <button
      class="btn btn-primary"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasRight"
      aria-controls="offcanvasRight"
    >
      Navigation
    </button>
    <!-- Logo -->
    <div id="logo">
      <img
        src="https://i.postimg.cc/fWGTjSPh/graphics-card-removebg-preview-1-removebg-preview.png"
        alt=""
        class="img-fluid"
        id="logo1"
      />
      <img
        src="https://i.postimg.cc/jj1c6hh6/logo-fan.png"
        alt=""
        class="img-fluid"
        id="logo2"
      />
    </div>
  </div>
  <!-- Cart -->
  <div v-if="admin">
    <button
      class="btn btn-primary"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#cart"
      aria-controls="cart"
      @click="this.$store.dispatch('getCart', user.user_id)"
    >
      <i class="bi bi-cart3">{{ num }}</i>
      > Cart
    </button>
    <Cart />
  </div>
  <!-- Off Canvas Nav -->
  <div
    class="offcanvas offcanvas-start nav"
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
        <li v-if="admin"><button @click="logout">Logout</button> |</li>
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
    num: function () {
      let Cnum = this.$store.state.cart;
      if (Cnum === null || Cnum === undefined) {
        Cnum = 0;
        return Cnum;
      } else {
        // Cnum.length
        let i = Cnum.length;
        return i;
      }
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
nav {
  background-color: rgba(0, 0, 0, 0.44) !important;
}
#logo {
  position: relative;
}
#logo1 {
  width: 100px;
  height: 100px;
}
#logo2 {
  position: absolute;
  width: 40px;
  height: 40px;
  top: 27.5px;
  left: 50.2%;
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
