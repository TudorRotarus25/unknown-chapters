<template>
  <div
    class="homepage"
    @mousemove="onMouseMove"
    @mouseenter="onMouseMove"
  >
    <div class="homepage__mainImage">
      <div
        class="imageContainer"
        :style="imageStyle"
      >
        <img src="../assets/logo.png" alt="Unknown Chapters">
      </div>
    </div>
    <div class="homepage__footer">
      <social-media/>
      <div class="emailContainer">
        <a href="mailto:info.unknownchapters@gmail.com">
          <i class="far fa-envelope-open"></i>
          info.unknownchapters@gmail.com
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import SocialMedia from '../components/SocialMedia.vue';

export default {
  name: 'Homepage',
  components: {
    SocialMedia,
  },
  data() {
    return {
      mousePosition: {
        x: 0,
        y: 0,
      },
      windowOrigin: {
        x: 0,
        y: 0,
      },
    };
  },
  computed: {
    imageStyle() {
      const x = -this.mousePosition.x / this.windowOrigin.x;
      const y = -this.mousePosition.y / this.windowOrigin.y;

      return {
        transform: `rotateX(${x}deg) rotateY(${y}deg)`,
      };
    },
  },
  mounted() {
    this.windowOrigin.x = Math.floor(window.screen.width / 2);
    this.windowOrigin.y = Math.floor(window.screen.height / 2);
  },
  methods: {
    onMouseMove(event) {
      this.updateMousePosition(event);
    },
    updateMousePosition(event) {
      this.mousePosition.x = event.screenX - this.windowOrigin.x;
      this.mousePosition.y = event.screenY - this.windowOrigin.y;
    },
  },
};
</script>

<style lang="scss">
  .homepage {
    height: 100%;

    &__mainImage {
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      transform: translateY(-50%);
      text-align: center;
      perspective: 60px;

      .imageContainer {
        transition: transform 1s;
      }

      img {
        width: 800px;
        animation: fadeInFromNone 1.5s ease-in;
      }
    }

    &__footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 30px;
      max-width: 1000px;
      margin: auto;

      .emailContainer {
        font-size: 21px;

        a {
          color: #900037;
          text-decoration: none;

          &:hover {
            text-decoration: none;
          }

          i {
            margin-right: 5px;
          }
        }
      }
    }
  }

  @keyframes fadeInFromNone {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
</style>
