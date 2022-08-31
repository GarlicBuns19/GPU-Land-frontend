<template>
  <router-link to="/">Home</router-link> |
  <router-link to="/about">About</router-link> |
  <router-link to="/products">Products</router-link> |
  <div v-if="admin">
    <router-link to="/admin/products">Admin Products</router-link> |
    <router-link to="/admin/users">Admin Users</router-link> |
    <button @click="logout">Logout</button> |
    <router-link to="/userProfile">User Profile</router-link> |
    <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#cart" aria-controls="cart"> Toggle right offcanvas</button>
    <Cart />
  </div>
  <div v-if="userUser">
    <router-link to="/userProfile">User Profile</router-link> |
    <button @click="logout">Logout</button> |
    <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#TTHING" aria-controls="offcanvasRight">Toggle right offcanvas</button>
  </div>
  <div v-if="userUser == false || admin == false">
    <router-link to="/register">Register</router-link> |
    <router-link to="/login">Login</router-link> |
  </div>
</template>
<script>
import Cart from './Cart.vue';
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
    components: { Cart }
};
</script>
