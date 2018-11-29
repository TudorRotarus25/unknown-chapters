<template>
  <div class="contact">
    <div class="contact__inner"/>
    <div class="contact__content">
      <div class="description">
        <p>
          We're a five-piece Indie Pop-Rock band formed in London in late 2017, tracing
          a crossroad between Red Hot Chilli Peppers and early Maroon 5.
        </p>
      </div>
      <div class="socialMediaContent">
        <social-media/>
      </div>
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
    height: 480px;
    overflow: hidden;
    position: relative;

    @media screen and (min-width: 768px) {
      height: 700px;
    }

    &__inner {
      position: absolute;
      transform: rotate(-5deg);
      width:120%;
      top: 5%;
      bottom: -5%;
      left:-5%;
      background-color: #000;

      @media screen and (min-width: 500px) {
        width:110%;
        top: 20%;
        bottom: -20%;
      }
    }

    &__content {
      position: absolute;
      top: 15%;
      bottom: 0;
      width: 100%;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      @media screen and (min-width: 500px) {
        top: 33%;
      }

      .description {
        max-width: 900px;
        font-size: 1.4rem;
        font-weight: 300;
        padding: 10px 20px;
        color: #fff;
        line-height: 1.3;

        @media screen and (min-width: 500px) {
          padding: 10px 50px;
        }

        @media screen and (min-width: 768px) {
          padding: 10px 70px;
          font-size: 1.7rem;
        }
      }

      .socialMediaContent {
        padding: 10px 0;
      }
    }
  }
</style>
