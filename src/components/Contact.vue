<template>
  <div class="contact">
    <div class="contact__inner"/>
    <div class="contact__socialMedia">
      <SocialMedia/>
    </div>
  </div>
</template>

<script>
import SocialMedia from './SocialMedia.vue';

export default {
  name: 'Contact',
  components: {
    SocialMedia,
  },
};
</script>

<style
  lang="scss"
  scoped
>
  .contact {
    height: 500px;
    overflow: hidden;
    position: relative;

    &__inner {
      position: absolute;
      transform: rotate(-5deg);
      width:110%;
      top:20%;
      bottom: -20%;
      left:-5%;
      background-color: #000;
    }

    &__socialMedia {
      position: absolute;
      top: 75%;
      transform: translateY(-50%);
      width: 100%;
      text-align: center;
    }
  }
</style>
