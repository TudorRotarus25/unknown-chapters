<template>
  <div class="hero">
    <div class="hero__imageContainer">
      <img src="../assets/aligatorWebSite.png">
    </div>
    <div class="hero__caption">
      ALLIGATOR
      <p class="hero__subCaption">
        OUR NEW SINGLE<span class="separator"> - </span><span class="outSoon">OUT NOW</span>
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
      left: 0;
      width: 100%;
      transform: translateY(-50%);

      img {
        max-width: 500px;
        width: 80%;
      }
    }

    &__caption {
      position: absolute;
      top: 75%;
      left: 0;
      width: 100%;
      transform: translateY(-50%);
      font-size: 1.3rem;
      letter-spacing: 15px;
      margin-top: 22px;

      @media screen and (min-width: 600px) {
        margin-top: 30px;
      }
    }

    &__subCaption {
      font-size: 0.7em;
      letter-spacing: 10px;
      margin: 22px 0;
      padding: 0 10px;

      @media screen and (min-width: 600px) {
        letter-spacing: 13px;
        margin: 30px 0;
      }

      .separator {
        display: none;

        @media screen and (min-width: 600px) {
          display: inline-block;
        }
      }

      .outSoon {
        display: block;
        margin-top: 8px;

        @media screen and (min-width: 600px) {
          display: inline-block;
          margin-top: 0;
        }
      }
    }
  }
</style>
