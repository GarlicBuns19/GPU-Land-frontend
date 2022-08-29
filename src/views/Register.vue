<template>
  <form @submit.prevent="registerUser">
    <input
      type="text"
      placeholder="Please enter Firstname "
      name="userFName"
      id="userFName"
      v-model="userFName"
    />
    <br />
    <input
      type="text"
      placeholder="Please enter Lastname "
      name="userLName"
      id="userLName"
      v-model="userLName"
    />
    <br />
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
      name="userPassword"
      id="userPassword"
      v-model="userPassword"
    />
    <br />
    <center>
      <div style="border: 1px solid black; height: 1px; width: 300px"></div>
    </center>
    <!-- <div v-if="clicked">
      <div v-if="user">Loged in</div>
      <div v-else>Wrong data</div>
    </div> -->
    <button class="btn form-control" type="submit">Register</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      userFName: "",
      userLName: "",
      email: "",
      userPassword: "",
      clicked: false,
    };
  },
  //   computed: {
  //     user() {
  //       return this.$store.state.user;
  //     },
  //   },
  methods: {
    registerUser() {
      const user = {
        userFName: this.userFName,
        userLName: this.userFName,
        email: this.email,
        userPassword: this.userPassword,
      };
      this.clicked = true;
      return this.$store.dispatch("register", user);
    },
  },
};
</script>