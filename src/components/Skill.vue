<template>
  <div class="work">
    <h2>Skill</h2>
    <div class="work--container">
      <h4>スクールでの学習</h4>
        <ul>
          <li>Html</li>
          <li>Css(Scss)</li>
          <li>Ruby</li>
          <li>Ruby on Rails</li>
          <li>JavaScript</li>
          <li>Jquery</li>
        </ul>
      <h4>スクール外の学習</h4>
        <ul>
          <li>Vue.js</li>
          <li>SQL(MySQL)</li>
          <li>Git(GitHub)</li>
          <li>基本情報技術者</li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  .work {
    padding: 0 20%;
    h2 {
      font-size: 40px;
      text-align: center;
      border-bottom: 2px solid darkblue;
    }
    h4 {
      width: 25%;
      text-align: center;
    }
    &--container {
      display: flex;
      justify-content: center;
      ul {
        width: 25%;
      }
      ul > li {
        line-height: 2rem;
      }
    }
  }
</style>