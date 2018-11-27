<template>
  <div class="homepage">
    <hero/>
    <contact/>
    <explore/>
  </div>
</template>

<script>
import Hero from '../components/Hero.vue';
import Contact from '../components/Contact.vue';
import Explore from '../components/Explore.vue';

export default {
  name: 'Homepage',
  components: {
    Hero,
    Contact,
    Explore,
  },
};
</script>
