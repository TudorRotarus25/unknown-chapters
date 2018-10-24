<template>
  <div class="homepage">
    <Navbar/>
    <Hero/>
    <Description/>
    <Explore/>
    <Footer/>
  </div>
</template>

<script>
import Hero from '../components/Hero.vue';
import Description from '../components/Description.vue';
import Explore from '../components/Explore.vue';
import Footer from '../components/Footer.vue';
import Navbar from '../components/Navbar.vue';

export default {
  name: 'Homepage',
  components: {
    Navbar,
    Hero,
    Description,
    Explore,
    Footer,
  },
};
</script>

<style lang="scss">
</style>
