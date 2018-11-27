<template>
  <div class="hero">
    <div class="hero__imageContainer">
      <img src="../assets/aligatorWebSite.png">
    </div>
    <div class="hero__caption">
      ALLIGATOR
      <p class="hero__subCaption">
        OUR NEW SINGLE - OUT SOON
      </p>
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
    background-color: #fff;
    height: 100vh;
    position: relative;
    width: 100%;

    &__imageContainer {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      img {
        max-width: 500px;
      }
    }

    &__caption {
      position: absolute;
      top: 75%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 1.3rem;
      letter-spacing: 15px;
      margin-top: 30px;
    }

    &__subCaption {
      font-size: 0.7em;
      letter-spacing: 13px;
      margin: 30px 0;
    }
  }
</style>
