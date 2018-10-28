<template>
  <div class="explore">
    <div class="latestRelease">
      <a target="_blank" href="https://open.spotify.com/album/5kWPhip1gDKVphbRrcIpg4">
        <div
          class="imageContainer"
        >
          <img
            ref="latestReleaseImage"
            src="../assets/losingMyMind.jpg"
          />
        </div>
        <div class="cta">
          <p>Check out our latest single</p>
          <span class="button">Open on Spotify</span>
        </div>
      </a>
    </div>
    <div class="nextEvent">
      <a target="_blank" href="https://www.facebook.com/pg/unknownchapters/events/">
        <div class="imageContainer">
          <img
            ref="nexEventImage"
            src="../assets/gigs.jpg"
          />
        </div>
        <div class="cta">
          <p>Join us at our next gig</p>
          <span class="button">Open on Facebook</span>
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
import VanillaTilt from 'vanilla-tilt';
import InstaFeed from './InstaFeed.vue';

export default {
  name: 'Explore',
  components: {
    InstaFeed,
  },
  mounted() {
    const tiltOptions = {
      reverse: true,
      max: 20,
      speed: 5000,
    };

    VanillaTilt.init(this.$refs.latestReleaseImage, tiltOptions);
    VanillaTilt.init(this.$refs.nexEventImage, tiltOptions);
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

    .latestRelease,
    .nextEvent,
    .pictures {
      height: 600px;
      margin-bottom: 8px;
      position: relative;

      a {
        display: block;
        height: 100%;
        width: 100%;

        &:hover {
          .imageContainer {
            transform: translate(-50%, -50%) scale(1.2);
          }

          .button {
            opacity: 1;
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
          width: 280px;
        }
      }
    }

    .latestRelease,
    .nextEvent {
      flex-basis: calc(50% - 4px);
    }

    .latestRelease {
      background-color: #564d4a;
    }

    .nextEvent {
      background-color: #a52422;
    }

    .pictures {
      flex-basis: 100%;
      background-color: #5b2333;

      .cta {
        bottom: 50px;
      }
    }
  }

  .cta {
    font-size: 1.5rem;
    color: #fff;
    position: absolute;
    bottom: 100px;
    width: 100%;
    text-align: center;

    .button {
      font-size: 0.7em;
      border: 1px solid #fff;
      border-radius: 20px;
      padding: 10px 20px;
      transition: $transitions-time;
      opacity: .7;
    }
  }
</style>
