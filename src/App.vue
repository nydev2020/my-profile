<template>
  <div class="container">
    <nav>
      <ul>
        <li><router-link to="/" active-class="link-active" exact>Top</router-link></li>
        <li><router-link to="/about" active-class="link-active">About</router-link></li>
        <li><router-link to="/skill" active-class="link-active">Skill</router-link></li>
        <li><router-link to="/work" active-class="link-active">Work</router-link></li>
        <li><router-link to="/post" active-class="link-active">Post</router-link></li>
      </ul>
    </nav>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

</script>



<style lang="scss">
  @mixin sp {
    @media (max-width: (769px)) {
      @content;
    }  
  } 
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter-to, .fade-leave  {
    opacity: 1;
  }
  .container {
    width: 100%;
    box-sizing: border-box;
  }
  nav {
    background-image: linear-gradient(45deg, #2af59f 0%, #006eff 100%);
  }
  nav > ul {
    list-style: none;
    display: flex;
    justify-content: center;
    padding: 0;
    margin: 0;
  }
  nav > ul > li {
    font-size: 1rem;
    padding: 20px 50px;
    @include sp{
      padding: 20px 2%;
    }
  }
  li > a {
    font-size: 20px;
    color: #efefef;
    letter-spacing: 2px;
    text-decoration: none;
    transition: .7s;
  }
  a:hover {
    opacity: .8;
    color: darkblue;
  }
  
  .link-active {
    color: darkblue;
    // font-weight: 900;
  }
</style>
