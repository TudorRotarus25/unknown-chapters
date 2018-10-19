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
          this.images.push(post.images.low_resolution.url);
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

    .imageContainer {
      display: inline-block;
      margin: 20px;
      background-color: #fff;
      padding: 6px;

      img {
        display: block;
      }
    }
  }
</style>
