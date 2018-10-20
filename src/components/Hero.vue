<template>
  <div class="hero">
    <div class="hero__imageContainer">
      <img src="../assets/uc-animated.gif"/>
    </div>
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

    &__imageContainer {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      img {
        max-width: 750px;
      }
    }

    .socialMedia {
      position: absolute;
      bottom: 40px;
      width: 100%;
      text-align: center;
      left: 0;
    }
  }
</style>
