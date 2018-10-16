<template>
  <ul class="socialMedia">
    <li class="socialMedia__item">
      <a target="_blank" href="https://www.facebook.com/unknownchapters/">
        <i class="fab fa-facebook-f"/>
      </a>
    </li>
    <li class="socialMedia__item">
      <a target="_blank" href="https://open.spotify.com/artist/1NtDCbBi3GqDvVxxdPPold">
        <i class="fab fa-spotify"></i>
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
  </ul>
</template>

<script>
export default {
  name: 'SocialMedia',
};
</script>

<style lang="scss">
  .socialMedia {
    display: inline-block;
    padding: 10px 0;

    &__item {
      display: inline-block;
      margin: 0 20px;

      a i {
        font-size: 4rem;

        &.fa-facebook-f {
          background: -webkit-linear-gradient(45deg, #fc79ff, #ab0068);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        &.fa-spotify {
          background: -webkit-linear-gradient(45deg, #ab0068, #ff5d2a);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        &.fa-instagram {
          background: -webkit-linear-gradient(45deg, #ff5d2a, #8e0000);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        &.fa-twitter {
          background: -webkit-linear-gradient(45deg, #8e0000, #ede300);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
    }
  }
</style>
