<template>
  <footer>
    <div class="container">
      <div class="container__left">
        © Unknown Chapters 2018
      </div>
      <div
        class="container__right"
      >
        <a href="mailto:info.unknownchapters@gmail.com">
          <i class="fas fa-envelope-open"/>
          info.unknownchapters@gmail.com
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'UcFooter',
};
</script>

<style
  lang="scss"
  scoped
>
  footer {
    background-color: #fff;
    height: 150px;

    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      padding: 0 80px;
      color: #000;
      font-size: 1.2rem;
      font-weight: bold;
      border-top: 3px solid #000;

      a {
        text-decoration: none;
        color: inherit;
      }

      &__right {
        i {
          margin-right: 5px;
        }
      }
    }
  }
</style>
