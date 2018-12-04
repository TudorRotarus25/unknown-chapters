<template>
  <ul :class="{socialMedia: true, dark: theme === 'dark'}">
    <li class="socialMedia__item">
      <a target="_blank" href="https://www.facebook.com/unknownchapters/">
        <i class="fab fa-facebook-square"/>
      </a>
    </li>
    <li class="socialMedia__item">
      <a target="_blank" href="https://www.instagram.com/unknownchapters/">
        <i class="fab fa-instagram"/>
      </a>
    </li>
    <li class="socialMedia__item">
      <a target="_blank" href="https://twitter.com/unknownchapt">
        <i class="fab fa-twitter"/>
      </a>
    </li>
    <li class="socialMedia__item">
      <a target="_blank" href="https://open.spotify.com/artist/1NtDCbBi3GqDvVxxdPPold">
        <i class="fab fa-spotify"/>
      </a>
    </li>
    <li class="socialMedia__item">
      <a target="_blank" href="https://itunes.apple.com/gb/artist/unknown-chapters/1406445840">
        <i class="fab fa-itunes"/>
      </a>
    </li>
    <li class="socialMedia__item">
      <a target="_blank" href="https://soundcloud.com/unknown-chapters">
        <i class="fab fa-soundcloud"/>
      </a>
    </li>
    <li class="socialMedia__item">
      <a target="_blank" href="https://www.youtube.com/channel/UCKP1PtHlztxNAaqrIJIIiUQ">
        <i class="fab fa-youtube"/>
      </a>
    </li>
    <li class="socialMedia__item">
      <a href="mailto:info.unknownchapters@gmail.com">
        <i class="far fa-envelope"/>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'SocialMedia',
  props: {
    theme: {
      type: String,
      default: 'light',
    },
  },
};
</script>

<style lang="scss">
  .socialMedia {
    display: inline-block;
    width: 290px;

    @media screen and (min-width: 500px) {
      width: 100%;
    }

    &.dark {
      a i {
        color: #000;
      }
    }

    &__item {
      display: inline-block;
      margin: 15px;

      @media screen and (min-width: 500px) {
        margin-top: 0;
        margin-bottom: 0;
      }

      @media screen and (min-width: 768px) {
        margin: 0 25px;
      }

      a {
        i {
          font-size: 2.2rem;
          color: #fff;
          transition: 0.3s;

          @media screen and (min-width: 768px) {
            font-size: 2.5rem;
          }

          &:hover {
            transform: scale(1.5);
          }
        }
      }
    }
  }
</style>
