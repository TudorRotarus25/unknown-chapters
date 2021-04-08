<template>
  <div class="explore">
    <div class="nextEvent">
      <a target="_blank" href="https://www.facebook.com/pg/unknownchapters/events/">
        <div class="imageContainer">
          <img
            ref="nexEventImage"
            src="../assets/Final07111.jpg"
          />
        </div>
        <div class="cta">
          <p>
            Join us at our next gig
          </p>
          <span class="button">Open on Facebook</span>
        </div>
      </a>
    </div>
    <div class="latestRelease">
      <a target="_blank" href="https://open.spotify.com/album/5QupblecS3ftnq8mTRwH8h">
        <div
          class="imageContainer"
        >
          <img
            ref="latestReleaseImage"
            src="../assets/close-to-you-artwork.jpeg"
          />
        </div>
        <div class="cta">
          <p>
            Check out our music
          </p>
          <span class="button">Open on Spotify</span>
        </div>
      </a>
    </div>
    <div class="pictures">
      <a target="_blank" href="https://www.instagram.com/unknownchapters/">
        <insta-feed/>
        <div class="cta">
          <span class="button">Check out our social media</span>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import InstaFeed from './InstaFeed.vue';

export default {
  name: 'Explore',
  components: {
    InstaFeed,
  },
};
</script>

<style
  lang="scss"
  scoped
>
  $transitions-time: .4s;

  .explore {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 8px;

    .latestRelease,
    .nextEvent,
    .pictures {
      height: 400px;
      margin-bottom: 8px;
      position: relative;

      @media screen and (min-width: 500px) {
        height: 450px;
      }

      @media screen and (min-width: 768px) {
        height: 600px;
      }

      a {
        display: block;
        height: 100%;
        width: 100%;

        @media screen and (min-width: 1024px) {
          &:hover {
            .imageContainer {
              transform: translate(-50%, -50%) scale(1.2);
            }

            .button {
              opacity: 1;
            }
          }
        }
      }

      .imageContainer {
        position: absolute;
        top: 36%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: $transitions-time;

        img {
          box-shadow: 0 5px 20px 2px rgba(0, 0, 0, 0.5);
          display: block;
          width: 200px;

          @media screen and (min-width: 500px) {
            width: 280px;
          }
        }
      }
    }

    .latestRelease,
    .nextEvent {
      flex-basis: 100%;

      @media screen and (min-width: 1024px) {
        flex-basis: calc(50% - 4px);
      }
    }

    $linearAngle: 60deg;

    .latestRelease {
      background: linear-gradient($linearAngle, #013142, #01a5a2);
    }

    .nextEvent {
      background: linear-gradient($linearAngle, #592766, #ff3141);
    }

    .pictures {
      flex-basis: 100%;
      background-color: #000;
      width: 100%;
      padding-bottom: 50px;

      @media screen and (min-width: 768px) {
        padding-bottom: 0;
      }

      .cta {
        bottom: 35px;

        @media screen and (min-width: 500px) {
          bottom: 50px;
        }
      }
    }
  }

  .cta {
    font-size: 1.5rem;
    color: #fff;
    position: absolute;
    bottom: 50px;
    width: 100%;
    text-align: center;

    @media screen and (min-width: 768px) {
      bottom: 100px;
    }

    .button {
      font-size: 0.7em;
      border: 1px solid #fff;
      border-radius: 20px;
      padding: 10px 20px;
      transition: $transitions-time;

      @media screen and (min-width: 1024px) {
        opacity: .7;
      }
    }
  }
</style>
