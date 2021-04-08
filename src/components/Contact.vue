<template>
  <div class="contact">
    <div class="description">
      <p>
        The London-based quintet Unknown Chapters, composed of Andrei Dutu (vocals), Lorenzo Calvo 
        (guitar), Cléo Du Bois (keyboard), Tudor Rotarus (bass) and Łukasz Pietraszewski (drums), 
        was formed in 2017, as the members bonded over their shared love of alternative pop-rock music.
      </p>
      <p>
        After exploring the many facets of their artistry, blending genres and influences, the band 
        self-released their debut EP “The Age of Dying Radio”, setting the soundtrack to an imaginary 
        future script where Mankind moves to Mars to establish their new home.
      </p>
    </div>
    <div class="socialMediaContent">
      <social-media/>
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
    background-color: #000;
    clip-path: polygon(0 15vw, 100% 0, 100% 100%, 0% 100%);

    .description {
      max-width: 900px;
      margin: auto;
      font-size: 1.4rem;
      font-weight: 300;
      padding: 20vw 20px 10px;
      color: #fff;
      line-height: 1.3;

      @media screen and (min-width: 500px) {
        padding: 20vw 50px 10px;
      }

      @media screen and (min-width: 768px) {
        padding: 20vw 70px 10px;
        font-size: 1.7rem;
      }
    }

    .socialMediaContent {
      padding: 10px 0 50px;
    }
  }
</style>
