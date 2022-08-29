<template>
<form @submit.prevent="login">
      <input
        type="text"
        placeholder="Please enter email "
        name="email"
        id="email"
        v-model="email"
      />
      <br />
      <input
        type="password"
        placeholder="Please enter password"
        name="password"
        id="password"
        v-model="userPassword"
      />
      <br />
      <center>
      <div style="border: 1px solid black; height: 1px; width: 300px"></div>
    </center>
      <div v-if="clicked">
        <div v-if="user">
            Loged in
        </div>
        <div v-else>
            Wrong data
        </div>
      </div>
        <button class="btn form-control" type="submit">Login</button>
    </form>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      userPassword: "",
      clicked : false
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    login() {
      const user = {
        email: this.email,
        userPassword: this.userPassword,
      };
      this.clicked = true
      return this.$store.dispatch("login", user);
    },
  },
};
</script>