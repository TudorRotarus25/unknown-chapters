<template>
  <div class="navbar">
    <div class="navbar__left">
      <img class="shapeLogo" src="../assets/uc-hexa-logo.png"/>
    </div>
    <div class="navbar__right">
      <SocialMedia/>
    </div>
  </div>
</template>

<script>
import SocialMedia from './SocialMedia.vue';

export default {
  name: 'Navbar',
  components: {
    SocialMedia,
  },
};
</script>

<style
  lang="scss"
  scoped
>
  .navbar {
    z-index: 5;
    background-color: #1e1b18;
    border-bottom: 1px solid #1e1b18;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;

    &__left {
      position: relative;

      .shapeLogo {
        position: absolute;
        height: 140px;
        bottom: -35px;
        left: 150px;
      }
    }
  }
</style>
