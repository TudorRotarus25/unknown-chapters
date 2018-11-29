<template>
  <div class="navbar">
    <div class="navbar__brand">
      <router-link to="/">
        <img class="shapeLogo" src="../assets/trasparenza2048x1152.png"/>
      </router-link>
    </div>
    <ul class="navigation">
      <li class="navigation__item">
        <router-link to="/">
          Explore
        </router-link>
      </li>
      <li class="navigation__item">
        <router-link to="/epk">
          Electronic Press Kit
        </router-link>
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
    justify-content: center;
    align-items: center;
    padding: 30px 50px;

    @media screen and (min-width: 768px) {
      justify-content: space-between;
    }

    &__brand {
      .shapeLogo {
        height: 70px;
      }
    }

    .navigation {
      display: none;
      list-style: none;

      @media screen and (min-width: 768px) {
        display: block;
      }

      &__item {
        display: inline-block;
        padding: 0 20px;

        a {
          font-size: 1.2rem;
          cursor: pointer;
          position: relative;
          text-decoration: none;
          color: inherit;

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
