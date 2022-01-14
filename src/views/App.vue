<script>
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'


export default {
  components: {
    NavBar, 
    Footer,
  }
}

</script>

<template><div>
<NavBar />

<router-view></router-view>
<footer class='footer'><Footer /></footer>
</div>
</template>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color:white;
  display: flex;
  flex-direction: column;
}
#NavBar {
  background-color: #2a574c;
}
</style>
