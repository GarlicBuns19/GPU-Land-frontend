<template>
  <div id="bg">
    <form @submit.prevent="login">
      <input
        type="text"
        placeholder="Please enter email "
        name="email"
        id="email"
        v-model="email"
        class="p-1 my-2 inputs"
        required
      />
      <br />
      <input
        type="password"
        placeholder="Please enter password"
        name="password"
        id="password"
        v-model="userPassword"
        class="p-1 my-2 inputs"
        required
      />
      <center>
        <div style="border: 1px solid #efefef; height: 1px; width: 20%"></div>
      </center>
      <div v-if="clicked">
        <div v-if="user">
          <h2>Loged in</h2>
        </div>
        <div v-else>
          <h2>Loading..</h2>
        </div>
      </div>
      <button type="submit" id="loginBtn">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      userPassword: "",
      clicked: false,
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
      this.clicked = true;
      return this.$store.dispatch("login", user);
    },
  },
};
</script>
<style scoped>
#bg {
  width: 100%;
  height: 61.6vh;
  background-image: url(https://i.postimg.cc/Fzp5LLtL/bg.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
h2{
  color: #efefef;
}
.inputs {
  background: var(--background-main);
  border-radius: 10px;
  border: 2px solid #5b42f3;
  color: #efefef;
}
#loginBtn {
  margin: 10px 0 0 0;
  background-image: linear-gradient(144deg, #df40ff, #5b42f3 50%, #00ddeb);
  color: #efefef;
  padding: 5px;
  border-radius: 10px;
  transition: linear 0.6s;
}
#loginBtn:hover {
  transform: scale(1.1);
}
</style>