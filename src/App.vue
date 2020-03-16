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
    <router-view></router-view>
  </div>
</template>

<script>

</script>



<style>
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
  }
  nav > ul > li {
    font-size: 1rem;
    padding: 20px 50px;
  }
  li > a {
    color: #efefef;
    letter-spacing: 2px;
    text-decoration: none;
  }
  .link-active {
    color: darkblue;
    font-weight: 900;
  }
</style>
