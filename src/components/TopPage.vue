<template>
  <div class="top">
    <h3><span>Hello</span></h3>
    <h2><span>Welcome to</span></h2>
    <h1><span>Nishinaka's Profile</span></h1>
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
  .top {
    width: 100%;
    h3 {
      text-align: center;
      height: 150px;
      line-height: 200px;
      letter-spacing: 5px;
      filter: drop-shadow(5px 5px 5px rgba(0,0,0,0.3));
      span {
        padding: 20px;
        border-bottom: 2px solid darkblue;
      }
    }
    h2 {
      text-align: center;
      height: 200px;
      line-height: 200px;
      letter-spacing: 5px;
      filter: drop-shadow(5px 5px 5px rgba(0,0,0,0.3));
      span {
        padding: 20px;
        border-bottom: 2px solid darkblue;
      }
      @include sp{
        font-size: 20px;
        padding: 0;
      } 
    }
    h1 {
      text-align: center;
      height: 250px;
      line-height: 150px;
      letter-spacing: 3px;
      filter: drop-shadow(5px 5px 5px rgba(0,0,0,0.3));
      span {
        padding: 20px 40px;
        border-bottom: 2px solid darkblue;
      }
      @include sp{
        font-size: 20px;
        padding: 0;
      } 
    }
  }
  
</style>