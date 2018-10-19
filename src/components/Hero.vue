<template>
  <div class="hero">
    <SocialMedia class="socialMedia"/>
  </div>
</template>

<script>
import SocialMedia from './SocialMedia.vue';

export default {
  name: 'Hero',
  components: {
    SocialMedia,
  },
};
</script>

<style
  lang="scss"
  scoped
>
  .hero {
    background-color: #85b7c1;
    height: 100vh;
    position: relative;
    width: 100%;

    .socialMedia {
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
</style>
