<template>
  <div id="app">
    <homepage/>
  </div>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.min.css';
import Homepage from './containers/Homepage.vue';

export default {
  name: 'app',
  components: {
    Homepage,
  },
};
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Josefin+Sans:300,400');

  body {
    margin: 0;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: 'Josefin Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #000;
    min-height: 100vh;
  }
</style>
