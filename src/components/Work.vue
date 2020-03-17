<template>
  <div class="work">
    <h2>Work</h2>
    <div class="work--container">
      <div class="work--container--box">
        <!-- <a href="http://3.114.223.215"> -->
        <a href="#">
        <h4>初の個人開発</h4>
        </a>
        <p>文章・画像投稿アプリ</p>
        <p>ターゲットも目的もなく作ってしまったが反省</p>
        <p>ここに載せることで今度同じことを繰り返さない戒めの意味を込めています。</p>
        <img src="#" alt="イメージ画像">
      </div>
      <div class="work--container--box">
        <a href="http://18.177.4.93" target="_blank">
        <h4>フリマ</h4>
        </a>
        <p>スクールでのグループ製作物</p>
        <p>使用した技術</p>
        <p>Ruby/Rails/haml/scss/JavaScript/Jquery</p>
        <p>GitHubを用いた開発</p>
        <p>開発担当は、PayjpのAPIを使用した決済</p>
        <img src="../assets/furimalogo.png" width=250px alt="イメージ画像">
      </div>
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
  .work {
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
    &--container {
      padding: 20px;
      display: grid;
      gap: 5%;
      grid-template-columns: 47.5% 47.5%;
      grid-template-rows: 300px; 
      @include sp{
      display: block;
      }
      &--box {
        width: 100%;
        padding: 16px;
        box-sizing: border-box;
        border: 1px solid #dddddd;
        border-radius: 5px;
        box-shadow: 5px 5px 10px #eee;
        @include sp{
        margin-bottom: 40px;
        } 
        a {
          text-decoration: none;
        }
        h4 {
          text-align: center;
          margin: 8px 0;
        }
        p {
          text-align: center;
          overflow: hidden;
          margin: 0;
        }
        img {
          width: 80%;
         
          padding: 8px 40px;
        }
      }

    }
  }
</style>