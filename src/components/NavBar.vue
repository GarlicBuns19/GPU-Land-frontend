<template>
  <!-- Navbar -->
  <div>
    <button
      class="btn btn-primary"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasRight"
      aria-controls="offcanvasRight"
      id="navBtn"
    >
      Navigation
      <span v-if="this.$store.state.user != null"
        >for {{ this.$store.state.user.userFName }}</span
      >
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
      <span> R {{ total }}</span>
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
        <!-- <li v-if="this.$store.state.user.userRole == 'user'"><button @click="logout">Logout</button> |</li> -->
        <!-- <li v-if="this.$store.state.admin"><button @click="logout">Logout</button> |</li> -->
        <li v-if="this.$store.state.user != null">
          <!-- <span v-if="this.$store.state.user.userRole == user"> -->
          <button @click="logout">Logout</button>
          <!-- </span> -->
        </li>
      </ul>
      <div v-if="userUser">
        <router-link to="/userProfile">User Profile</router-link> |
        <!-- <button @click="logout">Logout</button> | -->
      </div>
      <div v-if="this.$store.state.user == null">
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
    total() {
      let prices = this.$store.state.cart;
      if (prices != null) {
        let sum = prices.reduce((x, cart) => {
          return x + cart.price;
        }, 0);
        return parseInt(sum);
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
#navBtn{
  background-image: linear-gradient(144deg, #df40ff, #5b42f3 50%, #00ddeb);
  color: #efefef;
  transition: linear .6s;
}
#navBtn:hover{
  transform: scale(1.07);
}
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
