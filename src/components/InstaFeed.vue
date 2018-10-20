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
import instagramConfig from '../config/instagramConfig.json';

export default {
  name: 'InstaFeed',
  data() {
    return {
      images: [],
    };
  },
  mounted() {
    axios.get(`https://api.instagram.com/v1/users/self/media/recent?access_token=${instagramConfig.accessToken}`)
      .then((response) => {
        if (!response || !response.data || !response.data.data) {
          return;
        }

        response.data.data.slice(0, 4).forEach((post) => {
          this.images.push(post.images.standard_resolution.url);
        });
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

      &:nth-child(1) {
        transform: rotate(10deg) translateX(200px);
      }

      &:nth-child(2) {
        transform: rotate(-20deg) translateX(60px);
        z-index: 1;
      }

      &:nth-child(3) {
        transform: rotate(8deg) translateX(-40px);
      }

      &:nth-child(4) {
        transform: rotate(-17deg) translateX(-200px);
      }

      img {
        display: block;
        width: 200px;
      }
    }
  }
</style>
