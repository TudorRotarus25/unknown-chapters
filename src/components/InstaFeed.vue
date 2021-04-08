<template>
  <div class="instaFeed">
    <div
      v-for="(image, index) in images"
      :key="index"
      class="imageContainer"
    >
      <img
        :src="image"
        :alt="`Instagram image ${index}`"
      >
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'InstaFeed',
  data() {
    return {
      images: [],
    };
  },
  mounted() {
    const maxNumberOfImages = 5;

    axios.get('http://images.unknownchapters.com/instagram-images.json')
      .then((response) => {
        if (!response || !response.data) {
          return;
        }

        this.images = response.data;
      });
  },
};
</script>

<style
  lang="scss"
  scoped
>
  .instaFeed {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    height: 100%;
    overflow: hidden;

    &:hover {
      .imageContainer {
        transform: none !important;
      }
    }

    .imageContainer {
      display: inline-block;
      margin: 10px;
      background-color: #fff;
      padding: 4px;
      transition: 0.8s;

      &:nth-child(4) {
        display: none;
      }

      &:nth-child(5) {
        display: none;
      }

      @media screen and (min-width: 900px) {
        &:nth-child(1) {
          transform: rotate(-20deg) translateX(150px);
          z-index: 1;
        }

        &:nth-child(2) {
          transform: rotate(40deg) translateX(-5px);
        }

        &:nth-child(3) {
          transform: rotate(10deg) translateX(-120px);
          z-index: 2;
        }
      }

      @media screen and (min-width: 1440px) {
        &:nth-child(1) {
          transform: rotate(10deg) translateX(280px);
        }

        &:nth-child(2) {
          transform: rotate(-20deg) translateX(100px);
          z-index: 1;
        }

        &:nth-child(3) {
          transform: rotate(40deg) translateX(-5px);
        }

        &:nth-child(4) {
          display: block;
          transform: rotate(10deg) translateX(-120px);
        }

        &:nth-child(5) {
          display: block;
          transform: rotate(-10deg) translateX(-290px);
        }
      }

      img {
        display: block;
        width: 250px;
      }
    }
  }
</style>
