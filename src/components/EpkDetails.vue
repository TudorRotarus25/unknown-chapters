<template>
  <div class="epk-details">
    <h1>Electronic Press Kit</h1>
    <div class="epk-details__bio section">
      <h2>Bio</h2>
      <p>
        Balancing the ambition to deliver a distinctive palette of sound with the aim of maintaining
        a Pop sensibility in their songwriting, Unknown Chapters sets the soundtrack to an imaginary
        movie.
        We are in 2069; Planet Earth is doomed to die. After having exploited all of its resources,
        Mankind moves to Mars to establish their new home. But destitute communities cannot afford
        the travel and new generations are Born and Bred to survive the critical conditions of the
        final days of life on Earth.
      </p>
      <p>
        As you travel through their world, the rolling of drums sets the pace while dark-ballady
        pianos, shimmery guitars and honeyed vocals accompany you to the final destination: Mars.
      </p>
      <p>
        After performing at festivals such as Camden Rocks and Rock at The Castle, and releasing
        their first two singles "Losing My Mind" and "Alligator", recorded with promising young
        producer David Flahou and mixed & mastered by Grammy-nominated engineer Jonas Westling
        (Lady Gaga, etc.), the Alternative Pop-Rock band devoted its’ past year to the writing of
        their debut EP. They wanted the album to have a conceptual purpose that could embody the
        social context they grew up in, while delivering meaningful Rock music. The first track of
        the EP to appear online will be “Born and Bred”, due to be released on the 11th of October.
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
