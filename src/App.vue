<template>
    <NavBar/>
  <router-view/>
    <Footer/>
</template>
<script>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'

export default {
  components : {
    NavBar,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: var(--background-main);
  overflow-x: hidden;
}
*{
  margin: 0;
  padding: 0;
}
:root {
  --eletric-blue : #59cbe8;
  --background-main : #1f1f1f;
}
/* nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
@media screen and (max-width:350px) {
  nav{
    display: none;
  }
} */
</style>
