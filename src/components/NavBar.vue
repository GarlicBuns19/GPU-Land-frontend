<template>
  <!-- Navbar -->
  <div>
    <div id="navCart">
      <button
        class="btn btn-primary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
        id="navBtn"
      >
        Navigation
        <!-- <span v-if="this.$store.state.user != null"
        >for {{ this.$store.state.user.userFName }}</span
      > -->
      </button>
      <!-- Cart -->
      <button
        v-if="this.$store.state.user != null"
        class="btn btn-primary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#cart"
        aria-controls="cart"
        id="cartBtn"
        @click="this.$store.dispatch('getCart', user.user_id)"
      >
        <i class="bi bi-cart3">{{ num }}</i>
      </button>
    </div>
    <Cart />
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
  <!-- Off Canvas Nav -->
  <div
    class="offcanvas offcanvas-start nav"
    tabindex="-1"
    id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasRightLabel">
        <ul id="navOff">
          <li id="logoli">
            <img
              src="https://i.postimg.cc/fWGTjSPh/graphics-card-removebg-preview-1-removebg-preview.png"
              alt=""
              class="img-fluid"
              id="logo1li"
            />
            <img
              src="https://i.postimg.cc/jj1c6hh6/logo-fan.png"
              alt=""
              class="img-fluid"
              id="logo2li"
            />
          </li>
          <li><span>GPU Land</span></li>
        </ul>
      </h5>
      <div v-if="this.$store.state.user != null">
        <img :src="this.$store.state.user.userImg" alt="userImg" id="userImg" />
      </div>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <center>
      <div style="border: 3px solid #efefef; height: 1px; width: 100%"></div>
    </center>
    <div class="offcanvas-body">
      <ul>
        <li data-bs-dismiss="offcanvas">
          <router-link class="routerLink" to="/"><h3>Home</h3></router-link>
        </li>
        <li data-bs-dismiss="offcanvas">
          <router-link class="routerLink" to="/about"
            ><h3>About</h3></router-link
          >
        </li>
        <li data-bs-dismiss="offcanvas">
          <router-link class="routerLink" to="/products"
            ><h3>Graphic Cards</h3></router-link
          >
        </li>
        <li v-if="this.$store.state.user != null" data-bs-dismiss="offcanvas">
          <router-link class="routerLink" to="/admin/products" v-if="this.$store.state.user.userRole == 'admin'"
            ><h3>Admin Products</h3></router-link
          >
        </li>
        <li v-if="this.$store.state.user != null" data-bs-dismiss="offcanvas">
          <router-link class="routerLink" to="/admin/users" v-if="this.$store.state.user.userRole == 'admin'"
            ><h3>Admin Users</h3></router-link
          >
        </li>
        <li v-if="this.$store.state.user != null" data-bs-dismiss="offcanvas">
          <router-link class="routerLink" to="/userProfile"
            ><h3>User Profile</h3></router-link
          >
        </li>
        <li data-bs-dismiss="offcanvas">
          <router-link class="routerLink" to="/contact"
            ><h3>Contact Us</h3></router-link
          >
        </li>
        <li v-if="this.$store.state.user != null">
          <button @click="logout" id="logout">Logout</button>
        </li>
        <li v-if="this.$store.state.user == null">
          <button class="ResLog" data-bs-dismiss="offcanvas">
            <router-link class="routerLink" to="/register"
              ><h3>Register</h3></router-link
            >
          </button>
        </li>
        <li v-if="this.$store.state.user == null">
          <button class="ResLog" data-bs-dismiss="offcanvas">
            <router-link class="routerLink" to="/login"
              ><h3>Login</h3></router-link
            >
          </button>
        </li>
      </ul>
      <ul></ul>
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
  components: { Cart },
};
</script>
<style scoped>
#navCart {
  display: flex;
  justify-content: space-around;
}
.routerLink:hover {
  animation: hoverLink 2s infinite;
}
.routerLink:active {
  animation: hoverLink 2s infinite;
}
@keyframes hoverLink {
  /* 0%  { color: #efefef; } */
  13.3% {
    color: #df40ff;
  }
  33.6% {
    color: #5b42f3;
  }
  54% {
    color: #00ddeb;
  }
}
#offcanvasRight {
  background: rgba(0 0 0 / 91%);
  color: #efefef;
}
.offcanvas-header {
  background: var(--background-main);
  height: 158.3px;
}
.offcanvas-body {
  background: var(--background-main);
}
#navBtn {
  background-image: linear-gradient(144deg, #df40ff, #5b42f3 50%, #00ddeb);
  color: #efefef;
  transition: linear 0.6s;
}
#navBtn:hover {
  transform: scale(1.07);
}
#userImg {
  object-fit: cover;
  aspect-ratio: 1;
  width: 100px;
  height: 100px;
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
nav {
  background-color: rgba(0, 0, 0, 0.44) !important;
}
ul {
  list-style: none;
}
.routerLink {
  text-decoration: none;
  color: #efefef;
}
.ResLog {
  background-image: linear-gradient(144deg, #df40ff, #5b42f3 50%, #00ddeb);
  margin: 10px 0 0 0;
  padding: 1px 3px;
  border-radius: 10px;
}
#logout {
  margin: 10px 0 0 0;
  background-image: linear-gradient(144deg, #df40ff, #5b42f3 50%, #00ddeb);
  color: #efefef;
  padding: 5px;
  border-radius: 10px;
  transition: all .6s ease-in-out;
}
#logout:hover{
  transform: scale(1.2);
}
#navOff li {
  display: inline;
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
#logoli {
  position: relative;
}
#logo1li {
  width: 100px;
  height: 100px;
}
#logo2li {
  position: absolute;
  width: 40px;
  height: 40px;
  top: -9px;
  left: 54.2%;
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
#cartBtn {
  margin: 0 10px;
  background-image: linear-gradient(144deg, #df40ff, #5b42f3 50%, #00ddeb);
  color: #efefef;
  /* padding: 5px; */
  border-radius: 10px;
  transition: linear 0.6s;
}
#cartBtn:hover {
  transform: scale(1.1);
}
</style>
