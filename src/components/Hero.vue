<template>
  <div class="hero">
    <div class="hero__imageContainer">
      <img src="../assets/born-and-bred-artwork.jpg">
    </div>
    <div class="hero__caption">
      BORN AND BRED
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
      top: 45%;
      left: 0;
      width: 100%;
      transform: translateY(-50%);

      img {
        max-width: 250px;
        width: 80%;
        border: 1px solid #000;
        box-shadow: 11px 11px 20px 3px rgba(0, 0, 0, .5);
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
