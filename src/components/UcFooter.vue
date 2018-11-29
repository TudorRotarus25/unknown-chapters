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
          hello@unknownchapters.com
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

    .container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      color: #000;
      font-size: 1.2rem;
      font-weight: bold;
      border-top: 3px solid #000;

      @media screen and (min-width: 768px) {
        padding: 0 50px;
      }

      a {
        text-decoration: none;
        color: inherit;
      }

      &__left{
        flex-basis: 100%;
        order: 1;
        margin: 15px 0 40px;

        @media screen and (min-width: 768px) {
          order: 0;
          flex-basis: 50%;
          margin: 45px 0;
          text-align: left;
        }
      }

      &__right {
        flex-basis: 100%;
        margin: 40px 0 15px;

        @media screen and (min-width: 768px) {
          flex-basis: 50%;
          margin: 45px 0;
          text-align: right;
        }

        i {
          margin-right: 5px;
        }
      }
    }
  }
</style>
