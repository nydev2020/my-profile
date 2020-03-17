<template>
  <div class="work">
    <h2>Work</h2>
    <div class="work--container">
      <div class="work--container--box">
        <h4>フリマ</h4>
        <p>スクールでのグループ製作物</p>
        <img src="#" alt="イメージ画像">
      </div>
      <div class="work--container--box">
        <h4>フリマ</h4>
        <p>スクールでのグループ製作物</p>
        <img src="#" alt="イメージ画像">
      </div>
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

      &--box {
        width: 100%;
        padding: 16px;
        box-sizing: border-box;
        border: 1px solid #dddddd;
        border-radius: 5px;
        box-shadow: 5px 5px 10px #eee;
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
          padding: 8px 40px;
        }
      }

    }
  }
</style>