<template>
  <footer>
    <div class="container">
      <div class="container__left">
        © Unknown Chapters 2018
      </div>
      <div
        class="container__right"
        @click="copyMailToClipboard"
      >
        <i class="fas fa-envelope-open"/>
        info.unknownchapters@gmail.com
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style
  lang="scss"
  scoped
>
  footer {
    background-color: #2e2b37;
    height: 100px;

    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      padding: 0 80px;
      color: #fff;
      font-size: 1.2rem;
      font-weight: bold;

      &__right {
        i {
          margin-right: 5px;
        }
      }
    }
  }
</style>
