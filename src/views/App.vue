<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Utils/Footer.vue";

export default {
  components: {
    NavBar,
    Footer,
  },
};
</script>

<template>
  <div>
    <NavBar />
    <router-view></router-view>
     <Footer />
  </div>
</template>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  display: flex;
  flex-direction: column;
  padding-bottom:300px;
}
#NavBar {
  background-color: #2a574c;
}
</style>
