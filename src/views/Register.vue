<template>
<div id="bg">
  <h2>Lets get you Graphics Card</h2>
  <form @submit.prevent="registerUser">
    <input
      type="text"
      placeholder="Please enter Firstname "
      name="userFName"
      id="userFName"
      v-model="userFName"
      class="inputs my-2 p-1"
      required
    />
    <br>
    <input
      type="text"
      placeholder="Please enter Lastname "
      name="userLName"
      id="userLName"
      v-model="userLName"
      class="inputs my-2 p-1"
      required
    />
    <br>
    <input
      type="text"
      placeholder="Please enter email "
      name="email"
      id="email"
      v-model="email"
      class="inputs my-2 p-1"
      required
    />
    <br>
    <input
      type="password"
      placeholder="Please enter password"
      name="userPassword"
      id="userPassword"
      v-model="userPassword"
      class="inputs my-2 p-1"
      required
    />
    
    <center>
      <div style="border: 1px solid #efefef; height: 1px; width: 20%"></div>
    </center>
    <!-- <div v-if="clicked">
      <div v-if="user">Loged in</div>
      <div v-else>Wrong data</div>
    </div> -->
    <button id="resBtn" type="submit">Register</button>
  </form>
  <div v-if="msg">
    {{msg}}
  </div>
</div>
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
    computed: {
      msg() {
        return this.$store.state.msg;
      },
    },
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
<style scoped>
h2{
  padding: 30px 0 0 0;
  color: #efefef;
}
#bg{
  width: 100%;
  height: 61.6vh;
  background-image: url(https://i.postimg.cc/Fzp5LLtL/bg.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
form{
  padding: 30px 0 0 0;
}
.inputs{
  background: var(--background-main);
  border-radius: 10px;
  border: 2px solid  #5b42f3;
  color: #efefef;
}
#resBtn{
  margin: 10px 0;
  background-image: linear-gradient(144deg, #df40ff, #5b42f3 50%, #00ddeb);
  color: #efefef;
  padding: 5px;
  border-radius: 10px;
  transition: linear .6s;
}
#resBtn:hover{
  transform: scale(1.1);
}
</style>