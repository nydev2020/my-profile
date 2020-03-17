<template>
  <div class="skill">
    <h2>Skill</h2>
    <h4>使用言語・フレームワークなど</h4>
    <p>【注意】Hello Worldのみは除く。</p>
    <p>これまでの学習のメインはRubyとRailsを使った開発です。TECH::CAMPで個人開発としてブログアプリ・チャットアプリを行い、
      グループ開発でフリマという会員制のフリーマーケットアプリを作成しました。
      その中でプログラミングの楽しさや習得の難しさを肌で感じながら日々学習をし自己研鑽しています。</p>
    <div class="skill--container">
      <ul>
        <li>Html</li>
        <li>Css(Scss)</li>
        <li>Ruby</li>
        <li>Ruby on Rails</li>
        <li>JavaScript</li>
        <li>Jquery</li>
      </ul>
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
  @mixin sp {
    @media (max-width: (769px)) {
      @content;
    }  
  }
  .skill {
    padding: 0 20%;
    @include sp{
      padding: 20px 5%;
    }
    h2 {
      font-size: 40px;
      letter-spacing: 5px;
      filter: drop-shadow(5px 5px 5px rgba(0,0,0,0.3));
      text-align: center;
      border-bottom: 2px solid darkblue;
    }
    h4 {
      text-align: center;
    }
    
    p {
      text-align: center;
      padding: 0 10%;
    }
    &--container {
      display: flex;
      justify-content: center;
      ul {
        width: 25%;
        li {
          line-height: 2rem;
        }
      }
    }
  }
</style>