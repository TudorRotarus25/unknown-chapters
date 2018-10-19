<template>
  <div class="homepage">
    <hero/>
    <description/>
    <explore/>
  </div>
</template>

<script>
import Hero from '../components/Hero.vue';
import Description from '../components/Description.vue';
import Explore from '../components/Explore.vue';

export default {
  name: 'Homepage',
  components: {
    Hero,
    Description,
    Explore,
  },
};
</script>

<style lang="scss">
  @keyframes fadeInFromNone {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
</style>
