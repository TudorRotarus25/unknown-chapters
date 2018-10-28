<template>
  <div class="hero">
    <div class="hero__imageContainer">
      <img src="../assets/uc-transparent-hero.png">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
};
</script>

<style
  lang="scss"
  scoped
>
  .hero {
    background-color: #a52422;
    height: 100vh;
    position: relative;
    width: 100%;

    &__imageContainer {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      img {
        max-width: 650px;
      }
    }
  }
</style>
