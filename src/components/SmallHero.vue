<template>
  <div class="small-hero">
    <div class="small-hero__imageContainer">
      <img src="../assets/aligatorWebSite.png">
    </div>
  </div>
</template>

<script>
export default {
  name: 'SmallHero',
};
</script>

<style
  lang="scss"
  scoped
>
  .small-hero {
    height: 250px;
    position: relative;

    &__imageContainer {
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      transform: translateY(-50%);

      img {
        max-width: 300px;
        width: 80%;
      }
    }
  }
</style>
