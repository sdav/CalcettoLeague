<template>
  <div id="app">
    <v-app id='inspire'>
      <router-view/>
    </v-app>
  </div>
</template>

<script>
///import Navigation from "@/components/Navigation.vue";

export default {
  name: "app",
  components: {},
  methods: {},
  computed: {}
};
</script>

<style lang="less">
/////@import "~bootstrap/dist/css/bootstrap.css";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/*
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
*/
</style>
