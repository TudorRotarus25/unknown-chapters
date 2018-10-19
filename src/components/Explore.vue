<template>
  <div class="explore">
    <div class="latestRelease">
    </div>
    <div class="nextEvent">
    </div>
    <div class="pictures">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Explore',
};
</script>

<style
  lang="scss"
  scoped
>
  .explore {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .latestRelease,
    .nextEvent,
    .pictures {
      height: 600px;
      position: relative;
      margin-bottom: 8px;
    }

    .latestRelease,
    .nextEvent {
      flex-basis: calc(50% - 4px);
    }

    .latestRelease {
      background-color: #dbebff;
    }

    .nextEvent {
      background-color: #dbebff;
    }

    .pictures {
      flex-basis: 100%;
      background-color: #dbebff;
    }
  }
</style>
