<template>
  <div
    class="small-hero"
    :style="`background-image: url('${ require('../assets/b&b_cover.jpg') }'`"
  />
</template>

<script>
export default {
  name: 'SmallHero',
};
</script>

<style
  lang="scss"
  scoped
>
  .small-hero {
    height: 70vw;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% auto;
    background-color: #000;

    @media screen and (min-width: 700px) {
      height: calc(100vh - 268px);
      background-size: auto 100%;
    }
  }
</style>
