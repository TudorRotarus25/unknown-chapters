<template>
  <div id="app">
    <navbar/>
    <router-view/>
    <uc-footer/>
  </div>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './components/Navbar.vue';
import UcFooter from './components/UcFooter.vue';

export default {
  name: 'app',
  components: {
    Navbar,
    UcFooter,
  },
};
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Josefin+Sans:300,400');

  html {
    font-size: 14px;

    @media screen and (min-width: 768px) {
      font-size: 16px;
    }
  }

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
