<template>
  <div class="contact">
    <div class="description">
      <p>
        Balancing the ambition to deliver a distinctive palette of sound with the aim of
        maintaining a Pop sensibility in their songwriting, Unknown Chapters sets the soundtrack
        to an imaginary movie. As you travel through their world, the rolling of drums sets the
        pace while dark-ballady pianos, shimmery guitars and honeyed vocals accompany you to the
        final destination: Mars.
      </p>
      <p>
        After performing at festivals such as Camden Rocks and Rock at The Castle, the
        Alternative Pop-Rock band devoted its past year to the writing of their debut EP. They
        wanted the album to have a conceptual purpose that could embody the social context they
        grew up in, while delivering meaningful Rock music.
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
