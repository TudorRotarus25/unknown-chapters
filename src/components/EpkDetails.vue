<template>
  <div class="epk-details">
    <h1>Electronic Press Kit</h1>
    <div class="epk-details__bio section">
      <h2>Bio</h2>
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
      <p>
        After performing at festivals such as Camden Rocks and Rock at The Castle and collaborating
        with Grammy-nominated engineers Jonas Westling (Lady Gaga, etc.), Pete Maher (U2, The 1975,
        One Republic, etc.) and promising young producers such as David Flahou and Marek Deml (Sam Smith, etc.),
        the band announced that it would write, record and release one song every month for a year (2021).
      </p>
      <p>
        In just a few months, the band has received national radio airplay and reached over 10K monthly listeners
        on Spotify.
      </p>
    </div>
    <div class="epk-details__members section">
      <h2>Members</h2>
      <ul>
        <li>
          Andrei Dutu – Vocals
        </li>
        <li>
          Lorenzo Calvo - Guitar
        </li>
        <li>
          Cléo Du Bois – Keyboard
        </li>
        <li>
          Tudor Rotarus – Bass
        </li>
        <li>
          Łukasz Pietraszewski – Drums
        </li>
      </ul>
    </div>
    <div class="epk-details__images section">
      <h2>Images</h2>
      <div class="images-container">
        <div
          v-for="image in images"
          :key="image.id"
          class="image-container"
        >
          <a
            :href="image.path"
            target="_blank"
          >
            <div
              class="image-container__image"
              :style="`background-image: url(${image.thumbnail};`"
            />
          </a>
        </div>
      </div>
    </div>
    <div class="epk-details__visuals section">
      <h2>Visuals</h2>
      <div class="images-container">
        <div
          v-for="image in visuals"
          :key="image.id"
          class="image-container"
        >
          <a
            :href="image.path"
            target="_blank"
          >
            <div
              class="image-container__image"
              :style="`background-image: url(${image.thumbnail};`"
            />
          </a>
        </div>
      </div>
    </div>
    <div class="epk-details__socials section">
      <h2>Socials</h2>
      <social-media theme="dark" />
    </div>
  </div>
</template>

<script>
import SocialMedia from './SocialMedia.vue';

export default {
  name: 'EpkDetails',
  components: {
    SocialMedia,
  },
  props: {
    images: {
      type: Array,
      default() {
        return [];
      },
    },
    visuals: {
      type: Array,
      default() {
        return [];
      },
    },
    pressArticles: {
      type: Array,
      default() {
        return [];
      },
    },
    singles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style
  lang="scss"
  scoped
>
  .epk-details {
    max-width: 900px;
    margin: 0 auto;
    padding-top: 20px;
    line-height: 1.3;
    font-size: 1.1em;

    h1, h2 {
      text-align: center;
    }

    ul {
      list-style: none;
    }

    .section {
      padding: 10px;
    }

    .images-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      .image-container {
        padding: 5px;

        &__image {
          height: 200px;
          width: 280px;
          background-color: #000;
          background-position: center;
          background-repeat: no-repeat;
          background-size: auto 100%;
        }
      }
    }

    &__press-articles {
      .press-articles-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        &__item {
          flex-basis: 46%;
          height: 60px;
          box-shadow: 0 0 25px rgba(0, 0, 0, .2);
          transition: .3s;
          margin: 2%;

          @media screen and (min-width: 768px) {
            flex-basis: 21%;
          }

          &:hover {
            box-shadow: 0 0 25px rgba(0, 0, 0, .4);
          }
        }

        &__anchor {
          color: #000;
          text-decoration: none;
          display: flex;
          height: 100%;
          width: 100%;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
</style>
