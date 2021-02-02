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

    axios.get('https://www.instagram.com/unknownchapters/?__a=1')
      .then((response) => {
        if (!response || !response.data) {
          return;
        }

        const json = response.data;

        if (
          !json.graphql
          || !json.graphql.user
          || !json.graphql.user.edge_owner_to_timeline_media
        ) {
          console.error('Instagram data is not in the correct format: ', json);
          return;
        }

        const nodes = json.graphql.user.edge_owner_to_timeline_media.edges;

        const usedImages = 0;
        let nodesIndex = 0;

        while (usedImages < maxNumberOfImages && nodesIndex < nodes.length) {
          const { node } = nodes[nodesIndex];
          const { __typename: type, display_url: displayUrl } = node;

          if (type === 'GraphImage' || type === 'GraphSidecar') {
            this.images.push(displayUrl);
          }
          nodesIndex += 1;
        }

        response.data.data.slice(0, 5).forEach((post) => {
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
