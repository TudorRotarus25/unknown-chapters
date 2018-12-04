<template>
  <div class="epk">
    <small-hero />
    <epk-details
      :press-articles="pressArticles"
      :singles="singles"
    />
  </div>
</template>

<script>
import axios from 'axios';
import EpkDetails from '../components/EpkDetails.vue';
import SmallHero from '../components/SmallHero.vue';

export default {
  name: 'Epk',
  components: {
    SmallHero,
    EpkDetails,
  },
  data() {
    return {
      images: [],
      singles: [],
      pressArticles: [],
    };
  },
  mounted() {
    const basePath = 'https://hecuuklijb.execute-api.eu-west-2.amazonaws.com/PROD';

    axios.get(`${basePath}/epk`)
      .then((response) => {
        if (response.status === 200 && response.data) {
          this.images = response.data.images;
          this.singles = response.data.singles;
          this.pressArticles = response.data.pressArticles;
        }
      });
  },
};
</script>

<style
  lang="scss"
  scoped
>
  .epk {
    padding: 134px 0 80px;
  }
</style>
