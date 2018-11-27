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
        <SocialMedia/>
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
    height: 700px;
    overflow: hidden;
    position: relative;

    &__inner {
      position: absolute;
      transform: rotate(-5deg);
      width:110%;
      top: 20%;
      bottom: -20%;
      left:-5%;
      background-color: #000;
    }

    &__content {
      position: absolute;
      top: 33%;
      bottom: 0;
      width: 100%;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .description {
        max-width: 900px;
        font-size: 1.7rem;
        font-weight: 300;
        padding: 10px 70px;
        color: #fff;
        line-height: 1.3;
      }

      .socialMediaContent {
        padding: 10px 0;
      }
    }
  }
</style>
