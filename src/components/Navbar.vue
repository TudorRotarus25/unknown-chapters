<template>
  <div class="navbar">
    <div class="navbar__brand">
      <img class="shapeLogo" src="../assets/trasparenza2048x1152.png"/>
    </div>
    <ul class="navigation">
      <li class="navigation__item">
        <a>
          Explore
        </a>
      </li>
      <li class="navigation__item">
        <a>
          Electronic Press Kit
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style
  lang="scss"
  scoped
>
  .navbar {
    z-index: 5;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 50px;

    &__brand {
      .shapeLogo {
        height: 70px;
      }
    }

    .navigation {
      list-style: none;

      &__item {
        display: inline-block;
        padding: 0 20px;

        a {
          font-size: 1.2rem;
          cursor: pointer;
          position: relative;

          &:after {
            display: none;
            content: '';
            width: 26px;
            height: 2px;
            background-color: #ff0065;
            position: absolute;
            bottom: -6px;
            left: calc(50% - 13px);
          }

          &:hover:after {
            display: block;
          }
        }
      }
    }
  }
</style>
