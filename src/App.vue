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
  body {
    margin: 0;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    min-height: 100vh;
  }
</style>
